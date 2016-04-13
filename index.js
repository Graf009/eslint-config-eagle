module.exports = {
  'parser': 'babel-eslint',
  'extends': require.resolve('eslint-config-airbnb'),
  "rules": {
    'consistent-return': 0,
    "comma-dangle": [ 2, "never" ],
    'max-len': [2, 140, 2, { 'ignoreUrls': true, 'ignoreComments': false }],
    "new-cap": 0,
    "no-use-before-define": 0,
    "no-param-reassign": [2, { 'props': false }],
    "semi": [ 2, "never" ],
    "valid-jsdoc": 2
  }
};
