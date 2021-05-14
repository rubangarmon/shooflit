const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  // Set the mode to development or production
  mode: "production",
  // Control how source maps are generated
  devtool: false,
  // output: {
  //   publicPath: "./",
  // },
  module: {
    rules: [
      {
        test: /\.(scss|css|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          'postcss-loader',
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    // Extracts CSS into separate files
    // Note: style-loader is for development, MiniCssExtractPlugin is for production
    new MiniCssExtractPlugin({
      filename: "styles/shooflit-[name].css",      
    }),
  ],
  optimization: {
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), "..."],
    runtimeChunk: {
      name: "runtime"
    },
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all"
    }
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
