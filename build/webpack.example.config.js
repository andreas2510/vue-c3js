var path = require('path')
var webpack = require('webpack')

const base = require('./webpack.base.config')
base.entry = './example/main.js'
base.output = {
  path: path.resolve(__dirname, './../example/build'),
  publicPath: '/example/',
  filename: 'build.js'
}
base.devServer = {
  historyApiFallback: true,
  noInfo: true
}

var webpackConfig = Object.assign({}, base)
webpackConfig.devtool = '#source-map'
webpackConfig.plugins = (module.exports.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  })
])

module.exports = webpackConfig

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }
