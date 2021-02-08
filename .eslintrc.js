module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'airbnb-base',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    '@nuxtjs',
    'prettier',
    'prettier/vue',
  ],
  plugins: ['vue'],
  rules: {
    'import/extensions': [
      'error',
      {
        js: 'never',
        mjs: 'never',
        vue: 'never',
        json: 'never',
      },
    ],
    'no-console': 'error',
    'linebreak-style': 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
  },
};
