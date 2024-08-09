"use client"

import React, { useState } from 'react'
import { Input } from '../ui/input'
import DropDown from './DropDown'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation';
interface SelectedOptions {
    [key: string]: string;
  }

export const TopComponent = () => {
    const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});
    const [search,setSearch] = useState('')
   
    const router = useRouter()
    const handelChnage = (name:string,value:string) => {
        setSelectedOptions(prevOptions => ({
          ...prevOptions,
          [name]: value
        }));
      }

    const handelSubmit =()=>{
        const param = new URLSearchParams();

       Object.keys(selectedOptions).forEach(key => {
      param.set(key, selectedOptions[key]);
       });
       if(search.length > 2){
        param.set('search',search)
       }else{
        param.delete('search')

       }
         
        router.push(`${window.location.pathname}?${param}`)
      }
      
  return (
    <div className=' h-fit w-full sm:max-h-screen  flex justify-center items-center flex-col'>
        <h1 className=' font-bold text-6xl max-md:text-4xl font-serif  capitalize'>Search property for Buy</h1>
         <p className=' font-light text-normal uppercase text-zinc-400 dark:text-slate-300 mt-4'>You can also narrow your search by using the filters</p>
        <div className=' w-full justify-start gap-4 md:gap-0 md:w-[95%] lg:w-[85%] shadow-md dark:shadow-dark1 rounded-md bg-white dark:bg-[#070717] px-3 py-4 flex items-center md:justify-between flex-wrap  relative'>
            <div className=' flex items-center justify-center max-w-full min-w-[100px] '>
                <Input  onChange={(e)=>setSearch(e.target.value)} value={search} placeholder='location '/>
              
                
            </div>
            <DropDown handelChnage = {handelChnage}/>
            <Button className=" dark:bg-yellow-500 dark:text-zinc-200 " onClick={handelSubmit} > 
        Search
     </Button>
            
          </div>

      {/* this place for map */}
    </div>
  )
}
