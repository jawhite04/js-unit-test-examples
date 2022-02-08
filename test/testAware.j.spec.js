describe('src/testAware.js', () => {
  const { getApiKey } = require('../src/testAware');

  afterEach(() => {
    process.env.NODE_ENV = undefined;
  });
  it('shows the test output when configured correctly', () => {
    // arrange
    process.env.NODE_ENV = 'production';

    // act
    const response = getApiKey();

    // assert
    expect(response).toEqual('the production API key');
  });

  it('shows unintended output when not configured', () => {
    // act
    const response = getApiKey();

    // assert
    expect(response).toEqual('the development API key');
  });
});
