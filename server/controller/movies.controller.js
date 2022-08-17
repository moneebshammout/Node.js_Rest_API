/* eslint-disable camelcase */

const { requestValidator } = require('../utilities/methods');
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

  const jsonData = await api.getAll('Movie', {
    offset: (page - 1) * 20,
    limit: 20,
    raw: true,
    order: [sortBy.split('.')],
  });

  res.send(jsonData);
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
  const jsonData = await api.createOne('Movie', requestData);

  res.send(jsonData);
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

  const jsonData = await api.update(
    'Movie',
    { [attribute]: value },
    { where: { id } },
  );
  res.send(jsonData);
};

/**
 * Delete  movies from the database.
 *
 * @param {import('express').Request} req Request Object.
 * @param {import('express').Response} res Response Object.
 */
exports.deleteMovie = async (req, res) => {
  const { attribute, value } = req.body;
  requestValidator({ attribute, value });

  const jsonData = await api.destroy('Movie', {
    where: { [attribute]: value },
  });
  res.send(jsonData);
};
