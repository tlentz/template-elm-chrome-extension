/* global require module */

const webpack = require("webpack");
const WebpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ElmMinify = require("elm-minify");
const optimizeCSS = new OptimizeCssAssetsPlugin();
const elmMinify = new ElmMinify.WebpackPlugin();

module.exports = WebpackMerge(commonConfig, {
  mode: "production",
  plugins: [elmMinify],
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: {
          loader: "elm-webpack-loader",
          options: {
            optimize: true,
          },
        },
      },
    ],
  },
});
