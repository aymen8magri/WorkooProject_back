const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    categorie: {
        type: String,
    },
    location: {
        type: String,
    },
    salary: {
        type: Number,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

module.exports = mongoose.model('Service', ServiceSchema);