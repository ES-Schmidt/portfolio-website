const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

module.exports = {
	output: {
		filename: '[name].bundle.[fullhash].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: '[name].bundle.[fullhash].html',
			template: path.join(__dirname, '../../../src/index.html'),
		}),
		new MiniCssExtractPlugin({ filename: '[name].bundle.[fullhash].css' }),
		new CompressionPlugin(),
	],
};
