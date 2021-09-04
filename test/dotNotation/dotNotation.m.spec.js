const { expect } = require('chai');
const sinon = require('sinon');
const dotNotation = require('../../src/dotNotation/dotNotation');
const NaiveService = require('../../src/dotNotation/naiveService');

describe('src/dotNotation/dotNotation.js', () => {
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
    const response = await dotNotation(input);

    // assert
    expect(response).to.equal(output);

    sinon.assert.calledOnce(NaiveService.prototype.send);
    sinon.assert.calledWith(NaiveService.prototype.send, input);

    sinon.assert.calledOnce(fakeReceivesAsync);
  });
});
