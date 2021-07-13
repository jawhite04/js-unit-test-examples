describe('src/common/throws.js', () => {
  const throws = require('@/src/common/throws');

  describe('throws', () => {
    it('catches the thrown error', () => {
      // arrange
      const message = 'this is it';

      // act & assert
      expect(() => throws(message)).toThrow(message);
    });
  });
});
