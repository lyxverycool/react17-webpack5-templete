const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path')
const resolvePath = (relativePath) => resolve(process.cwd(), relativePath)

module.exports = {
	entry: './src/index.js',
	output: {
		path: resolvePath('dist'),
		filename: process.env.NODE_ENV == 'development' ? 'js/bundle.js' : 'js/[name].[contenthash].js',
		chunkFilename: 'js/[name].[contenthash].js',
		publicPath: '/',
		assetModuleFilename: 'images/[hash][ext][query]'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
			},
			{
				use: ['style-loader', 'css-loader', 'less-loader'],
				test: /\.(css|less)$/,
			},
			{
				type: 'asset',
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
		alias: {
			'~': resolvePath('src/'),
			'@': resolvePath('src/components/'),
		},
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: resolvePath('src/index.html'),
			favicon: resolvePath('src/images/favicon.ico'),
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				minifyJS: true,
				minifyCSS: true,
			},
		}),
	],
};
