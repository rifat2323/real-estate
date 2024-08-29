"use client"
import React,{useEffect,useState} from 'react'
import BigStar from '@/components/comment/BigStar'

import Rating from '@/components/comment/Rating';
import greenlet from 'greenlet'
const getData =greenlet( async (id:string)=>{
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/houses/${id}/api/comment`,{
      method:"GET",
      cache:"no-store"
  }

  )
  return response.json()


  }catch(error){
    console.log(error)
  }
})
type Comment = {
  UserId: {
    Name: string;
    Image: string;
  };
  text: string;
  Rat: number;
  _id: string;
};

type Ra = {
  _id: string;
  ProductId: string;
  Comments: Comment[]; 
  AverageRating: number;
};
const Page = ({ params}:{params: { id: string }}) => {
    //const percentage = Math.min(Math.max(rating, 0), 100); 
    const defaultData: Ra = {
      _id: '',
      ProductId: '',
      Comments: [],
      AverageRating: 0,
    };
    const [data,setData] = useState<Ra>(defaultData)
/*  let data:Ra   */ 
 useEffect(()=>{
  
  const getDt = async ()=>{
   const r = await getData(params.id) 
   /* console.log(r) */
   setData(r)
  }
  getDt()

 },[params.id])
 
  
    const percentage = data?.AverageRating!*20 || 0; 
  return (
    <div className=' bg-[#EEF7FF] dark:bg-[#152233] rounded-md w-full h-fit py-3 flex flex-col justify-center items-center'>
        <h1 className='text-base font-extralight text-slate-800 dark:text-gray-300'>Take a Look what people says</h1>
        <div className=' flex flex-col justify-center items-center py-5'>
            <BigStar percentage={percentage}/>
            <p className=' font-extralight text-2xl text-gray-950 dark:text-zinc-100 '>{ Math.round(data?.AverageRating) || 0}</p>
        </div>
        <div className=' flex flex-col justify-center items-center w-full'>
            <h2 className=' text-xl font-extralight '>Tell Us What You Think</h2>
          <Rating id ={params?.id} Datas={data?.Comments}/>

        </div>
    </div>
  )
}

export default Page