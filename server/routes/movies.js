const { AsyncRouter } = require('express-async-router');

const router = AsyncRouter();
const moviesController = require('../controller/movies.controller');

router.post('/', moviesController.createPage);
router.get('/:page&:sortBy', moviesController.getOnePage);

module.exports = router;
