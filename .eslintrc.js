module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    parser: '@typescript-eslint/parser'
  },
  env: {
    browser: true,
    'jest/globals': true
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style']
    }
  ],
  extends: ['prettier', 'standard', 'plugin:vue/vue3-recommended'],
  plugins: ['html'],
  rules: {
    indent: ['error', 2]
  }
}
