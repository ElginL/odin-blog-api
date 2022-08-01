const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create user account
router.post('/signup', userController.signUp);

// Log in to an account
router.post('/login', userController.login);

module.exports = router;