const User = require("../models/userModel")

const addUser = async (req, res) => {
    try{
        const {username, email, password} = req.body
        if (username == "") {
            res.status(400).send("Username cannot be empty")
        }
        else if (email == "") {
            res.status(400).send("Email cannot be empty")
        }
        else if (password.length < 8 || password.length > 16) {
            res.status(400).send("Password length should be greater than 8 or less than or equal to 16")
        } 
        else {
            const newUser = new User({
                username, email, password
            })
            await newUser.save()
            res.status(201).send(newUser)
        }
    } catch (err){
        res.status(500).send("Error in userController")
    }
}

module.exports = addUser