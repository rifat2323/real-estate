import Buy from "@/models/Buy";
import { NextResponse } from "next/server";


export async function GET(_request:Request,{params}:{params:{id:string}}){ 
  if(!params.id){
    return NextResponse.json({error:"no id found"},{status:404})
  }

    try{
        const findBuy = await Buy.findOneAndUpdate({tnxId:params.id},{status:"success"},{new:true})
        if(!findBuy){
            return NextResponse.json({error:"no id found"},{status:404})
        }
        return NextResponse.json(findBuy)

    }catch(error){
        console.log(error)
        return NextResponse.json({error:"no id found"},{status:404})

    }
}