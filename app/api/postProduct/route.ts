import { NextRequest, NextResponse } from "next/server";

import Property from "@/models/ProParty";
import connectDB from "@/db/connectDb";

import { unlink } from "fs/promises";



import path from 'path';
import { writeFile } from "fs/promises";

import {v2 as cloudinary} from 'cloudinary';


cloudinary.config({
    secure:true,
    cloud_name:process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key:process.env.NEXT_PUBLIC_api_key,
    api_secret:process.env.CLOUDINARY_API_SECRET

})

type PropertyType = {
    Title: string;
    Price_Apart: string;
    Image: string;
    Description: string;
    CountInStock: number;
    Location: string;
    For_Sale: string;
    Price: string;
    Bed_and_Bath: string;
    Listing_Status: string;
    Type: string;
    Number_Of_Sales: number;
    Area: number;
    Bed: string;
    Bath: string;
  };
 

export async function POST(request: NextRequest) {
    await connectDB()
   
    const data = await request.formData()
    const file:File | null = data.get("Image") as unknown as File 
    const Title = data.get("Title") as string
    const Price_Apart = data.get("Price_Apart") as string
    const Description = data.get("Description") as string;
    const CountInStock = parseInt(data.get("CountInStock") as string, 10);
    const Location = data.get("Location") as string;
    const For_Sale = data.get("For_Sale") as string;
    const Price = data.get("Price") as string;
    const Bed_and_Bath = data.get("Bed_and_Bath") as string;
    const Listing_Status = data.get("Listing_Status") as string;
    const Type = data.get("Type") as string;
    const Number_Of_Sales = parseInt(data.get("Number_Of_Sales") as string, 10);
    const Area = parseInt(data.get("Area") as string, 10);
    const Bed = data.get("Bed") as string;
    const Bath = data.get("Bath") as string;
    const discount = data.get("discount") as unknown as number || 1;
  

    if (!file) {
        return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }
   const arres = await file.arrayBuffer()

   const fileExtension = path.extname(file.name);
   
    const fileName =  file.name.replaceAll(" ", "_");
      const buffer = Buffer.from(arres)

   
    
    
   
    try{
        const uint8Array = new Uint8Array(buffer)
     
        await writeFile(
            path.join(process.cwd(),"public/upload/",fileName),
            uint8Array
        )
      
      
       
       const result = await cloudinary.uploader.upload(`public/upload/${fileName}`,{
        folder:"next",
        unique_filename:true
       })
    
     const newProparty = await Property.create({
        Title,Price_Apart,Image:result.secure_url,Description,CountInStock,Location,For_Sale,
        Price,Bed_and_Bath,Listing_Status,Type,Number_Of_Sales,Area,Bed,Bath,discount
    })
    unlink(`public/upload/${fileName}`)
    if(!newProparty){
        

        return NextResponse.json({Error:"failed to create property"},{status:404})
    }
    
    return NextResponse.json({success:newProparty},{status:200})

    }catch(error){
        return NextResponse.json({Error:`server error:${error}`},{status:500})
    }

}