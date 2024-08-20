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

}[] | []

const getData = async (search:number,query:{ [k: string]: string | string[] | undefined;},text:string | string[] | undefined)=>{
  const limits = 5;
  const skips = (search - 1) * limits
  let k: { [k: string]: string | string[] | undefined };
  let qu  = query
   if(text){
    k =  {$or:[{Title:{$regex:text, $options:'i'}},{Location:{$regex:text, $options:'i'}},{Description:{$regex:text,$options:"i"}}]} as unknown as { [k: string]: string | string[] | undefined };
    qu = {...qu,...k}
   }
  try{
    await connectDB()
    const data = await Property.find(qu).sort({createdAt:-1}).skip(skips).limit(limits).lean()
  
    const plainData: Card = data.map((item: any) => ({
      _id: item._id.toString(), // Convert ObjectId to string
      Image: item.Image as string, 
      Title: item.Title as string, 
      Description: item.Description as string, 
      Bed: item.Bed as string, 
      Bath: item.Bath as string, 
      Area: item.Area as string, 
      Price_Apart: item.Price_Apart as string, 
      CountInStock: item.CountInStock as number, 
      Rating: item.Rating as number, 
      AgentName: item.AgentName as string, 
      Location: item.Location as string, 
      For_Sale: item.For_Sale as string, 
      Price: item.Price as string, 
      Bed_and_Bath: item.Bed_and_Bath as string, 
      Listing_Status: item.Listing_Status as string, 
      Type: item.Type as string, 
      Number_Of_Sales: item.Number_Of_Sales as number, 
      discount: item.discount as number, 
    }));
    const countDocument = await Property.countDocuments(qu)
    
    const obj = {data:plainData,countDocument}
    return obj

  }catch(err){
    const obj = {data:[],countDocument:1}

    return obj


  }
}



const Listing = async ({searchParams}:{searchParams:{[key:string]:string | string[]| undefined}}) => {

  const searchValue = Array.isArray(searchParams.page) ? searchParams.page[0] : searchParams.page 

  const searchString = typeof searchValue === 'string' ? searchValue : '1';
   
    
  const search = parseInt(searchString) || 1;
  
 const array =  Object.entries(searchParams).filter(([key, value]) => {
    return key !=="page" && key !=="search"
  })

  const aginObj = Object.fromEntries(array)


  const searchArea = searchParams.search
   const obj = await getData(search,aginObj,searchArea)
   const data:Card = obj.data
   const countDocument:number = obj.countDocument

/*   console.log(searchArea ) */

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

   <Producat search= {search} searchArea ={searchArea} totalResult={countDocument} DetailsCard={data} countDocument ={Math.ceil(countDocument/5)}/>

    </section>
  )
}

export default Listing