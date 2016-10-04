const webpack = require("webpack");
const path = require("path");
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: ["awesome-typescript-loader", "angular2-load-children-loader"],
                exclude: /node_modules/
            },
            {test: /\.html$/,loader: ['raw']},
            {test:/\.css$/, loader:"style-loader!css-loader"},
            {test: /\.less$/, loader: "style!css!less"}
        ],
        noParse: [
            path.join(__dirname, "node_modules/zone.js/dist")
        ]
    },
    entry: {
        bundle: ['./src/index.ts'],
        vendors: ['babel-polyfill', 'zone.js/dist/zone', '@angular/core', '@angular/platform-browser-dynamic', '@angular/common', '@angular/router']
    },
    output: {
        path: __dirname + '/build/js',
        filename: '[name].js',
        chunkFilename: "[name].min.js?ver=[chunkhash:8]",
        publicPath: '/js/'
    },
    watch: true,
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name:'vendors',filename:'vendors.js'}),//分离库
        new ForkCheckerPlugin()
    ]
};
