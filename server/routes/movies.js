const { AsyncRouter } = require('express-async-router');
const authHandler = require('../middleware/authentication');
const moviesController = require('../controller/movies.controller');

const router = AsyncRouter();

router.get('/:page&:sortBy', moviesController.getOnePage);
router.put('/', authHandler, moviesController.updateMovie);
router.post('/', authHandler, moviesController.createMovie);
router.delete('/', authHandler, moviesController.deleteMovie);

module.exports = router;
