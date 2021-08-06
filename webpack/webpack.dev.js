const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.base');
const path = require('path');

const devConfig = {
	mode: 'development',
	devServer: {
		historyApiFallback: true,
		disableHostCheck: true,
		contentBase: path.join(__dirname, 'dist'),
		host: "localhost",
		port: 3000,
		open: true,
		hot: true,
		compress: true,
	},
	target: 'web',
	plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
	devtool: 'eval-cheap-module-source-map',
};

module.exports = merge(common, devConfig);
