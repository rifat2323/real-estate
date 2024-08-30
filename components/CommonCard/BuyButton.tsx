"use client"
import React,{useState} from 'react'

import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';
import Loader from '../Loader';
import { varifyToken } from '@/lib/action';
const BuyButton = ({className,id}:{className:string,id:string}) => {
  const router = useRouter()
  const { toast } = useToast()
  const [loading ,setLoading] = useState(false)
  const handelCheckout = async (id:string)=>{
     if(loading) return

    setLoading(true)
    const token = await varifyToken()
    if(!token){
      toast({
        title:"You need to login",
        duration:5000
      })
      setLoading(false)
      return;
    }
    try{
     const response  = await fetch(`${process.env.NEXT_PUBLIC_URL}/wishlist/api/checout?email=${token}&id=${id}`)
     if(!response.ok){
      toast({
        title:"Not a valid request or server error",
        duration:5000
      })
      setLoading(false)
      return "error maybe"
    
     
     }
     const data = await response.json()
     router.push(data.url)
     console.log(data)
     setLoading(false)
    }catch(error){
      console.log(error)
      toast({
        title:"server Error",
        duration:5000
      })
      setLoading(false)

    }
    return;
  }
  return (
    <button onClick={()=>handelCheckout(id)} className={className}>
     
      {loading ? "loading...":"Book Now"}
    </button>
  )
}

export default BuyButton