describe('src/dotNotation/dotNotation.js', () => {
  const expectedOutput = 'the output';
  const mockMethods = {
    send: jest.fn().mockReturnThis(),
    receiveAsync: jest.fn(async () => expectedOutput),
  };
  const mockNaiveService = jest.fn(() => mockMethods);
  jest.mock('@/src/dotNotation/naiveService.js', () => mockNaiveService);

  const dotNotation = require('@/src/dotNotation/dotNotation');

  it('can mock `send` and `receiveAsync`', async () => {
    // arrange
    const input = 'any value';

    // act
    const response = await dotNotation(input);

    // assert
    expect(response).toEqual(expectedOutput);

    expect(mockMethods.send).toHaveBeenCalledTimes(1);
    expect(mockMethods.send).toHaveBeenCalledWith(input);

    expect(mockMethods.receiveAsync).toHaveBeenCalledTimes(1);
  });
});
