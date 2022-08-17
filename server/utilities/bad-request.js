/**
 * Overriding Error class to handel api errors.
 */
class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = BadRequest;
