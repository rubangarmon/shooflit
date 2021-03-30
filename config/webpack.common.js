const webpack = require("webpack");
const paths = require("./paths");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const version = "2.0.0"

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + "/index.js"],
  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: `js/shooflit.[name].bundle-${version}.js`,
    publicPath: "/",
  },
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/client", "template.html"),
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"]
    }),
  ],
};
