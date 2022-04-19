module.exports = {
	'*.([cm]js|js?(x))': 'eslint --fix',
	'*.css': 'stylelint --fix',
	'*': 'prettier --ignore-unknown --write',
};
