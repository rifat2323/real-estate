"use client"

import React,{useState} from 'react'
import Image from 'next/image'
import { AiFillMessage } from "react-icons/ai";
import { varifyToken } from '@/lib/action';
import {useRouter} from 'next/navigation'
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import Loader from '@/components/Loader'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Comments={
    
       UserId:{
        Name:string,
        Image:string
       },
    
    text:string,
    Rat:number,
    _id:string
  
 }[] 


const Rating = ( {id,Datas}:{id:string,Datas:Comments}) => {
    const router  = useRouter()
    const Rat =[
        {
            image:'/comment/one.png',
            text:'Terrible',
            Number:1
        },
        {
            image:'/comment/two.png',
            text:'Bad',
            Number:2
        },
        {
            image:'/comment/three.png',
            text:'Ok',
            Number:3
        },
        {
            image:'/comment/four.png',
            text:'Good',
            Number:4
        },
        {
            image:'/comment/five.png',
            text:'Cool',
            Number:5
        },
    ]
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 1,
    });
    const { toast } = useToast()





    /* const Comments = [
        {
            UserId:{
                Name:"Rifat",
                Image:`https://robohash.org/Rifat`,


            },
            Text:"lovey House",
            Rat:2
        },
        {
            UserId:{
                Name:"N0ted",
                Image:`https://robohash.org/n0ted`,


            },
            Text:"lovey House",
            Rat:5
        },
        {
            UserId:{
                Name:"Lole",
                Image:`https://robohash.org/Lole`,


            },
            Text:"lovey House",
            Rat:4
        },
    ] */
 const [isClick,setIsClick] = useState<null | number>( null)
 const [RatingNumber,setRatingNumber] = useState<null | number>( null)
 const [Text,setText] = useState( '')
 const [Comments,SetComments] = useState(Datas)
 const [loading,setIsloading] = useState(false)

  const GetImageArray = (rating:number)=>{
      switch (rating){
          case 1:
              const a = Rat.slice(0,1)
              return a
          case 2:
              const b = Rat.slice(0,2)
              return b
          case 3:
              const c = Rat.slice(0,3)
              return c
           case 4:
               const d = Rat.slice(0,4)
              return  d
          case 5:
              const e = Rat.slice(0,5)
              return  e
          default:
              return  []

      }

  }

 const handleClick = (index:number)=>{
    setIsClick(index)
    setRatingNumber(index+1)
 }
 const handelSubmitComment = async (id:string)=>{
    if(loading) return
    const token = await varifyToken()
    setIsloading(true)
    if(!token){
        
        toast({
            title: "You need to login for comment",
            action: <ToastAction altText="Try again">Ok</ToastAction>
           
          })
        router.push('/login')
        setIsloading(false)
        return;
    }
    const data = {email:token,text:Text,Rat:RatingNumber}
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/houses/${id}/api/comment`,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }

        }
        )
        if(response.status === 400){
            toast({
                title: "Please,Rate and comment ",
                action: <ToastAction altText="Try again">Ok</ToastAction>
               
              })
              setIsloading(false)
              return
        }
        if(response.status === 500){
            toast({
                title: "server Error please try again ",
                action: <ToastAction altText="Try again">Ok</ToastAction>
               
              })
              setIsloading(false)
              return
        }

        
        
        const datas = await response.json()
      
        
      
        setIsloading(false)
        toast({
            title: "Comment has been added ",
            action: <ToastAction altText="Try again">Ok</ToastAction>
           
          })
    }catch(error){
        console.log(error)
        setIsloading(false)
    }
 }
  return (
    <div  className=' flex flex-col justify-center items-center w-full'>

    <div  className='  flex items-center justify-center gap-4 md:gap-10 mt-8 '>
        {
            Rat.map((item,index)=>(
                <div  onClick={() => handleClick(index)} style={{ display: isClick === null || isClick === index ? 'flex' : 'none', transition:"all 500ms", scale: isClick === index ? 1.6 : 1  }} className=' cursor-pointer flex flex-col justify-center items-center' key={index}>

                <Image src={item.image} quality={100} width={1000} height={1000} className=' hover:scale-110  hover:shadow-yellow rounded-full size-[30px] md:size-[50px] ring-1 ring-yellow-400 ring-offset-1 transition-all' alt='lol'/>
                 <p className='text-base md:text-xl font-extralight'>{item.text}</p>
                </div>

))
}
        

           </div>

           <div className=' mt-7 w-full flex flex-col justify-start items-start'>
            <h1 className=' text-left font-semibold text-xl w-full  ml-0 md:ml-6  '>Express Your Opinion</h1>
            <div className=' w-[96%] flex border mt-4   justify-center items-center ml-0 md:ml-6  bg-gray-50 border-gray-300 dark:bg-gray-700 dark:border-gray-600 rounded-lg   '>
                <AiFillMessage size={29} className='ml-4 max-sm:hidden'/>
            <input  value={Text} onChange={(e)=>setText(e.target.value)} type="text"  className=" flex-1 text-gray-900 text-sm  block   p-3  dark:bg-gray-700 rounded-lg focus:outline-none  focus:border-none dark:text-white " placeholder="What you think"/>
            </div>
            <button ref={ref} onClick={()=>handelSubmitComment(id)} type="button" className=" w-[200px] mt-4 ml-0 md:ml-6 text-gray-200 flex justify-center items-center bg-black border border-gray-300 focus:outline-none hover:bg-gray-950 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">{ loading ? <Loader/>:"Submit"}</button>
               
           </div>


   <motion.div     initial={{ opacity: 0, scale: 0.1 }}
               animate={inView ? { opacity: 1,scale: 1 } : {}}
               transition={{ duration: 0.5 }}    className={`w-full h-fit py-3  px-2.5 flex flex-col gap-4 justify-center items-center`}>
       <p    className={'text-xl font-medium mb-5'}>Some of comments </p>

       {
           Comments?.map((item,index)=> {
               const Items = GetImageArray(item?.Rat)


           return(
               <div   key={index} className={'shadow-2xl rounded-lg border border-gray-400 bg-white dark:bg-gray-900 w-full h-fit py-4 px-1 flex justify-center items-center gap-3'}>
                   <Image src={item?.UserId?.Image} width={700} height={700} className={'rounded-[50%] w-[100px] h-[100px]'} alt={'user Image'}/>
                   <div className={'flex flex-col justify-start items-start flex-1'}>
                       <p className={'text-xl font-semibold '}>{item?.UserId?.Name}</p>
                       <div className=' cursor-pointer flex  justify-center items-center gap-2.5' key={index}>
                           {
                               Items.map((item, index) => (


                                   <Image key={index} src={item?.image} quality={100} width={1000} height={1000}
                                          className=' hover:scale-110  hover:shadow-yellow rounded-full size-[15px] md:size-[20px] ring-1 ring-yellow-400 ring-offset-1 transition-all'
                                          alt='lol'/>


                               ))
                           }
                       </div>
                           <p className={'text-base font-light '}>{item?.text}</p>


                       </div>
                   </div>
                   )
                   })
       }

   </motion.div>


    </div>
  )
}

export default Rating