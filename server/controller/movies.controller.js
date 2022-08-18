/* eslint-disable camelcase */

const { requestValidator, responseValidator } = require('../utilities/methods');
const api = require('./api');

/**
 * Fetches a page of movies from the database.
 *
 * @param {import('express').Request} req Request Object.
 * @param {import('express').Response} res Response Object.
 */
exports.getOnePage = async (req, res) => {
  const { page, sortBy } = req.params;
  requestValidator({ page, sortBy });

  const result = await api.getAll('Movie', {
    offset: (page - 1) * 20,
    limit: 20,
    order: [sortBy.split('.')],
    raw: true,
  });

  responseValidator(result, 'NO MOVIES FOUND');
  res.send(result);
};

/**
 * Create a movie in the database.
 *
 * @param {import('express').Request} req Request Object.
 * @param {import('express').Response} res Response Object.
 */
exports.createMovie = async (req, res) => {
  const {
    id,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    vote_average,
    createdAt,
    updatedAt,
  } = req.body;

  const requestData = {
    id: parseInt(id, 10),
    overview,
    popularity: parseFloat(popularity),
    poster_path,
    release_date,
    title,
    vote_average: parseFloat(vote_average),
    createdAt: Date.parse(createdAt),
    updatedAt: Date.parse(updatedAt),
  };

  requestValidator(requestData);
  await api.createOne('Movie', requestData);

  res.send('Movie Created');
};

/**
 * Update a movie in the database.
 *
 * @param {import('express').Request} req Request Object.
 * @param {import('express').Response} res Response Object.
 */
exports.updateMovie = async (req, res) => {
  const { id, attribute, value } = req.body;
  requestValidator({ id, attribute, value });

  const result = await api.update(
    'Movie',
    { [attribute]: value },
    { where: { id } },
  );

  responseValidator(result, 'Update Failed');
  res.send('Movie updated');
};

/**
 * Delete movies from the database.
 *
 * @param {import('express').Request} req Request Object.
 * @param {import('express').Response} res Response Object.
 */
exports.deleteMovie = async (req, res) => {
  const { attribute, value } = req.body;
  requestValidator({ attribute, value });

  const result = await api.destroy('Movie', {
    where: { [attribute]: value },
  });

  responseValidator(result, 'Deletion Failed');
  res.send('Movie Deleted');
};
