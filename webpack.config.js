var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        "./src/app"
    ],
    output: {
        path: __dirname + "/static",
        publicPath: "/static/",
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader?prefix=img/&limit=5000"
            },
            { test: /\.woff2?$/, loader: "url-loader?limit=5000" },
            { test: /\.(eot|ttf|svg)$/, loader: "file-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.styl$/,
                loaders: [
                    "style",
                    ExtractTextPlugin.extract(),
                    "css",
                    "stylus"
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css")
    ]
}
