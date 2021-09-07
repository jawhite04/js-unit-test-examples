const NaiveRequest = require('./naiveRequest');

class NaiveService {
  constructor() {
    this.request = new NaiveRequest();
  }

  send(input) {
    return this.request.setInput(input);
  }
}

module.exports = NaiveService;
