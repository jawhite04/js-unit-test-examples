module.exports = {
  color: true,
  diff: true,
  extension: ['js'],
  'full-trace': false,
  'inline-diffs': false,
  package: './package.json',
  parallel: true,
  // reporter: 'spec',
  reporter: 'list',
  // retries: 1,
  // slow: '75',
  spec: ['./test/**/*.m.spec.js'],
  timeout: '2000', // same as "timeout: '2s'"
  ui: 'bdd',
  watch: false,
};
