import WishList from "@/models/WishList";
import { NextResponse } from "next/server";
import User from "@/models/User";

export const GET = async (request:Request)=>{

    const param = new URL( request.url);
    const {searchParams} = param
     const email = searchParams.get("email")
    if(!email){
        return NextResponse.json({error: "no email found"},{status:404})
    }

    try{
        const user = await User.findOne({Email:email})
        if(!user){
            return NextResponse.json({error: "no user found"},{status:404})
        }
        const wishList = await WishList.findOne({userId:user._id}).populate('ProductId')
        if(!wishList){
            return NextResponse.json({error: "no wishList found"},{status:404})
        }

        return NextResponse.json({userId:user._id,wishList:wishList.ProductId})

        
    }catch(error){
        console.log(error)
        return NextResponse.json({error: error},{status:500})
    }
}

export const POST = async (request:Request)=>{
    const param = new URL( request.url);
    const {searchParams} = param
     const email = searchParams.get("email")
    if(!email){
        return NextResponse.json({error: "no email found"},{status:404})

    }
    const productId = searchParams.get("productId")
    let userId;
    if(searchParams.get("userId")){
        userId = searchParams.get("userId")
    }else{
        const user = await User.findOne({Email:email})
        if(!user){
            return NextResponse.json({error: "user not found"},{status:404})
        }
        userId = user._id
    }
  
    try{
        const findList = await WishList.findOne({userId})
        if(!findList){
            const wishList = await WishList.create({userId,ProductId:[productId]})
            return NextResponse.json({text:"added successfully"},{status:201})
        }else{
            if(findList.ProductId.includes(productId)){
             const filterWishList = await WishList.findOneAndUpdate({userId},{$pull:{ProductId:productId}},{new:true})
             return NextResponse.json({text:"remove successfully"},{status:200})
            }else{
                const filterWishList = await WishList.findOneAndUpdate({userId},{$push:{ProductId:productId}},{new:true})
                return NextResponse.json({text:"added successfully"},{status:201})
            }
        }


    }catch(error){
        console.log(error)
        return NextResponse.json({error: error},{status:500})
    }
}