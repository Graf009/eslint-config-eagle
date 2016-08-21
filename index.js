module.exports = {
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },

  extends: require.resolve('eslint-config-airbnb'),

  rules: {
    'camelcase': 'off',
    'comma-dangle': [ 'error', 'always-multiline' ],
    'consistent-return': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'max-len': ['error', 140, 2, { 'ignoreUrls': true, 'ignoreComments': false }],
    'new-cap': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'semi': [ 'error', 'never' ],
    'valid-jsdoc': 'error',
  }
};
