const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middleware/jwtVerify');

// Create user account
router.post('/signup', verifyToken, userController.signUp);

// Log in to an account
router.post('/login', userController.login);

module.exports = router;