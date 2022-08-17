const { AsyncRouter } = require('express-async-router');

const router = AsyncRouter();
const moviesController = require('../controller/movies.controller');

router.get('/:page&:sortBy', moviesController.getOnePage);
router.put('/', moviesController.updateMovie);
router.post('/', moviesController.createMovie);
router.delete('/', moviesController.deleteMovie);

module.exports = router;
