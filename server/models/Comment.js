const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { DateTime } = require('luxon');
const Post = require('./post');

const CommentSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    },
    text: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 60
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Post
    }
}, {
    timestamps: { createdAt: true, updatedAt: true }
});

CommentSchema
    .virtual("createdAtFormatted")
    .get(function() {
        return DateTime.fromJSDate(this.createdAt).toLocaleString(DateTime.DATE_MED) + ", " +
            DateTime.fromJSDate(this.createdAt).toLocaleString(DateTime.TIME_24_SIMPLE);
    });

module.exports = mongoose.model('Comment', CommentSchema);