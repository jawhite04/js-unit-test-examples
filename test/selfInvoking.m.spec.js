const sinon = require('sinon');

describe('src/selfInvoking.js', () => {
  // first, get the dependency in require.cache
  require('../src/common/throws');
  // second, define the stub in place of the real export
  require.cache[require.resolve('../src/common/throws')] = {
    exports: sinon.stub(),
  };
  // third, re-require -- this time, from the cache
  const throws = require('../src/common/throws');
  // ... or use a module mocking library like proxyquire or mock-require

  it('calls throws with an error message', () => {
    // arrange
    // as written, this only works the first time
    sinon.assert.callCount(throws, 0);

    // act
    // requiring this module will retain it in require.cache
    require('../src/selfInvoking');

    // assert
    sinon.assert.callCount(throws, 1);
  });

  it('does not call `throws` additional times', () => {
    // arrange
    sinon.assert.callCount(throws, 1);

    // act
    require('../src/selfInvoking');

    // assert
    sinon.assert.callCount(throws, 1);
  });
});
