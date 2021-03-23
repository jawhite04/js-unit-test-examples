const { expect } = require('chai');
const sinon = require('sinon');
const logger = require('../../src/common/logger');

describe('src/common/logger.js', () => {
  describe('error', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('should call console.error with args', () => {
      // arrange
      const errorStub = sinon.stub(console, 'error');
      const calledWith = [1, 2, 3, 'abc'];

      // act
      logger.error(...calledWith);

      // assert
      expect(errorStub.callCount).to.equal(1);
      expect(errorStub.calledWith(...calledWith)).to.equal(true);
    });
  });
});
