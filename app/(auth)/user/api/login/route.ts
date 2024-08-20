import connectDB from "@/db/connectDb"
import User from "@/models/User"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt";
import { cookies } from 'next/headers'


export const POST = async (req: Request) => {
    await connectDB()
   try{
    const body =  await req.json()
    const {  Email, Password } = body
    if( !Email || !Password ){
      return NextResponse.json({ error: "Please fill all the fields" }, { status: 400 })
    }
    const findUser = await User.findOne({ Email })
    if(!findUser){
       return NextResponse.json({ data:"User not found" }, { status: 306 }) 
      
    }
    const match = await bcrypt.compare(Password,findUser.Password)
    if(!match){
       return NextResponse.json({ data:"Password not match" }, { status: 306 }) 
      
    }

    cookies().set("user","hello there",{secure:true,sameSite:"none",httpOnly:true})
   
    return NextResponse.json({ url: '/' }, { status: 200 }) 
    
   }catch(error:any){
    return NextResponse.json({ url: '/404' }, { status: 500 }) 
   }
  
  
  }