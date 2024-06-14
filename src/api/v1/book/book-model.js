const mongoose = require('mongoose');
const database = require('../../../confg/db');

const Author = require('../author/author-model');


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    publishedDate: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    }
}, {
    timestamps: false,
    collection: 'tb_books' // Nome da coleção no MongoDB
});

module.exports = mongoose.model('Book', bookSchema);