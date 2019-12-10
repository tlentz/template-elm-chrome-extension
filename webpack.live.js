/* global require module */

const outputDir = "public";

const WebpackMerge = require("webpack-merge");

const devConfig = require("./webpack.dev.js");

module.exports = WebpackMerge(devConfig, {
  devServer: {
    contentBase: `./${outputDir}`,
    port: 9000,
    inline: true,
    stats: "errors-only"
  }
});
