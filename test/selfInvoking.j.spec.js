describe('src/selfInvoking.js', () => {
  const mockThrows = jest.fn();
  jest.mock('@/src/common/throws', () => mockThrows);

  describe('the naive way', () => {
    it('calls throws with an error message', () => {
      // arrange
      // as written, this only works the first time
      expect(mockThrows).toHaveBeenCalledTimes(0);

      // act
      // requiring this module will retain it in require.cache
      require('@/src/selfInvoking');

      // assert
      expect(mockThrows).toHaveBeenCalledTimes(1);
    });

    it('does not call `throws` additional times', () => {
      // arrange
      expect(mockThrows).toHaveBeenCalledTimes(0);

      // act
      require('@/src/selfInvoking');

      // assert
      expect(mockThrows).toHaveBeenCalledTimes(0);
    });
  });

  describe('more robust ways', () => {
    it('uses resetModules to reset the module cache', () => {
      // arrange
      expect(mockThrows).toHaveBeenCalledTimes(0);

      // act
      jest.resetModules();
      require('@/src/selfInvoking');

      // assert
      expect(mockThrows).toHaveBeenCalledTimes(1);
    });

    it('uses isolateModules to control the module cache', () => {
      // arrange
      expect(mockThrows).toHaveBeenCalledTimes(0);

      // act
      jest.isolateModules(() => require('@/src/selfInvoking'));

      // assert
      expect(mockThrows).toHaveBeenCalledTimes(1);
    });
  });
});
