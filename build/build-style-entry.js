/* eslint-disable no-use-before-define */
/**
 * Build style entry of all components
 * 在es/lib中每个组件目录下生成style文件夹
 */

const fs = require('fs-extra');
const path = require('path');
const dependencyTree = require('dependency-tree');
const components = require('./get-components')(); // ['lazyload', 'locale']

// replace seq for windows
function replaceSeq(path) {
  return path.split(path.sep).join('/');
}

// 白名单内的组件样式不需要引用自身的.less/.css，
// 因为他们作为公用的样式已经打包进了style/base.less
const whiteList = [
  'info',
  'icon',
  'loading',
  'cell',
  'cell-group',
  'button',
  'overlay'
];
const dir = path.join(__dirname, '../es/components');
const libDir = path.join(__dirname, '../lib/components');

function destEntryFile(component, filename, ext = '') {
  const deps = analyzeDependencies(component).map(dep =>
    getStyleRelativePath(component, dep, ext)
  );
  const esEntry = path.join(dir, component, `style/${filename}`);
  const libEntry = path.join(libDir, component, `style/${filename}`);
  const esContent = deps.map(dep => `import '${dep}';`).join('\n');
  const libContent = deps.map(dep => `require('${dep}');`).join('\n');

  fs.outputFileSync(esEntry, esContent);
  fs.outputFileSync(libEntry, libContent);
}

// analyze component dependencies
function analyzeDependencies(component) {
  const checkList = ['base'];

  search(
    dependencyTree({
      directory: dir,
      filename: path.join(dir, component, 'index.js'),
      filter: path => !~path.indexOf('node_modules')
    }),
    component,
    checkList
  );

  if (!whiteList.includes(component)) {
    checkList.push(component);
  }

  return checkList.filter(item => checkComponentHasStyle(item));
}

function search(tree, component, checkList) {
  Object.keys(tree).forEach(key => {
    search(tree[key], component, checkList);
    components
      .filter(item =>
        key
          .replace(dir, '')
          .split('/')
          .includes(item)
      )
      .forEach(item => {
        if (
          !checkList.includes(item) &&
          !whiteList.includes(item) &&
          item !== component
        ) {
          checkList.push(item);
        }
      });
  });
}

function getStylePath(component, ext = '.css') {
  if (component === 'base') {
    return path.join(__dirname, `../es/styles/base${ext}`);
  }

  return path.join(__dirname, `../es/components/${component}/index${ext}`);
}

function getStyleRelativePath(component, style, ext) {
  return replaceSeq(
    path.relative(
      path.join(__dirname, `../es/components/${component}/style`),
      getStylePath(style, ext)
    )
  );
}

function checkComponentHasStyle(component) {
  return fs.existsSync(getStylePath(component));
}

components.forEach(component => {
  // css entry
  destEntryFile(component, 'index.js', '.css');
  // less entry
  destEntryFile(component, 'less.js', '.less');
});
