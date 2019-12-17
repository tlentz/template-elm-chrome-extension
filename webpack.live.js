/* global require module */

const outputDir = "public";

const webpack = require("webpack");
const WebpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = WebpackMerge(commonConfig, {
  devtool: "inline-source-map",
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: [
          { loader: "elm-hot-webpack-loader" },
          {
            loader: "elm-webpack-loader",
            options: {
              // add Elm's debug overlay to output
              debug: false,
              forceWatch: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: `./${outputDir}`,
    port: 9000,
    inline: true,
    stats: "errors-only"
  }
});
