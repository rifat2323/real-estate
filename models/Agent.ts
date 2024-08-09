import mongoose from 'mongoose'

const ag = new mongoose.Schema({
    Name:String,
    Picture:String,
    Title:String,
    Specialization:String,
    ActiveListings:Number,
    SoldProperties:Number,
    Phone:Number,
    Email:String,
    Address:String
},{timestamps:true})

const Agent = mongoose.models.Agent || mongoose.model('Agent',ag)
export default Agent