module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len':["error", { "code": 300 }],
    "import/no-extraneous-dependencies": [0, { "devDependencies": true }],
    "import/no-unresolved": [0, {'caseSensitive': false}],
  },
};
