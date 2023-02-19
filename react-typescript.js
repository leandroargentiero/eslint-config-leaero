module.exports = {
  extends: ['./react', './typescript'],
  rules: {
    'import/extensions': [
      'error',
      {
        ts: 'never',
        tsx: 'never',
        css: 'always',
        svg: 'always',
        jpg: 'always',
        png: 'always',
        json: 'always',
        config: 'always',
        type: 'always',
      },
    ],
  },
};
