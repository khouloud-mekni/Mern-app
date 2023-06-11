const express = require("express");
const mongoose = require('mongoose')
const connect =require("./utils/connect")
const path = require("path");
require("dotenv").config()
const app = express();
//connect to database
connect()

//express json middleware
app.use(express.json());
app.use("/api/admin", require("./routes/admin"));
app.use("/api/user", require("./routes/user"));
app.use("/api/author", require("./routes/author"));
 // multer middleware
 app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//server is listening
app.listen(5000,(err)=>{
    if(err) throw err;
    console.log("server is running")
})
