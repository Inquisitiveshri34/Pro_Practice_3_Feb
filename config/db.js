const mongoose = require("mongoose")
require("dotenv").config()

const MONGO_URI = "mongodb+srv://diyashrivastavas66:Db4diya@cluster0.lrbyz.mongodb.net/users"

const connectDB = async ()=>{
    try{
        await mongoose.connect(MONGO_URI)
        console.log("MongoDB connected successfully")
    } catch (err){
        console.error("MongoDB connection failed!")
    }
}

module.exports = connectDB