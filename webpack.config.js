const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: {
    popup: ['./src/index.js']
  },
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: '[name].js',
    publicPath: '/js/'
  },
  devServer: {
    contentBase: 'public',
    port: 3000
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
  }
}
