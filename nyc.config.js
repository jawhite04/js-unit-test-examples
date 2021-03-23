const config = {
  'check-coverage': true,
  branches: 80,
  lines: 80,
  functions: 80,
  statements: 80,

  include: ['**/src/**/*.js'],
  exclude: ['**/test/**/*.spec.js'],
};

module.exports = config;
