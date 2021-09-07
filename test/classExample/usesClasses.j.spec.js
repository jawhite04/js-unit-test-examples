describe('src/classExample/usesClasses.js', () => {
  const expectedOutput = 'the output';
  const mockMethods = {
    send: jest.fn().mockReturnThis(),
    receiveAsync: jest.fn(async () => expectedOutput),
  };
  const mockNaiveService = jest.fn(() => mockMethods);
  jest.mock('@/src/classExample/naiveService.js', () => mockNaiveService);

  const usesClasses = require('@/src/classExample/usesClasses');

  it('can mock `send` and `receiveAsync`', async () => {
    // arrange
    const input = 'any value';

    // act
    const response = await usesClasses(input);

    // assert
    expect(response).toEqual(expectedOutput);

    expect(mockMethods.send).toHaveBeenCalledTimes(1);
    expect(mockMethods.send).toHaveBeenCalledWith(input);

    expect(mockMethods.receiveAsync).toHaveBeenCalledTimes(1);
  });
});
