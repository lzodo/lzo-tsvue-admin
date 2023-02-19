/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier',
		'plugin:prettier/recommended'
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	rules: {
		'vue/multi-word-component-names': 'off',
		'prefer-const': 'off'
	},
	env: {
		node: true,
		commonjs: true
	}
}

// 'plugin:prettier/recommended'
