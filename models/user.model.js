const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    image: {
        type: String,
        default: 'avatar.png',
    }
});

module.exports = mongoose.model('User', UserSchema);