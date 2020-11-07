const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [],
});

module.exports = new Promise((resolve, _reject) => {
  resolve(buildWebpackConfig);
});
