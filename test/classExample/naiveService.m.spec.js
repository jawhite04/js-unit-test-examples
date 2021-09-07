const { assert } = require('chai');
const sinon = require('sinon');

describe('src/classExample/naiveService.js', () => {
  const setInput = sinon.fake();
  const MockNaiveRequest = class {
    constructor() {
      this.setInput = setInput;
    }
  };
  require('../../src/classExample/naiveRequest');
  require.cache[require.resolve('../../src/classExample/naiveRequest')] = {
    exports: MockNaiveRequest,
  };
  const NaiveService = require('../../src/classExample/naiveService');

  describe('constructor', () => {
    it('creates a new `request` instance', () => {
      // arrange
      const mockInstance = new MockNaiveRequest();

      // act
      const instance = new NaiveService();

      // assert
      assert.deepEqual(instance.request, mockInstance);
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
      sinon.assert.calledOnce(setInput);
      sinon.assert.calledWith(setInput, input);
    });
  });
});
