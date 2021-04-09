describe('src/common/logger.js', () => {
  const calledWith = [1, 2, 3, 'abc'];
  const logger = require('../../src/common/logger');

  describe('logger', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should call console.error with args', () => {
      // arrange
      const spy = jest.spyOn(console, 'error')
        .mockImplementationOnce(() => {});

      // act
      logger.error(...calledWith);

      // assert
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(...calledWith);
    });

    it('should call console.warn with args', () => {
      // arrange
      const spy = jest.spyOn(console, 'warn')
        .mockImplementationOnce(() => {});

      // act
      logger.warn(...calledWith);

      // assert
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(...calledWith);
    });

    it('should call console.log with args', () => {
      // arrange
      const spy = jest.spyOn(console, 'log')
        .mockImplementationOnce(() => {});

      // act
      logger.info(...calledWith);

      // assert
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(...calledWith);
    });

    it('should call console.debug with args', () => {
      // arrange
      const spy = jest.spyOn(console, 'debug')
        .mockImplementationOnce(() => {});

      // act
      logger.debug(...calledWith);

      // assert
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(...calledWith);
    });
  });
});
