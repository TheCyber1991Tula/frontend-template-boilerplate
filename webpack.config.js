const webpack = require('webpack');
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const { env } = require('process')

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
    cache: true,
    context: resolve(__dirname, 'src'),
    externals: {
        paths: PATHS,
    },
    entry: {
        app: `${PATHS.src}/index.tsx`,
    },
    output: {
        filename: '[name].[contenthash].js',
        path: PATHS.dist,
        publicPath: '/',
    },
    mode: env === 'production' ? 'production' : 'development',
    devtool: env === 'production' ? '' : 'cheap-module-source-map',
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
                test: /\.js(x)?$/,
                exclude: '/node_modules/',
                use: ['babel-loader'],
            },
            {
                test: /\.ts(x)?$/,
                exclude: '/node_modules/',
                use: ['babel-loader'],
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
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                            sourceMap: env === 'production' ? false : true,
                            url: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: env === 'production' ? false : true,
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
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            Assets: `${PATHS.src}/assets`, // алиас для директории src/assets
            Components: `${PATHS.src}/components` // алиас для директории src/components
        },
    },
    plugins: env === 'production' ? [new CleanWebpackPlugin()] : getPlugins(),
};
