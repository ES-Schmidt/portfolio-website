const path = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	content: [
		path.join(__dirname, '../../src/**/*.html'),
		path.join(__dirname, '../../src/**/*.jsx'),
	],
	theme: {
		extend: {
			screens: {
				xl: { max: '1366px' },
				lg: { max: '1024px' },
				md: { max: '768px' },
				sm: { max: '480px' },
			},
			// insert color here later
			colors: {},
			// insert fonts here later
			fontFamily: {
				primary: ['Spartan', ...defaultTheme.fontFamily.sans],
				secondary: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
