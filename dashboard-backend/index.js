const express = require("express")
const mongoose = require("mongoose")
const cors =require("cors")
const app = express()

const UserModel = require("./models/User")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://karthickbharathi15:karthick2K@cluster0.lwfvwzd.mongodb.net/")



app.post('/register' , (req , res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.post('/login' , (req , res) => {
    const {email , password} = req.body
    UserModel.findOne({email , password})
    .then(user => {
        if(user){
          if(user.password === password){
            res.json("Success")
          }else{
            res.json("Password is incorrect")
          }  
        }else{
            res.json("No User found Kindly register")
        }
    })
})
app.listen(3000 , () => {
    console.log("server is running")
})