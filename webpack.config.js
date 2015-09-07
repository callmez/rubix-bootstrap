var path = require('path');

module.exports = {
  entry: './src/jsx/export.jsx',
  output: {
    path: path.join(process.cwd(), 'resources', 'public', 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader?stage=1&compact=false' }
    ]
  }
};
