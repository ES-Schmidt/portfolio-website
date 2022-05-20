const { merge } = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = makeWebpackConfig(process.env.NODE_ENV);

function makeWebpackConfig(env) {
	env = env || 'development';

	const defaults = {
		mode: env,
		entry: {
			index: path.join(__dirname, '../../src/index.jsx'),
			scroll: path.join(__dirname, '../../src/plugins/overlayscrollbars/index.js'),
		},
		context: __dirname,
		output: {
			path: path.join(__dirname, '../../dist'),
		},
		resolve: {
			extensions: ['.css', '.js', '.jsx'],
		},
		module: {
			rules: [
				{
					test: /\.([c|m]?js|jsx)$/i,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							configFile: path.join(__dirname, 'babel.config.cjs'),
						},
					},
				},
				{
					test: /\.css$/i,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									config: path.join(__dirname, './postcss.config.cjs'),
								},
							},
						},
					],
				},
				{
					test: /\.(gif|jpe?g|png|svg)$/i,
					use: 'asset',
					generator: {
						filename: 'images',
					},
					parser: {
						dataUrlCondition: {
							maxSize: 8192, // use data url's for image files equal to or below 8192KB
						},
					},
				},
				{
					test: /\.(woff2?|eot|ttf|otf)$/i,
					type: 'asset',
					generator: {
						filename: 'fonts',
					},
					parser: {
						dataUrlCondition: {
							maxSize: 8192, // use data url's for font files equal to or below 8192KB
						},
					},
				},
				{
					test: /\.glsl$/i,
					use: ['raw-loader', 'glslify-loader'],
				},
			],
		},
	};

	return merge(defaults, loadEnv(env));

	// *******************************

	function loadEnv(env) {
		return require(path.join(__dirname, `./env/webpack.${env}.cjs`));
	}
}
