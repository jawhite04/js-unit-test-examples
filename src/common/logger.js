/* eslint-disable no-console */
const logger = {
  error: (...args) => console.error(...args),
  warn: (...args) => console.warn(...args),
  log: (...args) => console.log(...args),
  debug: (...args) => console.debug(...args),
};

module.exports = logger;
