const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const httpProxy = require("http-proxy");
const config = require("../config");

function getWebpackConfig() {
    const webpackConfig = require("../../webpack.config.js");
    if (config.hmrEnabled) {
        Object.keys(webpackConfig.entry).forEach(name => {
            webpackConfig.entry[name] = typeof webpackConfig.entry[name] === "string" ?
                [webpackConfig.entry[name]] : webpackConfig.entry[name];

            webpackConfig.entry[name] = [
                "webpack/hot/dev-server",
                `webpack-dev-server/client?http://localhost:${config.wdsPort}`,
                ...webpackConfig.entry[name]
            ];
        });
    }
    return webpackConfig;
}
exports.startWds = () => {
    const webpackConfig = getWebpackConfig();
    const compiler = Webpack(webpackConfig);

    compiler.plugin("compile", function () {
        console.log("Bundling...");
    });

    compiler.plugin("done", function () {
        console.log("Bundling succeeded");
    });

    const bundler = new WebpackDevServer(compiler, {
        publicPath: config.publicPath,
        hot: config.hmrEnabled,
        quiet: false,
        noInfo: true,
        stats: {
            colors: true
        },
    });

    bundler.listen(config.wdsPort, "localhost", function () {
        console.log("Bundling project, please wait...");
    });
};

exports.createProxy = () => {
    const proxy = httpProxy.createProxyServer();
    return (req, res) => proxy.web(req, res, { target: `http://localhost:${config.wdsPort}${config.publicPath}` });
};
