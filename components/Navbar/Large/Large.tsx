"use client"

import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";

import { usePathname } from 'next/navigation';
import { Input } from '@/components/ui/input';
import Links from '../Links';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Large = () => {
  const [isSearchClick, setIsSearchClick] = useState(false)
  const [search, setSearch] = useState('')
    const pathname = usePathname()
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
  return (
    <motion.div ref={ref}   initial={{ opacity: 0, y: -20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className=' max-md:hidden z-20 relative flex justify-center items-center gap-6 px-3 py-2 rounded-xl bg-white/[0.6] dark:bg-darks-background/[0.4]'>
        <Links href={'/about'} className={`font-normal ${pathname === '/about' && 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white'} text-md px-2 py-2 rounded-lg`}>About us</Links>
        <Links href={'/project'}  className={`font-normal ${pathname === '/project' && 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white'} text-md px-2 py-2 rounded-lg`}>Listing</Links>
        <Links href={'/agent'}  className={`font-normal text-md ${pathname === '/agent' && 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white'} px-2 py-2 rounded-lg`}>Agents</Links>

        <Links href={'/service'}  className={`font-normal  ${pathname === '/service' && 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white'} text-md px-2 py-2 rounded-lg`}>Service</Links>


        <Links href={'/listing'}  className={`font-normal  ${pathname === '/listing' && 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white'} text-md px-2 py-2 rounded-lg`}>Project</Links>
        <FiSearch onClick={()=>setIsSearchClick((prev)=>!prev)} size={25} color='#232323'  style={{color:"#232323", cursor:"pointer"}}/>
    <Input onChange={(e)=>setSearch(e.target.value)} value={search}  placeholder='search anything' className={` ${isSearchClick && ' opacity-0 -translate-y-[10vh] pointer-events-none'} max-md:hidden absolute top-[52px]  z-[50] transition ring-0`}/>
    </motion.div>
  )
}

export default Large