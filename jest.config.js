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
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>$1',
  },
};

module.exports = config;
