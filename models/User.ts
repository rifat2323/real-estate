import mongoose from "mongoose";

const us = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Mobile_Number:{
        type:String,
        required:true
    },
    City:String,
    Country:String,
    Current_Balance:Number

},{timestamps:true})

const User = mongoose.models.User || mongoose.model('User',us)
export default User


