const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);
// this const is basically Capital by practice

module.exports = User;