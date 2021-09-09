module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 10,
  },
  rules: {
    'no-console': 1,
  },
  overrides: [
    {
      files: [
        '**/*.m.spec.js',
      ],
      env: {
        node: true,
        mocha: true,
      },
      rules: {
        'global-require': 0,
      },
    },
    {
      files: [
        '**/*.j.spec.js',
        './presentation/**/*.spec.js',
      ],
      extends: 'plugin:jest/recommended',
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: './jest.config.js',
          },
        },
      },
      env: {
        node: true,
        jest: true,
      },
      rules: {
        'global-require': 0,
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
