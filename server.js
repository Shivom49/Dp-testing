require("dotenv").config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mongoURL = process.env.MONGO_URL
const PORT = process.env.PORT



mongoose.connect(mongoURL)
.then(()=>{console.log("Mongoose connected successfully")})
.catch(()=>{console.log("Something went wrong")})




app.get("/", (req, res)=>{
    res.send("Backend is running successfully")
})




app.listen(PORT, ()=>{ console.log(`Server is running on ${PORT}`)})