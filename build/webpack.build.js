const path = require('path');
const config = require('./webpack.dev.js');

const isMinify = process.argv.indexOf('-p') !== -1;

delete config.serve;
config.plugins.splice(-2); // 不生成html

module.exports = Object.assign(config, {
  mode: 'production',
  entry: {
    xpre: './es/index.js'
  },
  output: {
    path: path.join(__dirname, '../lib'),
    library: 'xpre',
    // 暴露为所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量
    libraryTarget: 'umd',
    filename: isMinify ? '[name].min.js' : '[name].js',
    // umdNamedDefine: true,
    // globalObject: 'this'
  },
  // 防止将包打到bundle中
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  performance: false,
  optimization: {
    minimize: isMinify
  }
});
