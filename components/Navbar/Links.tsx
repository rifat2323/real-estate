"use client"

import React from 'react'
import Link from 'next/link'
import { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'

interface Link extends LinkProps {
  children: React.ReactNode,
 className?:string | undefined


}


const Links = ({href,children,className,...props }:Link) => {
    const router = useRouter()
    const hadnelClick = async () =>{
      const body = document.body
    
      body.classList.add("animation")
      
      router.push(href as string)
      setTimeout(() => {
        body.classList.remove("animation")
      }, 200);



    }
  return (
    <Link onClick={hadnelClick} href={href} className={className} {...props}>
        {
        children

    }
    </Link>
  )
}

export default Links