import connectDB from "@/db/connectDb";
import Property from "@/models/ProParty";
import { NextResponse } from "next/server";


export const GET =  async(_request:Request)=>{
    try{
        await connectDB()
        const data = await  Property.find().sort({updatedAt:-1}).limit(10)
        return NextResponse.json(data)
    
      }catch(error){
        console.log(error)
      }

}