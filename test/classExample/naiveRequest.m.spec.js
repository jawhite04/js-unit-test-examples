const { expect, assert } = require('chai');
const sinon = require('sinon');
const logger = require('../../src/common/logger');
const NaiveRequest = require('../../src/classExample/naiveRequest');

describe('src/classExample/naiveRequest.js', () => {
  sinon.stub(logger, 'info');

  describe('setInput', () => {
    it('sets given input to the class instance and returns `this`', () => {
      // arrange
      const instance = new NaiveRequest();
      const input = 'some input value';

      // act
      const response = instance.setInput(input);

      // assert
      expect(instance.input).to.equal(input);
      assert.deepEqual(response, instance);
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
      expect(response).to.equal(expectedResult);
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
      expect(response).to.equal(expectedResult);
    });
  });
});
