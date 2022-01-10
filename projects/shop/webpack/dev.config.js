const { config, resolve } = require('./base.config')
const { merge } = require('webpack-merge')

exports.default = merge(config, {
  mode: 'development',

  output: {
    filename: 'bundle.js',
  },
})