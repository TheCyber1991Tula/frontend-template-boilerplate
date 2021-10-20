import { merge } from 'webpack-merge';
import './webpack.base.conf';

// *TODO разобраться с импортами

const buildWebpackConfig = merge(config, {
    mode: 'production',
    plugins: [],
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig);
});
