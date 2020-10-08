module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
  },
  extends: [
    '@vue/airbnb',
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'class-methods-use-this': 0,
    'valid-jsdoc': [
      'error',
      {
        requireReturn: false,
        requireReturnType: false,
        requireParamDescription: false,
        requireReturnDescription: false,
      },
    ],
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
        },
      },
    ],
    'arrow-parens': [
      'error',
      'always',
      {
        requireForBlockBody: true,
      },
    ],
  },
};
