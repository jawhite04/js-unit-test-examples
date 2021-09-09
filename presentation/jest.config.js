const config = {
  testEnvironment: 'node',
  testMatch: [
    '**/*.spec.js',
  ],
  // clearMocks: true,
  collectCoverage: false,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>$1',
  },
};

module.exports = config;
