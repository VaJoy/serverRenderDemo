/**
 * Created by vajoylan on 2015/11/13.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ],
    entry: {
        home: './src/js/page/home.js'
    },
//入口文件输出配置
    output: {
        path: 'dist/js/page',
        filename: '[name].js'
    },
    devtool: 'eval-source-map',
    module: {
//加载器配置
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: path.resolve(__dirname, "node_modules"),
                loader: "babel-loader",
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react']
                }
            },
            {test: /\.scss$/, loader: 'style!css!sass?sourceMap'}
        ]
    },
    resolve: {
        root: path.resolve(__dirname, "src"),
        extensions: ['', '.js', '.json', '.scss']
    }
};