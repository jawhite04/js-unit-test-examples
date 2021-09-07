const { expect } = require('chai');
const sinon = require('sinon');
const usesClasses = require('../../src/classExample/usesClasses');
const NaiveService = require('../../src/classExample/naiveService');

describe('src/classExample/usesClasses.js', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('can mock `send` and `receiveAsync`', async () => {
    // arrange
    const input = 'any value';
    const output = 'anything goes';
    const fakeReceivesAsync = sinon.fake.resolves(output);
    const fakeRequest = { receiveAsync: fakeReceivesAsync };
    sinon.stub(NaiveService.prototype, 'send').returns(fakeRequest);

    // act
    const response = await usesClasses(input);

    // assert
    expect(response).to.equal(output);

    sinon.assert.calledOnce(NaiveService.prototype.send);
    sinon.assert.calledWith(NaiveService.prototype.send, input);

    sinon.assert.calledOnce(fakeReceivesAsync);
  });
});
