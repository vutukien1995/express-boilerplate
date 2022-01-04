const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);