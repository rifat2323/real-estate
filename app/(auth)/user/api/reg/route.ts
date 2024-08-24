import connectDB from "@/db/connectDb"
import User from "@/models/User"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt";
export const POST = async (req: Request) => {
  await connectDB()
 try{
  const body =  await req.json()
  const { Name, Email, Password,Mobile_Number,Last_Name,City,Country,Current_Balance,Image } = body
  if(!Name || !Email || !Password || !Mobile_Number || !Last_Name || !City || !Country || !Current_Balance){
    return NextResponse.json({ error: "Please fill all the fields" }, { status: 400 })
  }
  const findUser = await User.findOne({ Email })
  if(findUser){
     return NextResponse.json({ url: '/login' }, { status: 306 }) 
    
  }
  const hash = await bcrypt.hash(Password,10)
  const user = await User.create({ Name, Email, Password:hash,Mobile_Number,Last_Name,City,Country,Current_Balance,Image })
  //return NextResponse.json({ Name:user }, { status: 201 })
  return NextResponse.json({ url: '/login' }, { status: 201 }) 
  
 }catch(error:any){
  return NextResponse.json({ url: '/404' }, { status: 500 }) 
 }


}