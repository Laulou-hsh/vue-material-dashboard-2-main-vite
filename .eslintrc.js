module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
  },
  plugins: ['vue'],
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': [
      2,
      {
        wrapAttributes: false,
        bracketSpacing: false,
        printWidth: 120,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        proseWrap: 'preserve',
      },
    ],
    'handle-callback-err': 0,
    'prefer-promise-reject-errors': [2, { allowEmptyReject: true }],
    'no-prototype-builtins': 0,
    camelcase: 0,
    eqeqeq: 0,
  },
}
