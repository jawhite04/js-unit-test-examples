const logger = require('../common/logger');

const magic = (input = '') => (input % 2 === 0 ? 'even' : 'odd');

class NaiveRequest {
  setInput(input) {
    logger.info('NaiveRequest constructor called.');
    this.input = input;
    return this;
  }

  async receiveAsync() {
    return magic(this.input);
  }
}

module.exports = NaiveRequest;
