import { NextResponse } from 'next/server'
import Buy from  '@/models/Buy'

import  mongoose  from 'mongoose';
type data ={
    userMail:string,
       
       
       propertyId:mongoose.Schema.Types.ObjectId,
         
       
       tnxId:string,
       total:number,
       status:string
    }[] | []

export const GET = async (request:Request)=>{

    //console.log(`sP: ${request.url}`)
    const {searchParams } = new URL(request.url)

     const email = searchParams.get("email")
    if(!email){
        return NextResponse.json({error: "no email found"},{status:404})
    }



    try{
        const history:data = await Buy.find({userMail:email}).populate('propertyId')
        if(!history){
            return NextResponse.json({error: "no "},{status:404})

        }
        const properties = history.map(item => item.propertyId);
        return NextResponse.json(properties)

    }catch (error) {
        console.log(error)
        return NextResponse.json({error: error},{status:500})
    }
}
