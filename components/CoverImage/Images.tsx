"use client"

import React,{useState} from 'react'
import Image, { StaticImageData } from 'next/image'

const Images = ({url}:{url:string | StaticImageData }) => {
    const [isLoad,setIsLoad] = useState(false)
    const handelLoad = (e:React.SyntheticEvent<HTMLImageElement, Event>)=>{
         

             setIsLoad(true)
       

    }
  return (
    <div style={{backgroundImage:"url(/pixel.jpg)",backgroundSize:"cover", backgroundPosition:"center"}} className='max-sm:h-[150px] max-md:h-[150px]  w-full h-[200px] rounded-sm object-cover'>
       <Image onLoad={handelLoad} className={` w-full h-full  rounded-sm object-cover transition-all ${isLoad ? " opacity-100":"opacity-0"}`} alt='cover image' width={700} height={700} src={url}/>
    </div>
  )
}

export default Images