import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { FaStar } from 'react-icons/fa'

interface prop{
    image:StaticImageData | string,
    title:string,
    des:string,
    star:number,
    index:number | string
}
const Cards = ({index,image,title,des,star}:prop) => {
  return (
    <div key={index} className=" shadow-light1 dark:shadow-dark1 h-[350px] w-[370px] flex flex-col rounded-lg border-stone-300  dark:border-stone-800 border justify-between items-center  ">
    <div className=" w-full rounded-lg  h-3/5 ">
    <Image src={image} width={500} height={500} quality={80} alt="house picture" className=" w-full h-full  rounded-lg"/>

    </div>
   <div className=" mb-4 pl-2 flex flex-col justify-center items-start">
    <h3  className=" text-xl font-semibold mb-2" >{title}</h3>
    <p className=" max-sm:text-sm text-base  font-light mb-2" >{des}</p>
    <div className=" mb-6 flex justify-center items-center my-2 gap-1">
      {
        Array.from({length:5}).map((_item,index)=>(
         <FaStar key={index} size={21} color={star>=index+1?"yellow":"gray"}/>


        ))
      }

    </div>

   </div>


   </div>
  )
}

export default Cards