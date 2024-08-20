import connectDB from "@/db/connectDb"
import Property from "@/models/ProParty"
import { NextResponse } from "next/server"


export const GET = async ()=>{
    try{
      await connectDB()
      const data = await Property.find({discount:{$gt:40}}).limit(80)
      if(data.length ===0){
        return NextResponse.json([])
      }
      return NextResponse.json(data,{status:200})
  
    }catch(error){
      console.log(error)
      return NextResponse.json([])
    }
  }
