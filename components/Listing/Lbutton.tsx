"use client"
import React from 'react'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
const Lbutton = ({countDocument,search }:{countDocument:number,search:string | number | string[] }) => {
    const newNum =  search as number + 1
    let s = search as number
    const router = useRouter()
    const hadnelSearch = (page:string)=>{
        const param = new URLSearchParams(window.location.search);
        param.set('page',page)
        router.push(`${window.location.pathname}?${param}`)
      }
  return (
    <Button onClick={()=>hadnelSearch(newNum.toString())} className={`mt-4 ${countDocument <= s && "hidden" }`}>
        Show More
        </Button>
  )
}

export default Lbutton