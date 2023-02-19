module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort'],
  rules: {
    'import/extensions': [
      'error',
      {
        js: 'never',
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-console': ['warn'],
    'no-param-reassign': 'warn',
    'no-unused-expressions': 'error',
    quotes: [
      'error',
      'single',
      { allowTemplateLiterals: false, avoidEscape: true },
    ],
  },
};
