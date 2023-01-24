const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            max: 30,
            unique: true,
        },
        apellido: {
            type: String,
            required: true,
            max: 30,
            unique: true,
        },
        correo: {
            type: String,
            required: true,
            max: 30,
            unique: true,
        },
        contraseña: {
            type: String,
            require: true,
            min: 3,
            max: 20,
            unique: true,
        },
        estado: {
            type: String,
            require: true,
            min: 3,
            max: 20,
        },
        ci: {
            type: Number,
            require: true,
            unique: true,
        },
        institucion: {
            type: String,
            require: true,
            min: 3,
            max: 30,
        },
        municipio: {
            type: String,
            require: true,
            min: 3,
            max: 20,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Docente", UserSchema);