require("dotenv").config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mongoURL = process.env.MONGO_URL
const PORT = process.env.PORT



mongoose.connect(mongoURL)
.then(()=>{console.log("Mongoose connected successfully")})
.catch((err)=>{console.log("Something went wrong", err.message)})




app.get("/", (req, res)=>{
    res.send("Backend is running successfully")
})


app.get("/apiTest", (req, res) => {
  res.json({ message: "Backend successfully connected" });
});



app.listen(PORT, ()=>{ console.log(`Server is running on ${PORT}`)})