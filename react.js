module.exports = {
  extends: ['airbnb', './index', 'plugin:prettier/recommended'],
  env: {
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'import/extensions': [
      'error',
      {
        jsx: 'never',
        css: 'always',
        svg: 'always',
        jpg: 'always',
        png: 'always',
        json: 'always',
        config: 'always',
        type: 'always',
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/forbid-prop-types': [
      'error',
      {
        checkChildContextTypes: true,
        checkContextTypes: true,
        forbid: ['any', 'object'],
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        allowBind: true,
        ignoreRefs: true,
      },
    ],
    'react/no-danger': 'warn',
    'react/no-multi-comp': 'off',
    'react/prefer-stateless-function': ['error'],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'function-expression',
      },
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
