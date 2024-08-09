import mongoose from 'mongoose';
import Agent from './Agent';

const pro = new mongoose.Schema({
    
    Title:String,
    Price_Apart:String,
    Image:String,
    Description:String,
    Category:String,
    
    CountInStock:Number,
    Rating:Number,
    AgentName:String,
    AgentId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:Agent


    },
    Location:String,
    For_Sale:{
        type:String,
        enum:["for_sale","for_rent","sold"]
    },
    Price:{
        type:String,
        enum:["under_100000","100000_200000","200000_300000","over_300000"]
        },
     Bed_and_Bath:{
        type:String,
        enum:["1_bed_1_bath","2_bed_2_bath","3_bed_2_bath","4_bed_3_bath"]
     },
     Listing_Status:{
        type:String,
        enum:["active","pending","closed","withdrawn"]
     } ,
     Type:{
        type:String,
        enum:["house","apartment","condo","townhouse"]
     } ,
     Number_Of_Sales:Number,
     Area:Number,
     Bed:String,
     Bath:String
   




},{timestamps:true})


const Property = mongoose.models.Property || mongoose.model('Property',pro)

export default Property