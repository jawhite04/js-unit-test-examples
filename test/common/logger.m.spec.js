const { expect } = require('chai');
const sinon = require('sinon');
const logger = require('../../src/common/logger');

describe('src/common/logger.js', () => {
  describe('logger', () => {
    const calledWith = [1, 2, 3, 'abc'];
    afterEach(() => {
      sinon.restore();
    });

    it('should call console.error with args', () => {
      // arrange
      const errorStub = sinon.stub(console, 'error');

      // act
      logger.error(...calledWith);

      // assert
      expect(errorStub.callCount).to.equal(1);
      expect(errorStub.calledWith(...calledWith)).to.equal(true);
    });

    it('should call console.warn with args', () => {
      // arrange
      const warnStub = sinon.stub(console, 'warn');

      // act
      logger.warn(...calledWith);

      // assert
      expect(warnStub.callCount).to.equal(1);
      expect(warnStub.calledWith(...calledWith)).to.equal(true);
    });

    it('should call console.log with args', () => {
      // arrange
      const logStub = sinon.stub(console, 'log');

      // act
      logger.info(...calledWith);

      // assert
      expect(logStub.callCount).to.equal(1);
      expect(logStub.calledWith(...calledWith)).to.equal(true);
    });

    it('should call console.debug with args', () => {
      // arrange
      const debugStub = sinon.stub(console, 'debug');

      // act
      logger.debug(...calledWith);

      // assert
      expect(debugStub.callCount).to.equal(1);
      expect(debugStub.calledWith(...calledWith)).to.equal(true);
    });
  });
});
