

import { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
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
import Images from '../CoverImage/Images';

import Lbutton from './Lbutton'
import Link from 'next/link'
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
type Card ={
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
const Producat = ({searchArea,totalResult,DetailsCard,countDocument,search}:{searchArea:string | string[] | undefined,totalResult:number | undefined, DetailsCard:Card,countDocument:number,search:string | number | string[] }) => {



 

  return (
    <div className=' min-h-screen py-2 w-full mt-4 flex  flex-col items-center justify-center'>
        <div className=' w-full flex flex-col justify-start'>
        <h1 className=' font-semibold text-3xl max-md:text-2xl'> List of {searchArea} area property for sells</h1>
        <p className=' font-light  text-base text-slate-500'>Total result: {totalResult}</p>
        </div>
 
       <div className=' w-full flex min-h-screen justify-center items-center gap-4 flex-wrap mt-10'>

      {
         DetailsCard.map(item=>(
         <Card key={item?._id} className=' max-w-[250px] sm:max-w-[350px] h-[350px] lg:h-[350px]'>
             <meta name='description' content={item?.Description}></meta>
             <meta name='DC.title' content={item?.Title}></meta>
             <meta name='keywords' content={item?.Price_Apart}></meta>
             <meta name='topic' content='sales building'></meta>
             <meta name='og:title' content={item?.Title}></meta>
             <meta name='og:type' content={item?.Title}></meta>
             <meta name='og:image' content={item?.Image}></meta>
             <meta name='og:description' content={item?.Description}></meta>
             <title>{item?.Title}</title>
                {/* <Image src={item.image} className='max-sm:h-[150px] max-md:h-[150px]  w-full h-[200px] rounded-sm object-cover' width={400} height={400} alt='property image'
               
                /> */}
              <Link href={`/houses/${item?._id}`}>  <Images url= {item?.Image}/></Link>
            <div className='mt-2'></div>
            <div className=' w-full justify-between items-center flex'>

            <CardTitle className='pl-2 font-bold text-2xl pointer-events-none cursor-none  '>${item?.Price_Apart}</CardTitle>
            <Cart/>
            </div>
          <Link href={`/houses/${item?._id}`}>  <h1 className='pl-2 font-medium text-xl hover:underline '>{item?.Title}</h1></Link>
            <CardDescription className="truncate pl-2 pointer-events-none  cursor-none ">
              
              {item?.Description}
            </CardDescription>
            <hr />
            <CardFooter className=' w-full flex lg:mt-2  justify-center gap-[20px] sm:justify-between  items-center flex-wrap lg:py-2'>
                <div className=' flex justify-center items-center gap-1'>
              <Bed color='#3dcc72' size={25} />
              <p>{item?.Bed} Bed</p>
                </div>
                <div className=' flex justify-center items-center gap-1'>
              <ShowerHead color='#4088e6' size={25}/>
              <p>{item?.Bath} Bath</p>
                </div>
                <div className=' flex justify-center items-center gap-1'>
              <Bed color='#e6652e' size={25}/>
              <p>{item?.Area} Sqft</p>
                </div>


            </CardFooter>


         </Card>


         ))
      }


       </div>

       <Lbutton countDocument={countDocument} search={search}/>
       <div className = " w-full h-fit">
        <FindAgentSection/>
        </div>

    </div>
  )
}

export default Producat