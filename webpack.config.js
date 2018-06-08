var path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/app/app.js'),
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'app.bundle.js',
        pathinfo: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {test: /\.html$/, loader: "html-loader"},
            {test: /\.css$/, loader: "style!css"}
        ]
    },
    devtool: "#inline-source-map",
    node: {
        __filename: true
    }
};