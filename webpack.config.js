const webpack = require('webpack');
const { join } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATHS = {
    src: join(__dirname, '../src'),
    dist: join(__dirname, '../dist'),
};

const PAGES_DIR = PATHS.src;

const getPlugins = () => [new MiniCssExtractPlugin({ filename: `${PATHS.assets}css/[name].[contenthash].css` }),
    new HtmlWebpackPlugin({ template: `${PAGES_DIR}/index.html`, minify: true }),
    new webpack.SourceMapDevToolPlugin({ filename: '[file].map' }),
    new CleanWebpackPlugin(),
];

module.exports = {
    externals: {
        paths: PATHS,
    },
    mode: (process.env === 'production') ? 'production' : 'development',
    entry: {
        app: PATHS.src,
    },
    output: {
        filename: `${PATHS}/js/[name].[contenthash].js`,
        path: PATHS.dist,
        publicPath: '/',
    },
    devtool: (process.env === 'production') ? '' : 'cheap-module-eval-source-map',
    devServer: {
        contentBase: PATHS.dist,
        port: 8081,
        overlay: {
            warnings: true,
            errors: true,
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
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: { path: './postcss.config.js' },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: { path: './postcss.config.js' },
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.json', '.png', '.jp(e)g'],
        alias: {
            '~': PATHS.src, // линк для директории src
            '@': `${PATHS.src}/js`, // линк для директории /js
        },
    },
    plugins: (process.env === 'production') ? [new CleanWebpackPlugin()] : getPlugins(),
};
