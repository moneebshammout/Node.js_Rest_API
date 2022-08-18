const { AsyncRouter } = require('express-async-router');
const usersController = require('../controller/user.controller');

const router = AsyncRouter();

router.post('/signIn', usersController.signIn);
router.post('/signUp', usersController.signUp);

module.exports = router;
