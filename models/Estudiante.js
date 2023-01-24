const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        nombres: {
            type: String,
            required: true,
            max: 30,
        },
        apellidos: {
            type: String,
            required: true,
            max: 30,
        },
        ci: {
            type: String,
            required: true,
            max: 30,
            unique: true,
        },
        fechaNacimiento: {
            type: Date,
            required: true,
        },
        genero: {
            type: String,
            required: true,
        },
        celular: {
            type: String,
            required: true,
        },
        telefonoLocal:{
            type: String,
            max:20,
        },
        correo:{
            type:String,
            max:30,
        },
        instagram:{
            type:String,
            max:30,
        },
        tiktok:{
            type:String,
            max:30,
        },
        facebook:{
            type:String,
            max:30,
        },
        estado: {
            type: String,
            required: true,
            max: 30,
        },
        municipio: {
            type: String,
            required: true,
            max: 30,
        },
        parroquia: {
            type: String,
            required: true,
            max: 30,
        },
        direccion: {
            type: String,
            max: 30,
        },
        institucion: {
            type: String,
            required: true,
            max: 30,
        },
        tipoInstitucion: {
            type: String,
            required: true,
            max: 30,
        },
        privacidadInstitucion: {
            type: String,
            required: true,
            max: 30,
        },
        añoCursante: {
            type: String,
            required: true,
            max: 30,
        },
        actividad: {
            type: String,
            max: 30,
        },
        nombreProyecto: {
            type: String,
            max: 30,
            default: "",
        },
        descripcion: {
            type: String,
            max: 300,
            default: "",
        },
        areaInteres: {
            type: String,
            required: true,
            max: 30,
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Estudiante", UserSchema);