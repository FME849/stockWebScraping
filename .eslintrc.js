module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended', 
        'prettier/@typescript-eslint', 
        'plugin:prettier/recommended'
    ],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    env: {
      es6: true,
      node: true,
    },
    rules: {
      'no-var': 'error',
      semi: 'error',
      indent: ['error', 2, { SwitchCase: 1 }],
      'no-multi-spaces': 'error',
      'space-in-parens': 'error',
      'no-multiple-empty-lines': 'error',
      'prettier/prettier': [
        'error',
        {
            endOfLine: 'auto',
            useTabs: true,
            trailingComma: 'all',
            singleQuote: true,
            tabWidth: 2,
        },
    ],
    },
  };