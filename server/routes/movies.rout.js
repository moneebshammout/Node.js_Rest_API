const express = require('express');

const router = express.Router();
const moviesController = require('../controller/movies.controller');

module.exports = (app) => {
  router.post('/', (req, res) => moviesController.createAll(req, res));

  router.get('/:page&:sortBy', (req, res) =>
    moviesController.findAll(req, res),
  );

  app.use('/movies', router);
};
