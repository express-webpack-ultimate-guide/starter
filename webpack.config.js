const config = require("./src/config");
const Webpack = require("webpack");
const AssetsWebpackPlugin = require('assets-webpack-plugin');

var webpackConfig = {
    entry: {main: ["./src/client/main.js"]},
    output: {
        path: config.distFolder,
        filename: "main.bundle.js",
        publicPath: config.publicPath
    },
    mode: config.isProd ? "production" : "development",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    plugins: [
        new AssetsWebpackPlugin({path: config.distFolder}),
    ]

};

if (config.hmrEnabled) {
    webpackConfig.plugins.push(new Webpack.HotModuleReplacementPlugin());
}
module.exports = webpackConfig;
