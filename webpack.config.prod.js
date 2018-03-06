const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    popup: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: '[name].js',
    publicPath: '/js/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-decorators',
              [
                '@babel/plugin-proposal-class-properties',
                {
                  loose: true
                }
              ]
            ]
          }
        }
      }
    ]
  },
  optimization : {
    minimize: true
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CleanWebpackPlugin(['public/js'])
  ]
}
