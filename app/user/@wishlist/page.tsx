"use client"

import React,{useEffect,useState} from 'react'
import Cards from '@/components/newCard/Card'
import   greenlet from 'greenlet'
import {varifyToken} from "@/lib/action";
const obj =
{
  _id: "66b72354c8e1e6e27ed73b5a",
    Title: "My Home",
    Price_Apart: "200000",
    Image: "https://res.cloudinary.com/dvudy4grb/image/upload/v1723278164/next/p3q8xwo41ggquimqq56d.jpg",
    Description: "A lovely apartment in the city center.",
    CountInStock: 30,
    Location: "Dhaka",
    For_Sale: "for_sale",
    Price: "100000_200000",
    Bed_and_Bath: "1_bed_1_bath",
    Listing_Status: "active",
    Type: "apartment",
    Number_Of_Sales: 5,
    Area: 1333,
    Bed: "1",
    Bath: "1",
    discount: 45,
    createdAt: "2024-08-10T08:22:44.752Z",
    updatedAt: "2024-08-10T08:22:44.752Z"

}

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
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/wishlist/api?email=${token}`, { cache: "no-store" });
        if(!response.ok){
          
            setData([])
          return
        }
        const data = await response.json();
        
          setData(data?.wishList)
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
      <h1 className={'text-2xl text-stone-900 dark:text-gray-300 font-semibold'}>Your WishList</h1>
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