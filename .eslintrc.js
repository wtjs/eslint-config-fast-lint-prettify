const eslint = {
	extends: [
		'airbnb',
		'plugin:jest/recommended',
		'prettier',
		'prettier/react',
		'plugin:prettier/recommended',
	],
	plugins: ['jest', 'prettier'],
	parser: 'babel-eslint',
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': 0,
		'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
		'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
	},
	env: {
		'jest/globals': true,
	},
};

module.exports = eslint;
