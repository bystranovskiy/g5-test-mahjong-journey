const autoprefixer = require('autoprefixer');
const NODE_ENV = process.env.NODE_ENV || "production";
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: 'production',
    watch: true,

    entry: ['./src/js/entry.es6'],

    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },


    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new ExtractTextPlugin("style.css"),
        new webpack.ProvidePlugin({
            Promise: 'es6-promise-promise'
        })
    ],

    module: {

        rules: [
            {
                test: /\.es6$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },

            {
                enforce: "pre",
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },

            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: NODE_ENV === 'development',
                                minimize: NODE_ENV === 'production'
                            }
                        },
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                sourceMap: NODE_ENV === 'development'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers: ['last 5 version']
                                    })
                                ],
                                sourceMap: 'inline'
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: NODE_ENV === 'development'
                            }
                        }
                    ]
                })

            },

            {
                test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg|webp)$/,
                loader: 'url-loader?limit=10000'
            }

        ]
    },

    devtool: NODE_ENV === 'development' ? "source-map" : false,


    externals: {
        "jquery": "jQuery"
    },
    optimization: {
        minimize: NODE_ENV === 'production'
    }


};
