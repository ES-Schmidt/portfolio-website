const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

module.exports = {
	output: {
		filename: 'main.bundle.[fullhash].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'main.bundle.[fullhash].html',
			template: path.join(__dirname, '../../../src/main.html'),
		}),
		new MiniCssExtractPlugin({ filename: 'main.bundle.[fullhash].css' }),
		new CompressionPlugin(),
	],
};
