module.exports = function makeBabelConfig(api) {
	return {
		// preset ordering is last to first and they run after any plugins
		presets: [
			'@babel/preset-react',
			// by default `@babel/preset-env` find `.browserslistrc` in project root
			// corejs version must be set to the one included in `package.json`
			[
				'@babel/preset-env',
				{ useBuiltIns: 'usage', corejs: '3.22.0', configPath: './browserslistrc' },
			],
		],
		...(api.env('development') ? { plugins: ['react-refresh/babel'] } : null),
	};
};
