import connectDB from "@/db/connectDb"
import Property from "@/models/ProParty"
import { NextResponse } from "next/server"



export const GET = async ()=>{
    try{
      await connectDB()
      const data = await Property.find({Price_Apart:{$lt:300000}}).limit(80)
      if( data.length ===0 ){
        return NextResponse.json([])
      }
      return NextResponse.json(data,{status:200})
  
    }catch(error){
      console.log(error)
      return NextResponse.json([])
    }
  }
  