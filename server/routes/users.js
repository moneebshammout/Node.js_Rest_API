const { AsyncRouter } = require('express-async-router');

const router = AsyncRouter();
const usersController = require('../controller/user.controller');

router.post('/signIn', usersController.signIn);
router.post('/signUp', usersController.signUp);

module.exports = router;
