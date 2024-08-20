import connectDB from "@/db/connectDb"
import Property from "@/models/ProParty"
import { NextResponse } from "next/server"


export const GET =  async (request:Request, {params}:{params:{id:string}})=>{
   await connectDB()
    console.log(params.id)
    try{
       const findHouse = await Property.findOne({_id:params.id})
       if(!findHouse){
       /*  const url = new URL('/listing', request.url); */
        return NextResponse.json({ url: '/listing' }, { status: 404 });
       }
        return NextResponse.json(findHouse)

    }catch(error){
     /*    const url = new URL('/', request.url); */
        return NextResponse.json({ url: '/' }, { status: 500 })
        
    }

}