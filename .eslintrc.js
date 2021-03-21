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

    },
    {
      files: [
        '**/*.j.spec.js',
      ],
      extends: 'plugin:jest/recommended',
      env: {
        node: true,
        jest: true,
      },
      rules: {
        'global-require': 0,
        'import/no-extraneous-dependencies': ['error', { devDependencies: [''] }],
      },
    },
  ],
};
