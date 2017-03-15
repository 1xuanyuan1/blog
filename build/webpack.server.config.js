const webpack = require('webpack')
const merge = require('webpack-merge')
const utils = require('./utils')
const base = require('./webpack.base.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = merge(base, {
  target: 'node',
  devtool: false,
  entry: './src/server-entry.js',
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: false
    })
  },
  externals: Object.keys(require('../package.json').dependencies),
  plugins: [
    // webpack-bundle-analyzer 来分析 Webpack 生成的包体组成并且以可视化的方式反馈给开发者
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    })
  ]
})
