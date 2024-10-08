import React from 'react';
import AgentCard from '../../../components/agents/Agents';

import { Card, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import Cart from '@/components/Listing/Cart';
import { Bed, ShowerHead } from 'lucide-react';
import Image from 'next/image';
import House1 from '@/public/house/house1.png'
import House2 from '@/public/house/house2.png'
import House3 from '@/public/house/house3.png'
import connectDB from '@/db/connectDb';
import Property from '@/models/ProParty';
import Images from '@/components/CoverImage/Images';
const agents = [
  {
    name: 'John Doe',
    picture: 'https://images.pexels.com/photos/6116891/pexels-photo-6116891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
    title: 'Senior Real Estate Agent',
    specialization: 'Downtown Manhattan',
    activeListings: 12,
    soldProperties: 45,
    phone: '123-456-7890',
    email: 'john.doe@example.com',
  },
  {
    name: 'Jane Smith',
    picture: 'https://images.pexels.com/photos/6116891/pexels-photo-6116891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Real Estate Broker',
    specialization: 'Brooklyn & Queens',
    activeListings: 8,
    soldProperties: 20,
    phone: '098-765-4321',
    email: 'jane.smith@example.com',
  },
  {
    name: 'Jane Smith',
    picture: 'https://images.pexels.com/photos/6116891/pexels-photo-6116891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Real Estate Broker',
    specialization: 'Brooklyn & Queens',
    activeListings: 8,
    soldProperties: 20,
    phone: '098-765-4321',
    email: 'jane.smith@example.com',
  },
  {
    name: 'Jane Smith',
    picture: 'https://images.pexels.com/photos/6116891/pexels-photo-6116891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Real Estate Broker',
    specialization: 'Brooklyn & Queens',
    activeListings: 8,
    soldProperties: 20,
    phone: '098-765-4321',
    email: 'jane.smith@example.com',
  },
  {
    name: 'Jane Smith',
    picture: 'https://images.pexels.com/photos/6116891/pexels-photo-6116891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Real Estate Broker',
    specialization: 'Brooklyn & Queens',
    activeListings: 8,
    soldProperties: 20,
    phone: '098-765-4321',
    email: 'jane.smith@example.com',
  },
  {
    name: 'Jane Smith',
    picture: 'https://images.pexels.com/photos/6116891/pexels-photo-6116891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Real Estate Broker',
    specialization: 'Brooklyn & Queens',
    activeListings: 8,
    soldProperties: 20,
    phone: '098-765-4321',
    email: 'jane.smith@example.com',
  },
  // Add more agent objects as needed
];
import CommonCard from '@/components/CommonCard/Common'
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
const DBCheck = async ():Promise<Card> => {
  try{
 
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/agent/api`,{cache:"no-store"})
    if(!response.ok){
      return []
    }
     const data =  response.json()
     return data

  }catch(error){
    console.log(error)
    return []
  }

}

const AgentList = async () => {
  const l:Card = await DBCheck()
 
  const DetailsCard = [
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
   
    }
  ]
   //? have to do like if click on agent it will show the details of that agent like how many properties he has sold and how many listings he has
  return (
    <div className="container mx-0 px-4 py-8 ">
      <h1 className="text-3xl md:text-5xl dark:text-slate-300 lg:text-6xl font-bold text-center text-gray-800 mb-8">Meet Our Agents</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {agents.map((agent, index) => (
          <AgentCard key={index} agent={agent} />
        ))}
      </div>
      <div className=' w-full h-fit py-7 flex flex-col justify-center items-center '>
        <h1 className=' text-3xl md:text-4xl lg:text-6xl font-bold my-8'>Best sales This Month</h1>
        <div className=' w-full flex flex-wrap justify-center items-center gap-2'>
        {
         l.map(item=>(
          <CommonCard item={item} key={item._id}/>


         ))
      }

        </div>
      </div>
    </div>
  );
};

export default AgentList;
