"use client"
import React,{useEffect,useState} from 'react'
import Cards from '@/components/newCard/Card'
import   greenlet from 'greenlet'
import {varifyToken} from "@/lib/action";
type Item = {
  Image: string;
  Title: string;
  _id: string;
};

type ResponseData = {
  wishList: Item[] | [];
};
const Page = () => {
  const [data,setData] = useState<ResponseData["wishList"]>([])
  
  useEffect(() => {
    const getData = async () =>{
      const token = await varifyToken()
      if(!token) {
        
          setData([])
        return
      }
      try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/user/api/history?email=${token}`, { cache: "no-store" });
        if(!response.ok){
          
            setData([])
          return
        }
        const data = await response.json();
         
          setData(data)
          return
        
  
  
      }catch (e:any) {
        console.log(e)
        setData([])
        return {
          wishList: [],
        }
  
      }
    }
    getData()
  }, []);

  return (
    <div className={'w-full flex flex-col justify-center items-center  h-fit'}>
      <h1 className={'text-2xl text-stone-900 dark:text-gray-300 font-semibold'}>Your Purches History</h1>
     <div className={'flex w-full h-fit py-4  justify-center items-center gap-2.5'}>
       {
        data.length >0 ?(
          data?.map(item=>(
            <Cards obj={item} key={item._id}/>

          ))
        
        )
        :(
          <h1 className={'text-base text-stone-900 dark:text-gray-300 font-light'}>Nothing yet</h1>
        )
      
       }

     </div>



    </div>
  )
}

export default Page