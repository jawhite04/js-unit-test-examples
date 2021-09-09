describe('universally wrong unit test practices', () => {
  describe('tests with no/improper assertions', () => {
    /* eslint-disable jest/valid-expect, jest/expect-expect */
    it('should not create an empty test', () => {});

    it('should not misuse assertions', () => {
      const someTruthyValue = [];
      expect(someTruthyValue);
    });

    it('should not set any asserted value to truthy', () => {
      expect(true).toBeTruthy();
    });
  });

  describe('should not create a test order dependency', () => {
    const mockFn = jest.fn();

    it('calls the unit under test and asserts the mock was called', () => {
      expect(mockFn).toHaveBeenCalledTimes(0);
      mockFn();
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('calls the unit under test a second time', () => {
      expect(mockFn).toHaveBeenCalledTimes(1);
      mockFn();
      expect(mockFn).toHaveBeenCalledTimes(2);
    });
  });

  describe('should not mock the unit under test', () => {
    it('mocks the unit under test', () => {
      // arrange
      const mockLogger = {
        info: jest.fn(),
      };
      jest.mock('../src/common/logger.js', () => mockLogger);
      const logger = require('../src/common/logger');

      // act
      logger.info('this is equivalent to console.log');

      // assert
      expect(mockLogger.info).toHaveBeenCalledTimes(1);
    });
  });
});
