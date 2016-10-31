/* eslint-disable quote-props */
module.exports = {
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    ecmaFeatures: {
      generators: true,
    },
  },

  extends: require.resolve('eslint-config-airbnb'),

  rules: {
    'camelcase': 'off',
    'consistent-return': 'warn',
    'global-require': 'warn',
    'max-len': ['error', 140, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'warn',
    'semi': ['error', 'never'],
    'valid-jsdoc': 'error',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
    }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
}
