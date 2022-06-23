module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2022, // <-
    sourceType: 'module',
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['plugin:vue/strongly-recommended', 'eslint:recommended', '@vue/typescript/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    // not needed for vue 3
    'vue/no-multiple-template-root': 'off',
  },
}
