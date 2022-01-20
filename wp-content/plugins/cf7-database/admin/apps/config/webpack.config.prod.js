"use strict";

const webpack = require("webpack");
const merge = require("webpack-merge");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const helpers = require("./helpers");
const commonConfig = require("./webpack.config.common");
const environment = require("./env/prod.env");
const webpackConfig = merge(commonConfig, {
  mode: "production",
  devtool: false,
  output: {
    path: helpers.pluginPath("../../assets/dist"),
    publicPath: "/",
    filename: "js/[name].js"
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }]
        }
      }),
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      })
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(environment),
    new MiniCSSExtractPlugin({
      filename: "css/[name].css"
    })
  ]
});

// if (process.env.NODE_ENV === "production") {
//   const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//     .BundleAnalyzerPlugin;
//   webpackConfig.plugins.push(new BundleAnalyzerPlugin());
// }

module.exports = webpackConfig;
