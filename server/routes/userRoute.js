const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Create user account
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return next(err);
        }

        const newUser = new User({
            username,
            password: hashedPassword
        });

        newUser.save(err => {
            if (err) {
                return next(err);
            }

            res.json(newUser);
        })
    });
});

// Log in to an account
router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = User.findOne({ username })
        .exec((err, foundUser) => {
            if (err) {
                return next(err);
            }

            if (!foundUser) {
                res.status(401).json({ message: "No such username found" });
                return;
            }

            bcrypt.compare(password, foundUser.password, (err, result) => {
                if (err) {
                    return next(err);
                }

                if (result) {
                    jwt.sign({ user }, process.env.jwtPrivateKey, (err, token) => {
                        if (err) {
                            return next(err);
                        }

                        res.json({ token });
                    })
                } else {
                    res.status(401).json({ message: "The username or password is incorrect" });
                }
            });
        });
});

module.exports = router;