import Images from '@/components/CoverImage/Images';
import Cart from '@/components/Listing/Cart';
import { Card, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { Data } from '@/lib/GetData';
import { Bed, ShowerHead } from 'lucide-react';
import React from 'react'

type Datas = {
  _id: string,
    Title: string,
    Price_Apart: string,
    Image: string,
    Description: string,
    CountInStock: number,
    Location: string,
    For_Sale: string,
    Price: string,
    Bed_and_Bath: string,
    Listing_Status: string,
    Type: string,
    Number_Of_Sales: number,
    Area: number,
    Bed: string,
    Bath: string,
    discount: number,
    createdAt: string,
    updatedAt: string,
    
}[]


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
     <Card key={item?._id} className=' max-w-[250px] sm:max-w-[350px] h-[350px] lg:h-[350px]'>
       
      {/*  <Image src={item.image} className=' max-sm:h-[150px] max-md:h-[150px]  w-full h-[200px] rounded-sm object-cover' width={400} height={400} alt='property image'
          
            /> */}
            <Images url={item?.Image}/>
        <div className='mt-2'></div>
        <div className=' w-full justify-between items-center flex'>

        <CardTitle className='pl-2 font-bold text-2xl '>${item?.Price_Apart}</CardTitle>
        <Cart/>
        </div>
        <h1 className='pl-2 font-medium text-xl '>{item?.Title}</h1>
        <CardDescription className="truncate pl-2 ">
          
          {item?.Description}
        </CardDescription>
        <hr />
        <CardFooter className=' flex justify-center gap-8 lg:gap-2 sm:gap-0 sm:justify-between  items-center flex-wrap lg:py-2'>
            <div className=' flex justify-center items-center '>
          <Bed color='#3dcc72' size={25} />
          <p>{item?.Bed} Bed</p>
            </div>
            <div className=' flex justify-center items-center '>
          <ShowerHead color='#4088e6' size={25}/>
          <p>{item?.Bath} Bath</p>
            </div>
            <div className=' flex justify-center items-center '>
          <Bed color='#e6652e' size={25}/>
          <p>{item?.Area} Sqft</p>
            </div>


        </CardFooter>


     </Card>


     ))
  }

    </div>
    </div>
  )
}

export default page