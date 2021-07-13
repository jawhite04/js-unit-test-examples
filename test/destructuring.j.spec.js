describe('src/destructuring.js', () => {
  it('can mock the logger', () => {
    // arrange
    const mockLogger = {
      error: jest.fn(),
    };
    jest.mock('@/src/common/logger.js', () => mockLogger);
    const fn = require('@/src/destructuring');

    // act
    fn();

    // assert
    expect(mockLogger.error).toHaveBeenCalledTimes(1);
    expect(mockLogger.error).toHaveBeenCalledWith('logger.error was called');
  });
});
