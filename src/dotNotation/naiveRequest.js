const magic = (input = '') => (input % 2 === 0 ? 'even' : 'odd');

class NaiveRequest {
  setInput(input) {
    this.input = input;
    return this;
  }

  async receiveAsync() {
    return magic(this.input);
  }
}

module.exports = NaiveRequest;
