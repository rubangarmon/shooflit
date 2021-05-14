const webpack = require('webpack');
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const paths = require('./paths');

/** @type {import('webpack').Configuration} */
const devConfig = {
    // Set the mode to development or production
    mode: 'development',
    // Control how source maps are generated
    devtool: 'eval-source-map',
    // Spin up a server for quick development
    devServer: {
        contentBase: paths.client.build,
        open: true,
        compress: true,
        hot: true,
        port: 8000,
        historyApiFallback: true,
        // watchContentBase: true
    },
    target: "web",
    module: {
        rules: [
            // Styles: Inject CSS into the head with source maps
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", 'postcss-loader', "sass-loader"]
            },
        ]
    },
    plugins: [
        // Only update what has changed on hot reload
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ],
};

module.exports = merge(common, devConfig);
