const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: {
    'xpre-docs': './docs/site/desktop/main.js',
    'xpre-mobile': './docs/site/mobile/main.js'
  },
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: '/',
    chunkFilename: '[name].js'
  },
  stats: {
    modules: false,
    children: false
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    stats: 'errors-only',
    clientLogLevel: 'warning'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.vue', '.less']
  },
  //   resolveLoader: {
  //     modules: ['node_modules', '../loaders']
  //   },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.less$/,
        sideEffects: true,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              paths: [path.resolve(__dirname, 'node_modules')]
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: ['vue-loader', '@findx/markdown2vue-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['xpre-docs'],
      template: 'docs/site/desktop/index.html',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['xpre-mobile'],
      template: 'docs/site/mobile/index.html',
      filename: 'mobile.html',
      inject: true
    })
  ]
};
