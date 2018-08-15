const path = require('path');

module.exports = {
  entry: {
    base: path.resolve(__dirname, './app/app.jsx'),
    redux: path.resolve(__dirname, './app/reduxApp.jsx'),
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};