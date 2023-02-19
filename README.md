# eslint-config-leaero
Shareable ESLint and Prettier config.

## Quickstart
Start with installing the library and its necessary peer dependencies.

```js
yarn add --dev eslint-config-leaero eslint prettier
````

## Prettier Integration
This library is automatically configured with Prettier by adding it as a rule to ESLint. You just need to add a `.prettierrc` file to your project and add your own custom formatting rules. 

## Available Configurations
You can choose between different configurations that suit the technology stack of your project. All configurations extend from a base config.

| Name                      | Description                                                  |
| ---                       | ---                                                          |
| `leaero`                  | Base configuration for projects that use plain JavaScript.   |
| `leaero/react`            | Configuration for React projects that use Babel.             |
| `leaero/typescript`       | Configuration for Node projects that use TypeScript.         |
| `leaero/react-typescript` | Configuration for React projects that use Typescript.        |
| `leaero/next-typescript`  | Configuration for Next.js projects that use Typescript.      |


### `leaero`
Base configuration for projects that use plain JavaScript.

Required packages:
- @babel/core
- @babel/eslint-parser
- eslint-config-airbnb-base
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-simple-import-sort

```js
yarn add --dev @babel/core @babel/eslint-parser eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-simple-import-sort
```

Add it to your `eslintrc.js`.

```js
module.exports = {
  extends: ['leaero']
}
```

### `leaero/react`
Configuration for React projects that use Babel.

Required packages:
- Packages from `leaero`
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-jsx-a11y

```js
yarn add --dev @babel/core @babel/eslint-parser eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y

```
Add it to your `eslintrc.js`.
```js
module.exports = {
  extends: ['leaero/react']
}
```

### `leaero/typescript`
Configuration for Node projects that use TypeScript.

Required packages:
- Packages from `leaero` except for `@babel/core` and `@babel/eslint-parser`
- `eslint-config-airbnb-typescript`
- `@typescript/eslint/eslint-plugin`
- `@typescript-eslint/parser` 
- `eslint-import-resolver-typescript`

```js
yarn add --dev eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-simple-import-sort eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript
```
Add it to your `eslintrc.js`.

```js
module.exports = {
  extends: ['leaero/typescript']
}
```

### `leaero/react-typescript`
Configuration for React projects that use TypeScript.

Required packages:
- Packages from `leaero` except for `@babel/core` and `babel/eslint-parser`
- Packages from `leaero/react`
- Packages from `leaero/typescript`

```js
yarn add --dev eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y  eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript

```
Add it to your `eslintrc.js`.

```js
module.exports = {
  extends: ['leaero/react-typescript']
}
```

### `leaero/next-typescript` 
Configuration for Next.js projects that use TypeScript.

Required packages:
- Packages from `leaero` except for `@babel/core` and `@babel/eslint-parser`
- Packages from `leaero/react-typescript`
- @next/eslint-plugin-next

```js
yarn add --dev eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y  eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript @next/eslint-plugin-next
```
Add it to your `eslintrc.js`.

```js
module.exports = {
  extends: [
    'leaero/typescript-next'
  ]
}
```

## Make VS Code lint and fix for you
