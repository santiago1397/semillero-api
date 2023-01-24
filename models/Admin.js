const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            max: 30,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            max: 30,
            unique: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Admin", UserSchema);