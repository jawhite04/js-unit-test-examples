const config = {
  'check-coverage': true,
  branches: 100,
  lines: 100,
  functions: 100,
  statements: 100,

  include: ['**/src/**/*.js'],
  exclude: ['**/test/**/*.spec.js'],
};

module.exports = config;
