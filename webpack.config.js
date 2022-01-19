const webpack = require('webpack');
const { resolve, join } = require('path');
const { readdirSync } = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const PATHS = {
    src: resolve(__dirname, 'src'),
    dist: resolve(__dirname, 'dist'),
    pugPages: join(resolve(__dirname, 'src'), 'pug'),
};

const HTMLPages = readdirSync(`${PATHS.pugPages}`).filter(filename => filename.endsWith('.pug'));

const getPlugins = () => [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    // * закомментируй это если пишешь на html
    ...HTMLPages.map(page => new HtmlWebpackPlugin({
        template: `${PATHS.src}/pug/${page}`,
        filename: `./${page.replace(/\.pug/, '.html')}`,
        minify: process.env.MODE === 'production' ? true : false,
        favicon: 'assets/favicon.png',
        meta: {
            viewport: 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
            'X-UA-Compatible': 'IE=edge',
            charset: 'UTF-8'
        }
    })),
    // * закомментируй это если используешь pug
    /*
    new HtmlWebpackPlugin({
        template: `${PATHS.src}/pages/index.html`,
        filename: 'index.html',
        minify: process.env.MODE === 'production' ? true : false,
        favicon: 'assets/favicon.png',
        meta: {
            viewport: 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
            'X-UA-Compatible': 'IE=edge',
            charset: 'UTF-8'
        }
    }),
    */
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
                test: /\.pug$/,
                loader: 'pug-loader',
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
                            sourceMap: process.env.MODE === 'production' ? false : true,
                            url: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: process.env.MODE === 'production' ? false : true,
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
            Scripts: `${PATHS.src}/scripts` // алиас для директории src/components
        },
    },
    plugins: process.env.MODE === 'production' ? [new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })] : getPlugins(),
};
