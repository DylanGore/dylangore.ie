const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    avatarUrl: String,
    provider: String,
    providerId: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;