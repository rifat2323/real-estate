"use client"

import React,{useState} from 'react'
import Image, { StaticImageData } from 'next/image'

const SmoothImage = ({url}:{url:string | StaticImageData }) => {
    const [isLoad,setIsLoad] = useState(false)
    const handelLoad = (e:React.SyntheticEvent<HTMLImageElement, Event>)=>{
         

             setIsLoad(true)
       

    }
  return (
    <div style={{backgroundImage:"url(/pixel.jpg)",backgroundSize:"cover", backgroundPosition:"center"}} className='w-full rounded-lg rounded-b-none   h-3/5'>
       <Image onLoad={handelLoad} className={` w-full h-full  rounded-lg  transition-all ${isLoad ? " opacity-100":"opacity-0"}`} alt='cover image' width={700} height={700} src={url}/>
    </div>
  )
}

export default SmoothImage