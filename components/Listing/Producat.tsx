

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
import CommonCard from '../CommonCard/Common';
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
 
       <div className='parentHover w-full flex min-h-screen justify-center items-center gap-8 flex-wrap mt-10'>

      {
         DetailsCard.map(item=>(
         <CommonCard item={item} key={item?._id}/>


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