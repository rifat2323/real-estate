import { StaticImageData } from 'next/image'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from 'next/image'
import { ShowerHead } from 'lucide-react';
import { Bed } from 'lucide-react';
import { PencilRuler } from 'lucide-react';
import Cart from './Cart';
import { Button } from '../ui/button';
import FindAgentSection from '../Agent';
type Cards ={
    _id:string,
    image: StaticImageData | string,
    title:string,
    desc:string,
    Bed:string,
    Bath:string,
    area:string,
    price:string
}[]
const Producat = ({searchArea,totalResult,DetailsCard}:{searchArea:string | string[] | undefined,totalResult:number | undefined, DetailsCard:Cards }) => {
  return (
    <div className=' min-h-screen w-full mt-4 flex  flex-col items-center justify-center'>
        <div className=' w-full flex flex-col justify-start'>
        <h1 className=' font-semibold text-3xl max-md:text-2xl'> List of {searchArea} area property for sells</h1>
        <p className=' font-light  text-base text-slate-500'>Total result: {totalResult}</p>
        </div>
 
       <div className=' w-full flex min-h-screen justify-center items-center gap-4 flex-wrap mt-14'>

      {
         DetailsCard.map(item=>(
         <Card key={item._id} className=' max-w-[250px] sm:max-w-[350px] h-[350px] lg:h-[350px]'>
           
                <Image src={item.image} className='max-sm:h-[150px] max-md:h-[150px]  w-full h-[200px] rounded-sm object-cover' width={400} height={400} alt='property image'
               
                />
            <div className='mt-2'></div>
            <div className=' w-full justify-between items-center flex'>

            <CardTitle className='pl-2 font-bold text-2xl '>${item.price}</CardTitle>
            <Cart/>
            </div>
            <h1 className='pl-2 font-medium text-xl '>{item.title}</h1>
            <CardDescription className="truncate pl-2 ">
              
              {item.desc}
            </CardDescription>
            <hr />
            <CardFooter className=' flex justify-center gap-8 sm:gap-0 sm:justify-between  items-center flex-wrap lg:py-2'>
                <div className=' flex justify-center items-center gap-1'>
              <Bed color='#3dcc72' size={25} />
              <p>{item.Bed} Bed</p>
                </div>
                <div className=' flex justify-center items-center gap-1'>
              <ShowerHead color='#4088e6' size={25}/>
              <p>{item.Bath} Bath</p>
                </div>
                <div className=' flex justify-center items-center gap-1'>
              <Bed color='#e6652e' size={25}/>
              <p>{item.area} Sqft</p>
                </div>


            </CardFooter>


         </Card>


         ))
      }


       </div>

       <Button className="mt-8">
        Show all
        </Button>
       <div className = " w-full h-[100dvh]">
        <FindAgentSection/>
        </div>

    </div>
  )
}

export default Producat