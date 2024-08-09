import mongoose from "mongoose";
import Agent from "./Agent";
import Property from './ProParty'

const ag = new mongoose.Schema({
    agentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Agent
    },
    propertyId:[
       {
        type:mongoose.Schema.Types.ObjectId,
        ref:Property
       }
      
    ]
 
},{timestamps:true})

const AgentProduct = mongoose.models.AgentProduct || mongoose.model('AgentProduct',ag)
export default AgentProduct