const router = require('express').Router();

const { registerController } = require('../controllers/auth.controllers');

router.post('/register', registerController);

module.exports = router;
