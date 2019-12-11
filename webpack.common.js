/* global require module __dirname */

const packageDetails = require("./package.json");
const sourceDir = "src";
const outputDir = "build";
const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// to extract the css as a separate file
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// Minify elm code
const ElmMinify = require("elm-minify");

const clean = new CleanWebpackPlugin([outputDir]);
const copy = new CopyWebpackPlugin([
  {
    from: `${sourceDir}/manifest.json`,
    transform: (content, path) =>
      content
        .toString()
        .replace(/#version#/g, packageDetails.version)
        .replace(/#description#/g, packageDetails.description)
  },
  {
    from: `${sourceDir}/icons`,
    to: "icons"
  }
]);
const optimizeCSS = new OptimizeCssAssetsPlugin();
const html = new HtmlWebpackPlugin({
  template: `${sourceDir}/index.html`
});
const miniCSS = new MiniCssExtractPlugin({
  filename: "[name]-[hash].css"
});
const elmMinify = new ElmMinify.WebpackPlugin();

module.exports = {
  mode: "development",
  entry: {
    app: `./${sourceDir}/scripts/app.js`,
    background: `./${sourceDir}/scripts/background.js`
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
            publicPath: "../"
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]",
            publicPath: "../"
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: [/elm-stuff/, /node_modules/],
        loaders: [
          MiniCssExtractPlugin.loader,
          "css-loader?url=false",
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        exclude: [/elm-stuff/, /node_modules/],
        loaders: [MiniCssExtractPlugin.loader, "css-loader?url=false"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      {
        test: /.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [clean, elmMinify, copy, miniCSS, optimizeCSS, html],
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".elm", ".scss", ".png"]
  },
  output: {
    filename: "scripts/[name].js",
    path: path.resolve(__dirname, outputDir),
    publicPath: ""
  }
};
