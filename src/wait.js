const logger = require('./common/logger');

const ms = async (duration = 0) => {
  logger.info(`Starting to wait ${duration} ms.`);
  await new Promise((resolve) => setTimeout(resolve, duration));
  logger.info(`Completed waiting ${duration} ms.`);
};

module.exports = {
  ms,
};
