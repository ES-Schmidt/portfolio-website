const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

module.exports = {
	output: {
		filename: '[name].bundle.js',
	},
	devServer: {
		hot: true,
		open: ['/index.bundle.html'],
		port: 3000,
		compress: true,
	},
	devtool: 'eval-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.bundle.html',
			template: path.join(__dirname, '../../../src/index.html'),
		}),
		new MiniCssExtractPlugin({ filename: '[name].bundle.css' }),
		new ReactRefreshWebpackPlugin(),
	],
};
