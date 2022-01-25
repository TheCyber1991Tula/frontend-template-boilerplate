const webpack = require('webpack');
const { resolve, join } = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const PATHS = {
    src: resolve(__dirname, 'src'),
    dist: resolve(__dirname, 'dist'),
    htmlPages: join(resolve(__dirname, 'src'), 'pages'),
};

const getPlugins = () => [
        new HtmlWebpackPlugin({
            template: `${PATHS.htmlPages}/index.html`,
            filename: 'index.html',
            minify: process.env.MODE === 'production' ? true : false,
            favicon: 'assets/favicon.png',
            meta: {
                viewport: 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
                'X-UA-Compatible': 'IE=edge',
                charset: 'UTF-8',
            },
        }),
        new MiniCssExtractPlugin({ filename: 'style.css' }),
        new webpack.SourceMapDevToolPlugin({ filename: '[file].map' }),
        new CleanWebpackPlugin(),
        new CircularDependencyPlugin()
    ];

module.exports = smp.wrap({
    cache: true,
    context: resolve(__dirname, 'src'),
    externals: {
        paths: PATHS,
    },
    entry: {
        app: `${PATHS.src}/index.tsx`,
    },
    output: {
        filename: '[name].js',
        path: PATHS.dist,
        publicPath: '/',
    },
    mode: process.env.MODE,
    devtool: process.env.MODE === 'production' ? 'source-map' : 'eval-source-map',
    devServer: {
        hot: true,
        open: true,
        port: 8097,
        client: {
            overlay: true,
        },
    },
    optimization: {
        minimize: process.env.MODE === 'production' ? true : false,
        minimizer: [
            new TerserPlugin({
                parallel: 8,
            }),
        ],
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
                            url: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            // config: { path: './postcss.config.js' }, // * Path to postcss cnnfig file
                            execute: false, // * Enable or Disable PostCSS Parser support in CSS-in-JS
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: process.env.MODE === 'production' ? false : true },
                    },
                ],
            },
        ],
    },
    resolve: {
        enforceExtension: false,
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            Assets: `${PATHS.src}/assets`, // алиас для директории src/assets
            Components: `${PATHS.src}/components`, // алиас для директории src/components
            Scripts: `${PATHS.src}/scripts`, // алиас для директории src/components
        },
    },
    plugins:
        process.env.MODE === 'production' ? [ new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        ] : getPlugins(),
});
