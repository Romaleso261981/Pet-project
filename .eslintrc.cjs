module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'eslint-config-prettier', 'plugin:prettier/recommended'],
  plugins: ['eslint-plugin-prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: { 'prettier/prettier': 'error' },
};
