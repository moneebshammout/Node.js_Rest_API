const { responseValidator } = require('../utilities/methods');
const { Movie } = require('../models/index');

/**
 * Fetches a page of movies from the database.
 *
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 */
exports.getOnePage = async (req, res) => {
  const { page, sortBy } = req.query;
  const result = await Movie.getOnePage([sortBy.split('.')], 20, page);
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
    posterPath,
    releaseDate,
    title,
    voteAverage,
    createdAt,
    updatedAt,
  } = req.body;

  await Movie.createOne({
    id: parseInt(id, 10),
    overview,
    popularity: parseFloat(popularity),
    posterPath,
    releaseDate,
    title,
    voteAverage: parseFloat(voteAverage),
    createdAt: Date.parse(createdAt),
    updatedAt: Date.parse(updatedAt),
  });

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
