/**
 * 将es/lib 下所有的.less经过一系列转化生成.css
 */

const fs = require('fs-extra');
const glob = require('fast-glob');
const path = require('path');
const less = require('less');
const csso = require('csso');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');

async function compileLess(lessCodes, paths) {
  const outputs = await Promise.all(
    lessCodes.map((lessCode, index) =>
      less.render(lessCode, {
        paths: [path.resolve(__dirname, 'node_modules')],
        filename: paths[index]
      })
    )
  );
  return outputs.map(item => item.css);
}

async function compilePostcss(cssCodes, paths) {
  const postcssConfig = await postcssrc();
  const outputs = await Promise.all(
    cssCodes.map((cssCode, index) =>
      postcss(postcssConfig.plugins).process(cssCode, { from: paths[index] })
    )
  );

  return outputs.map(item => item.css);
}

async function compileCsso(cssCodes) {
  return cssCodes.map(css => csso.minify(css).css);
}

async function dest(codes, paths) {
  await Promise.all(
    codes.map((css, index) => fs.writeFile(paths[index].replace('.less', '.css'), css))
  );

  // icon.less should be replaced by compiled file
  const iconCss = await glob(['./es/icon/*.css', './lib/icon/*.css'], { absolute: true });
  iconCss.forEach(file => {
    fs.copyFileSync(file, file.replace('.css', '.less'));
  });
}

// compile component css
async function compile() {
  let codes;
  const paths = await glob(['./es/**/*.less', './lib/**/*.less'], { absolute: true });
  //   console.log(paths);所有.less组成的数组
  codes = await Promise.all(paths.map(path => fs.readFile(path, 'utf-8')));
  //   console.log(codes);
  codes = await compileLess(codes, paths);
  codes = await compilePostcss(codes, paths);
  codes = await compileCsso(codes);

  await dest(codes, paths);
}

compile();
