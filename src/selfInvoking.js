const throws = require('./common/throws');

const selfInvoking = (() => {
  throws('self-invoking function threw');
})();

module.exports = selfInvoking;
