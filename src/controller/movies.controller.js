/* eslint-disable camelcase */

const { responseValidator } = require('../utilities/methods');
const { movie: Movie } = require('../models/index');

/**
 * Fetches a page of movies from the database.
 *
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 */
exports.getOnePage = async (req, res) => {
  const { page, sortBy } = req.query;

  const result = await Movie.getAll({
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
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
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

  await Movie.createOne(requestData);

  res.send('Movie Created');
};

/**
 * Update a movie in the database.
 *
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 */
exports.updateMovie = async (req, res) => {
  const { id, attribute, value } = req.body;

  const result = await Movie.update({ [attribute]: value }, { where: { id } });

  responseValidator(result, 'Update Failed');
  res.send('Movie updated');
};

/**
 * Delete movies from the database.
 *
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 */
exports.deleteMovie = async (req, res) => {
  const { attribute, value } = req.body;

  const result = await Movie.destroyRecord({
    where: { [attribute]: value },
  });

  responseValidator(result, 'Deletion Failed');
  res.send('Movie Deleted');
};
