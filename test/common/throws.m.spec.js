const { expect } = require('chai');
const throws = require('../../src/common/throws');

describe('src/common/throws.js', () => {
  describe('throws', () => {
    it('asserts an error was thrown', () => {
      // arrange
      const message = 'this is it';

      // act & assert
      expect(() => throws(message)).to.throw(message);
    });
  });
});
