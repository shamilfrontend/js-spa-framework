const path = require('path');

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname + '/src'),

  entry: './index.js',

  output: {
    filename: "bundle.js",
    path: path.join(__dirname + '/dist')
  },

  devtool: "eval",

  devServer: {
    port: 4200
  },

  plugins: [
    new htmlWebpackPlugin({
      title: 'Spa FrameWork',
      template: "./index.html"
    })
  ]
};
