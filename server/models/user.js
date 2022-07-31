const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

module.exports = mongoose.model('User', UserSchema);