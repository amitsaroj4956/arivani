"use strict";

const webpack = require("webpack");
const merge = require("webpack-merge");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const helpers = require("./helpers");
const commonConfig = require("./webpack.config.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CleanTerminalPlugin = require("clean-terminal-webpack-plugin");
const environment = require("./env/dev.env");
const webpackConfig = merge(commonConfig, {
  mode: "development",
  // devtool: 'source-map',
  output: {
    path: helpers.pluginPath("../../assets/dist"),
    publicPath: "/",
    filename: "js/[name].js"
  },
  plugins: [
    new webpack.EnvironmentPlugin(environment),
    new FriendlyErrorsPlugin(),
    new CleanWebpackPlugin(),
    new CleanTerminalPlugin()
  ],
  // devServer: {
  //   compress: true,
  //   historyApiFallback: true,
  //   hot: true,
  //   open: true,
  //   overlay: true,
  //   port: 8000,
  //   stats: {
  //     normal: true
  //   }
  // }
});

module.exports = webpackConfig;
