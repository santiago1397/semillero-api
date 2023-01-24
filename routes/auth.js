const router = require("express").Router();
const Docente = require("../models/Docente");
const Admin = require("../models/Admin")
const bcrypt = require("bcrypt");

//register
router.post("/register", async (req, res) => { 
    console.log(req.body)
    try{
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.contraseña, salt);

        //create new user
        const newDocente = new Docente({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            ci: req.body.ci,
            correo: req.body.correo,
            contraseña: hashedPassword,
            estado: req.body.estado,
            municipio: req.body.municipio,
            institucion: req.body.institucion,
        });

        //save user and respond
        const docente = await newDocente.save();
        res.status(200).json(docente);
    }catch(err){
        console.log(err);
    }

})

//login
router.post("/login", async(req,res)=>{
    try{
        const docente = await Docente.findOne({ correo: req.body.correo });
        !docente && res.status(404).json("docente not found");

        const validPassword = await bcrypt.compare(req.body.contraseña, docente.contraseña)
        !validPassword && res.status(400).json("wrong password")

        res.status(200).json(docente)

    }catch (err){
        console.log(err)
    }

})

//login admin
router.post("/admin", async(req,res)=>{
    
    try{
        const admin = await Admin.findOne({ username: req.body.username });
        !admin && res.status(404).json("docente not found");

        const validPassword = await bcrypt.compare(req.body.password, admin.password)
        !validPassword && res.status(400).json("wrong password")

        res.status(200).json(admin)

    }catch (err){
        console.log(err)
    }
})

router.post("/adminr", async (req, res) => { 
    console.log(req.body)
    try{
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newAdmin = new Admin({
            username: req.body.username,
            password: hashedPassword,
        });

        //save user and respond
        const admin = await newAdmin.save();
        res.status(200).json(admin);
    }catch(err){
        console.log(err);
    }

})

module.exports = router