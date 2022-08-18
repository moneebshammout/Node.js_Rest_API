const {
  requestValidator,
  responseValidator,
  hashPassword,
  checkPassword,
  generateAuthToken,
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

  const user = await api.createOne('User', {
    email,
    salt,
    password: hashedPassword,
  });

  responseValidator(user, 'Signup Failed');
  const token = generateAuthToken('jwtPrivateKey', { _id: user.id });
  res.header('x-auth-token', token).send(user);
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

  responseValidator(user, 'USER NOT FOUND');
  await checkPassword(password, user.password);
  const token = generateAuthToken('jwtPrivateKey', { _id: user.id });
  res.header('x-auth-token', token).send(user);
};
