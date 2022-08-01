const createError = require('http-errors');
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const postRoute = require('./routes/postRoute');
const userRoute = require('./routes/userRoute');

require('dotenv').config();

// Connect to database
mongoose.connect(process.env.mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/posts', postRoute);
app.use('/api/users', userRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
})

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({ msg: err.message });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port 3000");
});