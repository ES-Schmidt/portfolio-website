const path = require('path');

module.exports = {
	printWidth: 100,
	useTabs: true,
	tabWidth: 2,
	trailingComma: 'es5',
	singleQuote: true,
	semi: true,
	// tailwind formatting options (see prettier-plugin-tailwindcss)
	twConfig: path.join(__dirname, './operations/bundler/tailwind.config.cjs'),
};
