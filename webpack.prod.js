/* global require module */

const webpack = require("webpack");
const WebpackMerge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const commonConfig = require("./webpack.common.js");

const optimizeCSS = new OptimizeCssAssetsPlugin();
const miniCSS = new MiniCssExtractPlugin({
  filename: "[name]-[hash].css"
});
const elmMinify = new ElmMinify.WebpackPlugin();
const uglifyjs = new UglifyJSPlugin();

module.exports = WebpackMerge(commonConfig, {
  mode: "production",
  plugins: [elmMinify, miniCSS, optimizeCSS, uglifyjs],
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
      },
      {
        test: /\.css$/,
        exclude: [/elm-stuff/, /node_modules/],
        loaders: [MiniCssExtractPlugin.loader, "css-loader?url=false"]
      },
      {
        test: /\.scss$/,
        exclude: [/elm-stuff/, /node_modules/],
        loaders: [
          MiniCssExtractPlugin.loader,
          "css-loader?url=false",
          "sass-loader"
        ]
      }
    ]
  }
});
