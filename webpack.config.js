const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const jQuery = 'jquery/dist/jquery.min.js';

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    new webpack.ProvidePlugin({
      $: jQuery,
      jQuery: jQuery,
      'window.jQuery': jQuery,
    }),
  ],
};
