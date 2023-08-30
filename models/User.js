const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 255,
        min: 1,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 255,
        min: 1,
    },
    password: {
        type: String,
        required: true,
        max: 255,
        min: 1,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user", 
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
