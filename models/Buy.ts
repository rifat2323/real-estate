import mongoose from "mongoose";

import Property from './ProParty'
import User from "./User";


const ag = new mongoose.Schema({
   userMail:{
    type:String,
   
   },
   propertyId:
      {
       type:mongoose.Schema.Types.ObjectId,
       ref:Property
      },
     
   
   tnxId:String,
   total:Number,
   status:{
    type:String,
    default:"pending",
    enum:["pending","success","failed"]
   }

 
},{timestamps:true})

const Buy = mongoose.models.Buy || mongoose.model('Buy',ag)
export default Buy