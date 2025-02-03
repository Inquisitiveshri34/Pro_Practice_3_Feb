const express = require("express");
const app = express();
require("dotenv").config()
const connectDB = require("./config/db")
const router = require("./routes/userRoute")
const User = require("./models/userModel");
const { connect } = require("mongoose");

app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("Root is working")
})

app.use("/",router)

const PORT = process.env.port || 4000

app.listen(PORT, ()=>{
    try{
        connectDB()
        console.log(`Server is listening on http://localhost:${PORT}`)
    } catch(err){
        console.error(err.message)
    }
})