/* global require module */

const webpack = require("webpack");
const WebpackMerge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const commonConfig = require("./webpack.common.js");

module.exports = WebpackMerge(commonConfig, {
  mode: "production",
  plugins: [new UglifyJSPlugin()],
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: {
          loader: "elm-webpack-loader",
          options: {
            optimize: true
          }
        }
      }
    ]
  }
});
