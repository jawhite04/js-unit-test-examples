const { expect } = require('chai');
const { getApiKey } = require('../src/testAware');

describe('src/testAware.js', () => {
  afterEach(() => {
    process.env.NODE_ENV = undefined;
  });
  it('shows the test output when configured correctly', () => {
    // arrange
    process.env.NODE_ENV = 'production';

    // act
    const response = getApiKey();

    // assert
    expect(response).equals('the production API key');
  });

  it('shows unintended output when not configured', () => {
    // act
    const response = getApiKey();

    // assert
    expect(response).equals('the development API key');
  });
});
