// building schema and its usage 

const mongoose = require('mongoose')

const { Schema } = mongoose;
// login sign up page schema 
const UserSchema = new Schema({
    name :{
        type:String,
        required:true
    },
    location :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    // date now sends the current date in case no date entered 
    Date :{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("user",UserSchema)

