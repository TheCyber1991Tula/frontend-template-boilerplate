import { merge } from 'webpack-merge';
import { webpackBaseConfig as webpackConfig } from './webpack.base.conf';

const buildWebpackConfig = merge(webpackConfig, {
    mode: 'production',
    plugins: [],
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig);
});
