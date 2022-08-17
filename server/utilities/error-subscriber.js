const winston = require('winston');
/**
 * Subscribes to unhandled errors that occurs outside APIs and logs it when it occurs.
 *
 * @param {string} errorName
 */
module.exports = (errorName) => {
  process.on(errorName, (ex) => {
    winston.error(ex.message, ex);
    process.exit(1);
  });
};
