const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.base');

const prodConfig = {
	mode: 'production',
	devtool: 'eval',
	module: {
		rules: [
			{
				test: /\.(css|less)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
			},
		],
	},
	optimization: {
		runtimeChunk: {
			'name': 'manifest',
		},
		splitChunks: {
			chunks: 'async',
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
					name: 'vendor',
					chunks: 'all',
				},
			},
		}
	},
	plugins: [new MiniCssExtractPlugin({
		filename: 'css/[name].[contenthash:8].css',
		chunkFilename: 'css/[id].[contenthash:8].css',
		ignoreOrder: true,
	})],
};

module.exports = merge(common, prodConfig);
