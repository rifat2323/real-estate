import React from 'react'
import { TopComponent } from '@/components/Listing/TopComponent'
import Producat from '@/components/Listing/Producat'
import House1 from '@/public/house/house1.png'
import House2 from '@/public/house/house2.png'
import House3 from '@/public/house/house3.png'
import { StaticImageData } from 'next/image'
import connectDB from '@/db/connectDb'
import Property from '@/models/ProParty'

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

}[]

const getData = async ()=>{
  try{
    await connectDB()
    const data = Property.find().sort({createdAt:-1}).limit(30)
    return data

  }catch(err){
    return []
  }
}



const Listing = async ({searchParams}:{searchParams:{[key:string]:string | string[]| undefined}}) => {

   const data:Card = await getData()

  const searchArea = searchParams.ForSales
  console.log(searchArea )

 const DetailsCard:Cards = [
 {
  _id:"85555555151",
  image:House1,
  price:"250,000",
  title:"House 1",
  desc:"this is  fantasia house we build thus house just for you",
  Bed:"4",
  Bath:"2",
  area:"2500"

 },
 {
  _id:"85555555165",
  image:House2,
  price:"250,500",
  title:"House 2",
  desc:"this is  fantasia house we build thus house just for you",
  Bed:"4",
  Bath:"2",
  area:"2500"

 },
 {
  _id:"855945555151",
  image:House3,
  price:"250,660",
  title:"House 3",
  desc:"this is  fantasia house we build thus house just for you",
  Bed:"4",
  Bath:"2",
  area:"2500"

 },


 ]
  return (
    <section className=' mt-5 w-full min-h-screen flex flex-col justify-center relative'>
   <TopComponent/>

   <Producat searchArea ={searchArea} totalResult={30} DetailsCard={data}/>

    </section>
  )
}

export default Listing