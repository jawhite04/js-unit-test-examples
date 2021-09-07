describe('src/classExample/naiveService.js', () => {
  const setInput = jest.fn();
  const MockNaiveRequest = class {
    constructor() {
      this.setInput = setInput;
    }
  };
  jest.mock('@/src/classExample/naiveRequest', () => MockNaiveRequest);

  const NaiveService = require('@/src/classExample/naiveService');

  describe('constructor', () => {
    it('creates a new `request` instance', () => {
      // act
      const instance = new NaiveService();

      // assert
      expect(instance.request).toEqual(new MockNaiveRequest());
    });
  });
  describe('send', () => {
    it("returns the result of request's setInput function", () => {
      // arrange
      const instance = new NaiveService();
      const input = 'any input';

      // act
      instance.send(input);

      // assert
      expect(setInput).toHaveBeenCalledTimes(1);
      expect(setInput).toHaveBeenCalledWith(input);
    });
  });
});
