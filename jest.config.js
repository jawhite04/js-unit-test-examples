const config = {
  testEnvironment: 'node',
  testMatch: [
    '**/*.j.spec.js',
  ],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.js',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>$1',
  },
};

module.exports = config;
