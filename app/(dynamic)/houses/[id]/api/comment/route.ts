import connectDB from "@/db/connectDb"

import { NextResponse } from "next/server"
import Rating from '@/models/Rating'
import User from "@/models/User"



export const POST =  async (request:Request, {params}:{params:{id:string}})=>{
   await connectDB()
   const {email,text,Rat} = await request.json()
   if(!email || !text || !Rat){
      return NextResponse.json({ error: "Please fill all the fields" }, { status: 400 })
    }

   const findUser = await User.findOne({Email:email})
    
    try{
       const findHouse = await Rating.findOne({ProductId:params.id}).populate({
        path: 'Comments.UserId',
        select: 'Image Name', 
      })
       if(!findHouse){
       
         const newRating = await Rating.create({ProductId:params.id,Comments:[{UserId:findUser._id,text,Rat}]})

         return NextResponse.json(newRating.Comments[0])
       }
        findHouse.Comments.push({UserId:findUser._id,text,Rat})
        await findHouse.save()
        return NextResponse.json(findHouse.Comments[findHouse.Comments.length -1])


    }catch(error:any){
    
      console.error("Error occurred:", error); // Log the error to see it in your server logs
        return NextResponse.json({ error: error.message || "An unexpected error occurred" }, { status: 500 });
        
    }

}

export const GET = async (_request:Request, {params}:{params:{id:string}})=>{
  await connectDB()
  try{
    const findHouse = await Rating.findOne({ProductId:params.id}).populate({
      path: 'Comments.UserId',
      select: 'Image Name', 
    })
    if(!findHouse){
      return NextResponse.json([], { status: 404 })
    }

    return NextResponse.json(findHouse)

  }catch(error){
    console.log(error)
  }
}



