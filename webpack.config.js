'use strict';

const path = require('path');
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-datatable-bs.min.js',
    library: 'ReactDatatableBs',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      root: 'React',
      amd: 'react',
      commonjs: 'react',
      commonjs2: 'react',
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['lodash'],
        },
      },

      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|json|xml|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new LodashModuleReplacementPlugin({
      shorthands: true,
      collections: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        warnings: false,
      },
    }),
  ],
};
