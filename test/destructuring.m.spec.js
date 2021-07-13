const sinon = require('sinon');

describe('src/destructuring.js', () => {
  it('can mock the logger', () => {
    // arrange
    // first, import the dependency to be mocked
    const logger = require('../src/common/logger');
    // sub in the mock (stub) for the real thing
    sinon.stub(logger, 'error');
    // finally, import the resource which uses the dependency
    const fn = require('../src/destructuring');

    // act
    fn();

    // assert
    sinon.assert.calledOnce(logger.error);
    sinon.assert.calledWith(logger.error, 'logger.error was called');
  });
});
