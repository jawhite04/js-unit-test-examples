const { expect } = require('chai');
const sinon = require('sinon');
const logger = require('../src/common/logger');
const wait = require('../src/wait');

describe('src/wait.js', () => {
  let clock;
  let setTimeoutSpy;

  before(() => {
    clock = sinon.useFakeTimers();
    setTimeoutSpy = sinon.spy(clock, 'setTimeout');
  });

  afterEach(() => {
    setTimeoutSpy.resetHistory();
  });

  after(() => {
    clock.restore();
  });

  sinon.stub(logger, 'info');

  it('calls setTimeout with a time to wait', async () => {
    // arrange
    const msToWait = 6000;

    // act
    const responsePromise = wait.ms(msToWait);
    clock.tick(msToWait);
    await responsePromise;

    // assert
    sinon.assert.callCount(setTimeoutSpy, 1);
    expect(setTimeoutSpy.calledWith(sinon.match.func, msToWait)).to.equal(true);
  });

  it('calls setTimeout with a default', async () => {
    // act
    const responsePromise = wait.ms();
    clock.tick(10);
    await responsePromise;

    // assert
    sinon.assert.callCount(setTimeoutSpy, 1);
    expect(setTimeoutSpy.calledWith(sinon.match.func, 0)).to.equal(true);
  });
});
