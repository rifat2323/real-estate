"use client"

import React,{useState} from 'react'
import Image, { StaticImageData } from 'next/image'

const Images = ({url}:{url:string | StaticImageData }) => {
    const [isLoad,setIsLoad] = useState(false)
    const handelLoad = (e:React.SyntheticEvent<HTMLImageElement, Event>)=>{
         

             setIsLoad(true)
       

    }
  return (
    <div style={{backgroundImage:"url(/pixel.jpg)",backgroundSize:"cover", backgroundPosition:"center"}} className='h-1/5 md:h-1/4  rounded-sm object-cover'>
       <Image onLoad={handelLoad} className={` w-full h-full  rounded-sm rounded-b-none object-cover transition-all ${isLoad ? " opacity-100":"opacity-0"}`} alt='cover image' width={700} height={700} src={url}/>
    </div>
  )
}

export default Images