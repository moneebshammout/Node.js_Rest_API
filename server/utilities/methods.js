const bcrypt = require('bcrypt');
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
 * Validate response object.
 *
 * @param {Object} response Object of parameters to check.
 * @param {string} description Error description.
 */
const responseValidator = (response, description) => {
  if (!response || response === null) {
    throw new BadRequest(description);
  }
};

/**
 * Convert response object to JSON.
 *
 * @param {string} password Password to be hashed.
 *
 * @return {Object<string>} Salt and hashed password.
 */
const hashPassword = async (password) => {
  if (password.length < 8) {
    throw new BadRequest('MINIMUM PASSWORD 8 CHARACTERS');
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return {
    salt,
    hashedPassword,
  };
};

/**
 * Authenticates user by checking the password with the salt.
 *
 * @param {string} password Password to be hashed.
 * @param {string} hashedPassword Password stored in the database.
 *
 */
const checkPassword = async (password, hashedPassword) => {
  if (password.length < 8) {
    throw new BadRequest('MINIMUM PASSWORD 8 CHARACTERS');
  }
  const valid = await bcrypt.compare(password, hashedPassword);

  if (!valid) {
    throw new BadRequest('PASSWORD INCORRECT');
  }
};

module.exports = {
  requestValidator,
  checkPassword,
  responseValidator,
  hashPassword,
};
