const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    rating: {
        type: Number,
    },
    content: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        default: []
    },
    likes:{
        type: Array,
        default: []
    }
}
, {
    timestamps: true
}
);

module.exports = mongoose.model('Blog', blogSchema);