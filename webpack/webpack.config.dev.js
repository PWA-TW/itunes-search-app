const webpack = require('webpack');
const webpackConfig = require('./base');
const WriteFilePlugin = require('write-file-webpack-plugin');

webpackConfig.devtool = 'cheap-module-eval-source-map';
webpackConfig.entry = [
  'babel-polyfill',
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  './src'
];
webpackConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new WriteFilePlugin()
);
webpackConfig.devServer = {
  port: 3040,
  hot: true,
  compress: false,
  historyApiFallback: true,
  stats: {
    colors: true,
    timings: true,
    version: true,
    warnings: true
  }
};

module.exports = webpackConfig;
