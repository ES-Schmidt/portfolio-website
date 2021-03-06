module.exports = {
	// extended configs override in order of first to last in array
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recess-order',
		'stylelint-config-prettier',
	],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind', 'layer'],
			},
		],
		'no-invalid-position-at-import-rule': null,
	},
};
