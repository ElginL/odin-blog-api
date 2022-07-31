const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { DateTime } = require('luxon');

const PostSchema = new Schema({
    title: {
        type: String,
        minlength: 6,
        maxlength: 50,
        required: true
    },
    content: {
        type: String,
        minlength: 6,
        required: true
    },
    isPublished: {
        type: Boolean,
        required: true,
        default: false,

    }
}, {
    timestamps: { createdAt: true, updatedAt: true }
});

PostSchema
    .virtual('createdAtFormatted')
    .get(function() {
        return DateTime.fromJSDate(this.createdAt).toLocaleString(DateTime.DATE_MED) + ", " +
            DateTime.fromJSDate(this.createdAt).toLocaleString(DateTime.TIME_24_SIMPLE);
    })

module.exports = mongoose.model('Post', PostSchema);