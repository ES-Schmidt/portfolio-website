module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2022: true,
	},
	extends: ['eslint:recommended', 'google', 'plugin:react/recommended', 'prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'require-jsdoc': 0,
	},
};
