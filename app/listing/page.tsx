import React from 'react'
import { TopComponent } from '@/components/Listing/TopComponent'
import Producat from '@/components/Listing/Producat'
import House1 from '@/public/house/house1.png'
import House2 from '@/public/house/house2.png'
import House3 from '@/public/house/house3.png'
import { StaticImageData } from 'next/image'

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

const Listing = ({searchParams}:{searchParams:{[key:string]:string | string[]| undefined}}) => {

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

   <Producat searchArea ={searchArea} totalResult={30} DetailsCard={DetailsCard}/>

    </section>
  )
}

export default Listing