const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

module.exports = {
	output: {
		filename: 'main.bundle.js',
	},
	devServer: {
		hot: true,
		open: ['/main.bundle.html'],
		port: 3000,
		compress: true,
	},
	devtool: 'eval-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'main.bundle.html',
			template: path.join(__dirname, '../../../src/main.html'),
		}),
		new MiniCssExtractPlugin({ filename: 'main.bundle.css' }),
		new ReactRefreshWebpackPlugin(),
	],
};
