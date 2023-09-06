module.exports = {
  extends: [
    './index',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: 'tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': [
      'error',
      {
        ts: 'never',
        css: 'always',
        svg: 'always',
        jpg: 'always',
        png: 'always',
        json: 'always',
        config: 'always',
        type: 'always',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: ['variable'],
      },
      {
        format: ['PascalCase'],
        selector: 'typeLike',
      },
      {
        format: ['UPPER_CASE'],
        selector: 'enumMember',
      },
      {
        custom: {
          match: false,
          regex: '^I[A-Z]',
        },
        format: ['PascalCase'],
        selector: 'interface',
      },
    ],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'sort-imports': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
};
