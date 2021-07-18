describe('src/wait.js', () => {
  const mockLogger = {
    info: jest.fn(),
  };
  jest.mock('@/src/common/logger.js', () => mockLogger);

  describe('ms', () => {
    // i had a hard time using jest.useFakeTimers to mock setTimeout
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
    setTimeoutSpy.mockImplementation((fn) => fn());

    const wait = require('@/src/wait');

    it('calls setTimeout with a time to wait', async () => {
      // arrange
      // jest's default timeout is 5000 ms, so let's set this
      // longer so that any failure to mock will be apparent.
      // jest.setTimeout is not valid here, increasing the timeout
      // of this test would be trying to solve the wrong problem.
      const msToWait = 6000;

      // act
      await wait.ms(msToWait);

      // assert
      expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
      expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), msToWait);
    });

    it('calls setTimeout without a time to wait', async () => {
      // act
      await wait.ms();

      // assert
      expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
      expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 0);
    });
  });
});
