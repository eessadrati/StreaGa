const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
        
    },
    game: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true

    },
    userId: {
        type: String,
        required: true
    },
    participantsNumber: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true

    },
}
, {
    timestamps: true
}
);

module.exports = mongoose.model('Event', eventSchema);