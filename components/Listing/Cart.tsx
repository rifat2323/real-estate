"use client"
import React, { useEffect, useState,useContext } from 'react'
import greenlet from 'greenlet'
import { varifyToken } from '@/lib/action'
import { useRouter } from 'next/navigation'
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"


import { contextProvider } from '@/context/Context'
const Cart = ({id}:{id:string}) => {
 
 const router = useRouter()
  const {toast } = useToast()

 const {wishList,userId,statusCode} = useContext(contextProvider)


 const postData = greenlet(async(url:string)=>{
  try{
  const response = await fetch(url,{
    method:"POST",
    headers:{
      "content-type":"application/json"
    }
  })

  if(!response.ok){
    return{
      statusCode:response.status,
      text:null
    }
  }
    const data = await response.json();
    return{
      statusCode:response.status,
      text:data.text
    }
  
  }catch(error){
    console.log(error)
  }
 })








  const [isClick,setIsClick] = useState(false)
  useEffect(()=>{
    const s = wishList?.map((item)=>{
      if(item?._id ===id){
        setIsClick(true)
      }
    })

  },[id, wishList])
    const path = "M4.24,12.25C3.47,11.5 3,10.42 3,9.25C3,6.9 4.9,5 7.25,5C8.83,5 10.21,5.86 10.94,7.14H12.06C12.79,5.86 14.17,5 15.75,5C18.1,5 20,6.9 20,9.25C20,10.42 19.5,11.5 18.76,12.25L11.5,19.5L4.24,12.25M19.46,12.96C20.41,12 21,10.7 21,9.25C21,6.35 18.65,4 15.75,4C14,4 12.45,4.85 11.5,6.17C10.55,4.85 9,4 7.25,4C4.35,4 2,6.35 2,9.25C2,10.7 2.59,12 3.54,12.96L11.5,20.92L19.46,12.96Z"
    const handelClick = async ()=>{
      const token = await varifyToken()
      if(!token){
        router.push('/login')
        return

      }
      let url;
      if(userId){
       url =`${process.env.NEXT_PUBLIC_URL}/wishlist/api?email=${token}&productId=${id}&userId=${userId}`
      }else{
        url =`${process.env.NEXT_PUBLIC_URL}/wishlist/api?email=${token}&productId=${id}`

      }
        setIsClick((prev)=>!prev)
        try{
          const data = await postData(url)
          if(data?.statusCode ===404 ){
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
              action: <ToastAction altText="Try again">Ok</ToastAction>,
              duration:2000
            })

          }else if (data?.statusCode ===201){
            toast({
              title: "Product added to wishlist",
              
              action: <ToastAction altText="Try again">Ok</ToastAction>,
              duration:3000
            })

          }else if(data?.statusCode ===200){
            toast({
              title: "Product remove from  wishlist",
              
              action: <ToastAction altText="Try again">Ok</ToastAction>,
              duration:3000
            })

          }
         

        }catch(error){
          console.log(error)
        }
    } 

    
  return (
    <svg onClick={handelClick}  className=' w-[30px] h-[30px] ' style={{stroke:`#f53b16`,fill: isClick?"#f53b16":"transparent" }}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>heart</title><path d={!isClick? path : "M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}/></svg>
    
    
    
 
    
    
    
  )
}

export default Cart