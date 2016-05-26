var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        index: ['./web/js/index.js'],
    },
    output: {
        path: __dirname,
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.css/, loaders: ['style', 'css'] },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { cacheDirectory: true, presets: ['es2015', 'stage-0'] }}
        ]
    },
    plugins: [
          definePlugin,
          new webpack.NoErrorsPlugin(),
          // new webpack.optimize.UglifyJsPlugin({
          //     include: /\.js$/,
          //     minimize: true
          // })
    ]
};
