const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '../' + dir)
}

exports.config = {
  entry: resolve('src/index.js'),

  resolve: {
    extensions: ['.js'],
    alias: {
      '$share': resolve('../../share'),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Shop',
      filename: 'index.html',
      template: resolve('src/index.html')
    })
  ],
}

exports.resolve = resolve