var OFF = 0;
var WARNING = 1;
var ERROR = 2;

module.exports = {
  parser: require.resolve('babel-eslint'),
  extends: require.resolve('eslint-config-airbnb'),
  rules: {
    'camelcase': OFF,
    'comma-dangle': [ ERROR, 'always-multiline' ],
    'consistent-return': OFF,
    'global-require': OFF,
    'max-len': [ERROR, 140, 2, { 'ignoreUrls': true, 'ignoreComments': false }],
    'new-cap': OFF,
    'no-param-reassign': OFF,
    'no-shadow': OFF,
    'no-underscore-dangle': OFF,
    'no-use-before-define': OFF,
    'semi': [ ERROR, 'never' ],
    'valid-jsdoc': ERROR,
  }
};
