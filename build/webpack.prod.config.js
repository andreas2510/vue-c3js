var path = require('path')
var webpack = require('webpack')

const base = require('./webpack.base.config')
base.entry = './src/index.js'
base.output = {
  path: path.resolve(__dirname, './../dist'),
  publicPath: '/dist/',
  filename: 'vue-c3js.js',
  library: 'VueC3Js',
  libraryTarget: 'umd',
  umdNamedDefine: true
}

var webpackConfig = Object.assign({}, base)
webpackConfig.externals = {
  'vue': 'vue',
  'c3': 'c3'
}

if (process.env.NODE_ENV === 'production') {
  //delete module.exports.devtool
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
}

module.exports = webpackConfig

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, './../dist'),
//     publicPath: '/dist/',
//     filename: 'vue-c3js.js',
//     library: 'VueC3Js',
//     libraryTarget: 'umd',
//     umdNamedDefine: true
//   },
//   externals: {
//     'vue': 'vue',
//     'c3': 'c3'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader',
//         options: {
//           loaders: {
//           }
//           // other vue-loader options go here
//         }
//       },
//       {
//         test: /(\.jsx|\.js)$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader'
//         ],
//         // loader: 'babel-loader',
//         // exclude: /node_modules/
//       },
//       {
//         test: /\.(png|jpg|gif|svg)$/,
//         loader: 'file-loader',
//         options: {
//           name: '[name].[ext]?[hash]'
//         }
//       }
//     ]
//   },
//   resolve: {
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js'
//     }
//   },
//   devServer: {
//     historyApiFallback: true,
//     noInfo: true
//   },
//   performance: {
//     hints: false
//   },
//   devtool: '#eval-source-map'
// }


