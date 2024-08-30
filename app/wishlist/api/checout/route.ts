import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIP_KEY!);
import { NextResponse } from 'next/server';
import Property from '@/models/ProParty';
import { v4 as uuidv4 } from 'uuid';
import Buy from '@/models/Buy';
import connectDB from '@/db/connectDb';
export const GET = async (request:Request)=>{
     await connectDB()

    const param = new URL( request.url );
    const {searchParams} = param
     const email = searchParams.get("email")
     
    if(!email){
        return NextResponse.json({error: "no email found"},{status:404})
    }
    const id = searchParams.get("id")
    if(!id){
        return NextResponse.json({error: "no id found"},{status:404})
    }
    try{
      const findProparty = await Property.findOne({_id:id})
      if(!findProparty){
        return NextResponse.json({error: "no proparty found"},{status:404})
      }
      const afterPRice = parseInt(findProparty?.Price_Apart)  - (parseInt(findProparty?.Price_Apart) * (findProparty?.discount/100) || 0)
       const tnx = uuidv4()
        const newBuy = await Buy.create({propertyId:id,tnxId:tnx,total:afterPRice,userMail:email})
        const session  = await stripe.checkout.sessions.create({

             success_url:`${process.env.NEXT_PUBLIC_URL}/success/${tnx}`,
             cancel_url:`${process.env.NEXT_PUBLIC_URL}/failed/${tnx}`,
             mode:'payment',
             metadata:{
                userId:id
             },
             
            line_items:[
                {
                    
                quantity:1,
                  price_data:{
                    
                    
                    currency: 'usd',
                    unit_amount:afterPRice*100,
                    product_data: {
                        images :[findProparty?.Image], 
                        name: findProparty?.Title,
                    }
                    
                  }
                }
                
            ]
        })


        return NextResponse.json({url:session.url})


    }catch(error){
        console.log(error)
        return NextResponse.json({error: error},{status:500})
    }
}
