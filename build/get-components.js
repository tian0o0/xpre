const fs = require('fs');
const path = require('path');

const excludes = [
  '.DS_Store'
];

module.exports = function () {
  const dirs = fs.readdirSync(path.resolve(__dirname, '../src/components'));
  return dirs.filter(dirName => !~excludes.indexOf(dirName));
};
