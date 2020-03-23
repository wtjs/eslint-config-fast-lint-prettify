# Eslint Config Fast Lint and Prettify

One package to lint and prettify them all

## Overview

This config includes `eslint`, `prettier` and all relevant plugins and configs to make it work with a single package installation.

Includes:

-   `eslint`
-   `babel-eslint`
-   `eslint-config-airbnb`
-   `eslint-config-prettier`
-   `eslint-plugin-import`
-   `eslint-plugin-jest`
-   `eslint-plugin-jsx-a11y`
-   `eslint-plugin-prettier`
-   `eslint-plugin-react`
-   `eslint-plugin-react-hooks`
-   `prettier`

## Usage

1. Install the plugin (preferrably an `exact` version with `E` flag):

```sh
yarn add -DE eslint-config-fast-lint-prettify
```

2. Create an `.eslintrc` file in your project root and add:

```json
{
	"extends": ["fast-lint-prettify"]
}
```

3. Create a `.prettierrc.js` file in your project root and add:

```js
const prettier = require('eslint-config-fast-lint-prettify/.prettierrc');

module.exports = prettier;
```

4. Also recommended to add an `.editorconfig` file at the project root:

```
root = true

[*]
indent_style = tab
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

5. If you're using VSCode, you might want to enable "Format on save" from workspace settings to automatically run prettier on save.

6. This package is meant to be used as an opinionated standalone. It includes both `eslint` and `prettier`. With these you can for example use them in `scripts` in `package.json`:

```json
{
	"scripts": {
		"lint": "yarn eslint ."
	}
}
```

## Configurations

It's based on `eslint-config-airbnb` with some tweaks. You can override or add your own rules in your own `.eslintrc` file. For example:

```json
{
	"extends": ["fast-lint-prettify"],
	"rules": {
		// your own rules here
	}
}
```

You can also specify a `node` or `browser` environment which enables some linting rules, for example `window` object on browser, etc.

```json
{
	"extends": ["fast-lint-prettify"],
	"rules": {
		// your own rules here
	},
	"env": {
		// generally you only need one
		"browser": true,
		"node": true
	}
}
```
