var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let Recipe = new Schema({
    title: {
        type: String,
        required: true,
        validate: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/
    },
    level: {
        type: String,
        required: true
    },
    ingredients: {
        type: [Array],
        required: [true, "password is required!"]
    },
    cuisine: {
        type: String,
        required: true
    },
    dishType: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    duration: {
        type: Number,
        required: true
    }
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt"
    }
})

module.exports = mongoose.model('Recipes', Recipe)