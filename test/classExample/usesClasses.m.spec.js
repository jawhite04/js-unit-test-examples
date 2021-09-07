const { expect } = require('chai');
const sinon = require('sinon');

describe('src/classExample/usesClasses.js', () => {
  const output = 'anything goes';
  const fakeReceivesAsync = sinon.fake.resolves(output);
  const fakeRequest = sinon.fake.returns({ receiveAsync: fakeReceivesAsync });
  const MockNaiveService = class {
    constructor() {
      this.send = fakeRequest;
    }
  };

  require('../../src/classExample/naiveService');
  require.cache[require.resolve('../../src/classExample/naiveService')] = {
    exports: MockNaiveService,
  };
  const usesClasses = require('../../src/classExample/usesClasses');

  it('can mock `send` and `receiveAsync`', async () => {
    // arrange
    const input = 'any value';

    // act
    const response = await usesClasses(input);

    // assert
    expect(response).to.equal(output);

    sinon.assert.calledOnce(fakeRequest);
    sinon.assert.calledWith(fakeRequest, input);

    sinon.assert.calledOnce(fakeReceivesAsync);
  });
});
