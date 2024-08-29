import Images from '@/components/CoverImage/Images';
import Cart from '@/components/Listing/Cart';
import { Card, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { Data } from '@/lib/GetData';
import { Bed, ShowerHead } from 'lucide-react';
import React from 'react'
import CommonCard from '@/components/CommonCard/Common'
type Datas = {
  _id:string,
  Image: string,
  Title:string,
  Description:string,
  Bed:string,
  Bath:string,
  Area:string,
  Price_Apart:string
  CountInStock:number,
  Rating:number,
  AgentName:string,
  Location:string,
  For_Sale:string,
  Price:string,
  Bed_and_Bath:string,
  Listing_Status:string,
  Type:string,
  Number_Of_Sales:number,
  discount:number
    
}[] | []


const page = async ({params}:{params:{name:string}}) => {
  let data:Datas;

    let Title;
    if(params.name === "discount"){
      data= await Data('/deals/api/discount')
        Title = " All Discount Offer upto 40% Off"
    }else if(params.name === "HotDeals"){
          Title = "Here Are Some Hot Deals"
          data=  await Data('/deals/api/hotDeals')
    }

  return (
    <div className='w-full flex flex-col h-fit py-10 justify-center items-center '>
      <h1 className=' text-4xl font-bold md:text-5xl lg:text-6xl mb-7 capitalize'>{Title}</h1>
      <div className=' w-full flex flex-wrap justify-center items-center gap-2'>
    {
     data!.map(item=>(
      <CommonCard item={item} key={item?._id}/>


     ))
  }

    </div>
    </div>
  )
}

export default page