module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    'commonjs': true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
};
