const express = require('express');
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const authRoute = require("./routes/auth")
const estudiantesRoute = require("./routes/estudiantes")
const userRoute = require("./routes/docentes")
const cors = require('cors');
const multer = require("multer");
//const path = require("path");

dotenv.config()

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log("connected to mongodb")
});

const app = express()

/* app.use("/public/assets", express.static(path.join(__dirname, "public/assets"))); */


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());



/* const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/assets");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File uploded successfully");
    } catch (error) {
        console.error(error);
    }
}); */


app.use("/api/auth", authRoute)
app.use("/api/estudiantes", estudiantesRoute)
app.use("/api/docentes", userRoute)

app.get("/", (req, res) => {
    res.send("Welcome to homepage")
})


app.listen(process.env.PORT || 8800, () => {
    console.log("Backend server is running on port", process.env.PORT || 8800)
})