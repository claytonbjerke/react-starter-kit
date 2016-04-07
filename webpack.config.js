var path = require('path');

module.exports = {

    devtool: 'cheap-source-map',

    entry: __dirname + '/src/index.js',

    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src")
                 ],
                loader: 'babel'
            }
        ]
    },

    devServer: {
        contentBase: __dirname + '/src',
        port: 9000,
        colors: true,
        historyApiFallback: true,
        inline: true
    }
};
