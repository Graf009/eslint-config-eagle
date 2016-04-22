module.exports = {
  'parser': 'babel-eslint',
  'extends': require.resolve('eslint-config-airbnb'),
  "rules": {
    'camelcase': 0,
    'comma-dangle': [ 2, "never" ],
    'consistent-return': 0,
    'global-require': 0,
    'max-len': [2, 140, 2, { 'ignoreUrls': true, 'ignoreComments': false }],
    'new-cap': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'semi': [ 2, "never" ],
    'valid-jsdoc': 2
  }
};
