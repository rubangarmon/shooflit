const webpack = require("webpack");
const paths = require("./paths");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  // Where webpack looks to start building the bundle
  entry: paths.client.src + "/index.js",
  // Where webpack outputs the assets and bundles
  output: {
    path: paths.client.build,
    filename: `js/shooflit.[name].bundle-${process.env.VERSION_CLIENT}.js`,
    publicPath: "",
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
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    // new NodePolyfillPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/client", "template.html"),
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
