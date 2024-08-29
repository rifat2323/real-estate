"use client"
import React,{useState,useEffect,useCallback} from 'react'
import { contextProvider } from './Context'
import greenlet from 'greenlet';
import { varifyToken } from '@/lib/action'
const ContextParent = ({children}:{children:React.ReactNode}) => {
    const [wishList,setWishlist] = useState< any[] | [string] | null>(null);
    const [userId,setUserId] = useState< string | null>(null);
    const [statusCode,setStatusCode] = useState< number | null | undefined>(null);

    const getData =useCallback( async () => {
       const token = await varifyToken()
       if(!token) {
        return
       }
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/wishlist/api?email=${token}`, { cache: "no-store" });
         
          if (!response.ok) {
            return {
              userId: null,
              wishList: null,
              statusCode: response.status,
            };
          }
          const data = await response.json();
             console.log(data.wishList)
          return {
            userId: data.userId,
            wishList: data.wishList,
            statusCode: response.status,
          };
        
        } catch (error) {
          console.log(error);
          return null;
        }
      },[])

      useEffect(()=>{
        const dataFetch = async ()=>{
            try{
                const data = await getData()
                setWishlist(data?.wishList)
                setUserId(data?.userId)
                setStatusCode(data?.statusCode)

            }catch(error){
                console.log(error)
            }
        }
        dataFetch()
      },[getData])


  return (
    <contextProvider.Provider value={{wishList,userId,statusCode}}>
        {children}
    </contextProvider.Provider>
  )
}

export default ContextParent