describe('src/classExample/naiveRequest.js', () => {
  const mockLogger = {
    info: jest.fn(),
  };
  jest.mock('@/src/common/logger.js', () => mockLogger);

  const NaiveRequest = require('../../src/classExample/naiveRequest');

  describe('setInput', () => {
    it('sets given input to the class instance and returns `this`', () => {
      // arrange
      const instance = new NaiveRequest();
      const input = 'some input value';

      // act
      const response = instance.setInput(input);

      // assert
      expect(instance.input).toEqual(input);
      expect(response).toEqual(instance);
    });
  });
  describe('receiveAsync', () => {
    it("returns the result of `magic` given the instance's value of `input`", async () => {
      // arrange
      const instance = new NaiveRequest();
      instance.input = 1;
      // todo: when `magic` is refactored to its own file, this should become a mock response
      const expectedResult = 'odd';

      // act
      const response = await instance.receiveAsync();

      // assert
      expect(response).toEqual(expectedResult);
    });

    it('returns the result of `magic` given no value for `input`', async () => {
      // arrange
      const instance = new NaiveRequest();
      instance.input = undefined;
      // todo: when `magic` is refactored to its own file, this should become a mock response
      const expectedResult = 'even';

      // act
      const response = await instance.receiveAsync();

      // assert
      expect(response).toEqual(expectedResult);
    });
  });
});
