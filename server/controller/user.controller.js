const jwt = require('jsonwebtoken');
const config = require('config');
const BadRequest = require('../utilities/bad-request');
const {
  requestValidator,
  responseValidator,
  hashPassword,
  checkPassword,
} = require('../utilities/methods');
const api = require('./api');

/**
 * Sign up user.
 *
 * @param {import('express').Request} req Request Object.
 * @param {import('express').Response} res Response Object.
 */
exports.signUp = async (req, res) => {
  const { email, password } = req.body;
  requestValidator({ email, password });

  const { salt, hashedPassword } = await hashPassword(password);
  const result = await api.createOne('User', {
    email,
    salt,
    password: hashedPassword,
  });

  responseValidator(result, 'Signup Failed');
  res.send(result);
};

/**
 * Sign in user.
 *
 * @param {import('express').Request} req Request Object.
 * @param {import('express').Response} res Response Object.
 */
exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  requestValidator({ email, password });

  const user = await api.getOne('User', {
    where: { email },
    raw: true,
  });

  if (user === null) {
    throw new BadRequest('USER NOT FOUND');
  }

  await checkPassword(password, user.password);
  const token = jwt.sign({ _id: user.id }, config.get('jwtPrivateKey'));
  // responseValidator(result, 'Signup Failed');
  res.send(token);
};
