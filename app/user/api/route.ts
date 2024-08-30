import { NextResponse } from 'next/server'
import User from  '@/models/User'
import connectDB from "@/db/connectDb";

export const GET = async (request:Request)=>{
    await connectDB()

    //console.log(`sP: ${request.url}`)
    const {searchParams } = new URL(request.url)

     const email = searchParams.get("email")
    if(!email){
        return NextResponse.json({error: "no email found"},{status:404})
    }



    try{
        const user = await User.findOne({Email:email})
        if(!user){
            return NextResponse.json({error: "no use found"},{status:404})

        }
        return NextResponse.json(user)

    }catch (error) {
        console.log(error)
        return NextResponse.json({error: error},{status:500})
    }
}
