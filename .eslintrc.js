module.exports = {
	root: true,
	extends: ['airbnb-base'],
	plugins: ['import'],
	rules: {
		'indent': ['error', 'tab'],
		'no-tabs': 'off',
		'linebreak-style': 'off',
		'no-param-reassign': 'off',
		'quote-props': [1, 'consistent-as-needed'],
		'no-cond-assign': [2, 'except-parens'],
		'no-unused-vars': [1, { vars: 'local' }],
		'default-case': 'off',
		'new-cap': [2, { capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'] }],
		'import/no-extraneous-dependencies': ['error', { devDependencies: ['!src/**', '!src/*', '*', '**']}],
		'comma-dangle': ['error', 'always-multiline'],
	},
};
