const config = require("./src/config");

var webpackConfig = {
    entry: {main: ["./src/client/main.js"]},
    output: {
        path: config.distFolder,
        filename: "main.bundle.js",
        publicPath: config.publicPath
    },
    mode: config.isProd ? "production" : "development",
};

module.exports = webpackConfig;
