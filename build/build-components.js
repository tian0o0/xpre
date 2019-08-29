/**
 * Compile components
 * 根据src 编译生成 es/lib
 */
const fs = require('fs-extra');
const path = require('path');
const babel = require('@babel/core');
// const markdownVetur = require('@vant/markdown-vetur');

const esDir = path.join(__dirname, '../es');
const libDir = path.join(__dirname, '../lib');
const srcDir = path.join(__dirname, '../src');
// const componentsDir = path.join(__dirname, '../src/components');
// const veturDir = path.join(__dirname, '../vetur');
const babelConfig = {
  configFile: path.join(__dirname, '../babel.config.js')
};

const scriptRegExp = /\.(js|ts|tsx)$/;
const isDir = dir => fs.lstatSync(dir).isDirectory();
const isCode = path => !/(demo|test|\.md)$/.test(path);
const isScript = path => scriptRegExp.test(path);

// 分别编译es/lib两个目录
function compile(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);

    // remove unnecessary files
    if (!isCode(file)) {
      return fs.removeSync(filePath);
    }

    // scan dir
    if (isDir(filePath)) {
      return compile(filePath);
    }

    // compile js or ts
    if (isScript(file)) {
      const { code } = babel.transformFileSync(filePath, babelConfig);
      fs.removeSync(filePath);
      fs.outputFileSync(filePath.replace(scriptRegExp, '.js'), code);
    }
  });
}

// clear dir
fs.emptyDirSync(esDir);
fs.emptyDirSync(libDir);

// compile es dir
fs.copySync(srcDir, esDir);
compile(esDir);

// compile lib dir
process.env.BABEL_MODULE = 'commonjs';
fs.copySync(srcDir, libDir);
compile(libDir);

// generate vetur tags & attributes
// markdownVetur.parseAndWrite({
//   path: componentsDir,
//   test: /zh-CN\.md/,
//   tagPrefix: 'van-',
//   outputDir: veturDir,
//   maxDeep: 2
// });
