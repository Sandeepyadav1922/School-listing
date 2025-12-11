const express = require("express");
const app = express();
require("dotenv").config();
const mysql = require("mysql2");
const cors = require("cors");
const multer  = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/schoolImages");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors({
    http:"//localhost:5173",
}))
app.use("/images", express.static("uploads/schoolImages"));

const db = mysql.createConnection ({
    host: "localhost",
    user: "root",
    database: "schooldb",
    password: "sandeep@0001",
});

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   port: process.env.DB_PORT,
//   ssl: { rejectUnauthorized: false }
// });

db.connect((err) => {
    if(err) {
        console.log("mysql connection failed");
        console.log(err);
    } else {
        console.log("connected to mysql");
    }
});

//Index Route
app.get("/schools", (req, res) => {
    let q = "SELECT * FROM schools";
    try {
        db.query(q, (err, schools) => {
            if(err) res.status(500).json({error: err});
            res.status(200).json(schools);
        })
    } catch(err) {
        res.status(500).json({message: "Something wrong in DB"});
    }
});

//Create Route
app.post("/schools", upload.single('image'), (req, res) => {
    let {id, name, address, city, state, contact, email_id} = req.body;
    if(!req.file) {
        return res.status(500).json({message: "Image is required"});
    }
    if(!name || !address || !city || !state || !contact || !email_id) {
        res.status(500).json({message: "All fields required "});
    }
    const image = req.file.filename;
    let data = [id, name, address, city, state, contact, image, email_id];
    let q = "INSERT INTO schools(id, name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    try {
        db.query(q, data, (err, result) => {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    return res.status(400).json({ message: "School already exists" });
                }

                res.status(500).json({message: "Database error"});
            }
            res.status(200).json("School Added Successfully");
        })
    } catch(err) {
        res.status(500).json({message: "Something wrong in DB"});
    }
});

app.get("/", (req, res) => {
    res.send("Hii this is a backend");
});

app.listen(8080, (req, res) => {
    console.log("server is listing on port 8080");
});