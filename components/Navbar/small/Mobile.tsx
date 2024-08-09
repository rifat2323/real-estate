"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import Zusatan from '../Zustan'
import { Input } from '@/components/ui/input'
import Links from '../Links'

const Mobile = () => {
    const isHidden = Zusatan((state)=>state.isHidden)
    const pathname = usePathname()
  return (
    <div className={` ${isHidden && ' translate-x-[100vh]'} duration-500 h-fit  absolute top-[55px] right-0  z-10 shadow-md md:hidden flex justify-center flex-col max-sm:w-[200px] w-[350px] items-center gap-6 px-3 py-2 transition rounded-xl bg-white/[0.6] dark:bg-darks-background/[0.4]`}>

<Input placeholder='search anything' />

    <Links href={'/about'} className={`font-normal hover:text-white hover:bg-gradient-to-r from-indigo-500 to-blue-500 ${pathname === '/about' && 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white '} w-full text-md px-2 py-2 rounded-lg`}>About us</Links>
    <Links href={'/project'}  className={`font-normal hover:text-white hover:bg-gradient-to-r from-indigo-500 to-blue-500 ${pathname === '/project' && 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white '} w-full text-md px-2 py-2 rounded-lg`}>Listing</Links>
    <Links href={'/agent'}  className={`font-normal hover:text-white hover:bg-gradient-to-r from-indigo-500 to-blue-500 text-md ${pathname === '/agent' && 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white '} w-full px-2 py-2 rounded-lg`}>Agents</Links>

    <Links href={'/service'}  className={`font-normal hover:text-white hover:bg-gradient-to-r from-indigo-500 to-blue-500 ${pathname === '/service' && 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white '} w-full text-md px-2 py-2 rounded-lg`}>Service</Links>


    <Links href={'/listing'}  className={`font-normal hover:text-white hover:bg-gradient-to-r from-indigo-500 to-blue-500 ${pathname === '/listing' && 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white '} w-full text-md px-2 py-2 rounded-lg`}>Project</Links>
    <Links href={'/other-service'} className=' hover:bg-gradient-to-r from-indigo-500 to-blue-500  py-2 px-3 rounded-md font-extra-light w-full  text-md'>Other service</Links>
    <Links href={'/contact-us'} className=' hover:bg-gradient-to-r w-full from-sky-500 to-indigo-500 hover:text-white hover:border-white font-extra-light px-2 py-2 rounded-md border border-zinc-800'>Contact us</Links>

</div>
  )
}

export default Mobile