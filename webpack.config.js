const webpack = require('webpack');
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const PATHS = {
    src: resolve(__dirname, 'src'),
    dist: resolve(__dirname, 'dist'),
};

const getPlugins = () => [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new HtmlWebpackPlugin({
        template: `${PATHS.src}/pages/index.html`,
        minify: true,
        favicon: 'assets/favicon.png',
        meta: {
            viewport: 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
            'X-UA-Compatible': 'IE=edge',
            charset: 'UTF-8'
        }
    }),
    new webpack.SourceMapDevToolPlugin({ filename: '[file].map' }),
    new CleanWebpackPlugin(),
];

module.exports = {
    context: resolve(__dirname, 'src'),
    externals: {
        paths: PATHS,
    },
    entry: {
        app: `${PATHS.src}/index.jsx`,
    },
    output: {
        filename: '[name].[contenthash].js',
        path: PATHS.dist,
        publicPath: '/',
    },
    mode: process.env === 'production' ? 'production' : 'development',
    devtool: process.env === 'production' ? '' : 'cheap-module-source-map',
    devServer: {
        hot: true,
        open: true,
        port: 8097,
        client: {
            overlay: true,
        },
        headers: {
            'Access-Control-Allow-Private-Network': true,
            'Access-Control-Allow-Origin': '*',
        },
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        scss: 'vue-style-loader!css-loader!sass-loader',
                    },
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                },
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                },
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                options: {
                    url: true,
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: process.env === 'production' ? false : true,
                            url: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: process.env === 'production' ? false : true,
                            // config: { path: './postcss.config.js' }, // * Path to postcss cnnfig file
                            execute: false, // * Enable or Disable PostCSS Parser support in CSS-in-JS
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: this.mode === 'production' ? false : true },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.tsx'],
        alias: {
            '~': `${PATHS.src}`, // алиас для директории src/assets
        },
    },
    plugins: process.env === 'production' ? [new CleanWebpackPlugin()] : getPlugins(),
};
