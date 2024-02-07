module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-length': [2, 'always', 1000],
    'body-max-line-length': [2, 'always', 1000],
  },
}
