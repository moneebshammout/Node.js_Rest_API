const BadRequest = require('./bad-request');
/**
 * Validate request parameters.
 *
 * @param {Object} params Object of parameters to check.
 */
const requestValidator = (params) => {
  Object.keys(params).forEach((param) => {
    const value = params[param];
    if (value === undefined || value === null) {
      throw new BadRequest(`PARAMETER ${param} IS MISSING`);
    }
  });
};

/**
 * Convert response object to JSON.
 *
 * @param {Object} data Object to be converted.
 *
 * @return {Object<string>} JSON.
 */
const toJson = (data) => JSON.stringify(data, null, 2);

module.exports = { requestValidator, toJson };
