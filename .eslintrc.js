module.exports = {
  env: {
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings', 'airbnb-base'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    'no-unused-vars': 'warn',
    'class-methods-use-this': 'off',
    'no-console': 'off',
  },
};
