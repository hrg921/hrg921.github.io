/**
 * Created by hangeonho on 2017. 9. 27..
 * File name : webpack.config
 * File type : JavaScript
 * File purpose : webpack configuration
 * Status : complete for v0.0.1
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const entryPoints = ['polyfills', 'main'];

module.exports = {
  entry: {
    'main': './src/main.js',
    'polyfills': './src/polyfills.js'
  },

  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [{
      test: /\.html$/,
      use: [ {
        loader: 'html-loader',
        options: {
          minimize: true,
          removeComments: true,
          collapseWhitespace: true
        }
      }]
    }, {
      test: /\.svg$/,
      loader: 'file-loader'
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      }, {
        loader: 'css-loader' // translates CSS into CommonJS
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }]
    }]
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: function sort (left, right) {
        let leftIndex = entryPoints.indexOf(left.names[0]);
        let rightIndex = entryPoints.indexOf(right.names[0]);
        if (leftIndex > rightIndex) {
          return 1;
        } else if (leftIndex < rightIndex) {
          return -1;
        } else {
          return 0;
        }
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
