// https://webpack.js.org/guides/author-libraries/#author-a-library
// http://vue-loader.vuejs.org/en/workflow/production.html

var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './example/main.js',
  output: {
    path: path.resolve(__dirname, './../example/build'),
    publicPath: '/example/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        // loader: 'babel-loader',
        // exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  performance: {
    hints: false
  }
}
