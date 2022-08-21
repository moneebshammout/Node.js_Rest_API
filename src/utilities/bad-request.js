/**
 * Overriding Error class to handel api errors.
 */
class BadRequest extends Error {
  constructor(message, code, details) {
    super(message);
    this.statusCode = code ?? 400;
    this.details = details;
  }
}

module.exports = BadRequest;
