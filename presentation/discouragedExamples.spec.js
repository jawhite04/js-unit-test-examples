describe('discouraged unit test practices', () => {
  describe('playing golf with test coverage', () => {
    // "Code golf is a type of recreational computer programming competition
    // in which participants strive to achieve the shortest possible source
    // code that implements a certain algorithm."  - Wikipedia
    const exampleSrc = (input) => {
      const fizz = input % 3 ? '' : 'Fizz';
      const buzz = input % 5 ? '' : 'Buzz';
      return `${fizz}${buzz}`;
    };
    it('exercises several code paths in one test', () => {
      expect(exampleSrc(3)).toEqual('Fizz');
      expect(exampleSrc(5)).toEqual('Buzz');
      expect(exampleSrc(15)).toEqual('FizzBuzz');
    });
  });

  describe('using `dotenv` in unit tests', () => {
    const path = require('path');
    require('dotenv').config({ path: path.resolve(process.cwd(), 'presentation/.env') });
    const exampleSrc = () => process.env.PulledFromDotEnv;

    it('relies on environment variables to run', () => {
      expect(exampleSrc()).toBeTruthy();
    });
  });

  describe('calling live 3rd party dependencies', () => {
    const wait = require('../src/wait');
    const httpClient = {
      get: async () => {
        await wait.ms(1000);
        return { statusCode: 200, body: '' };
      },
    };
    const exampleSrc = () => httpClient.get();

    it('calls a live dependency', async () => {
      // arrange
      const expectedResponse = { statusCode: 200, body: '' };

      // act & assert
      await expect(exampleSrc()).resolves.toEqual(expectedResponse);
    });
  });

  describe('violating "unit" definition', () => {
    const wait = require('../src/wait');
    const exampleSrc = async () => wait.ms(0);

    it('does not mock dependencies of the unit under test', async () => {
      // arrange
      const setTimeoutSpy = jest.spyOn(global, 'setTimeout');

      // act
      await exampleSrc();

      // assert
      expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
    });
  });
});
