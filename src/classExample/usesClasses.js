const NaiveService = require('./naiveService');

// this file and its dependencies could be simplified --
// see this folder's readme.md for why they aren't.

module.exports = async (input) => {
  const service = new NaiveService();
  return service.send(input).receiveAsync();
};
