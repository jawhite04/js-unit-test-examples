const NaiveRequest = require('./naiveRequest');
const logger = require('../common/logger');

class NaiveService {
  constructor() {
    logger.info('NaiveService constructor called.');
    this.request = new NaiveRequest();
  }

  send(input) {
    return this.request.setInput(input);
  }
}

module.exports = NaiveService;
