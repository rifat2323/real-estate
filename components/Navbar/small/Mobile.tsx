"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import Zusatan from '../Zustan'
import { Input } from '@/components/ui/input'
import Links from '../Links'
import { CgShoppingBag } from "react-icons/cg";
import { FaUser } from "react-icons/fa";


const Mobile = () => {
    const isHidden = Zusatan((state)=>state.isHidden)
    const pathname = usePathname()

  return (
    <div className={` ${isHidden && ' translate-x-[100vh]'} duration-500 h-fit  absolute top-[55px] right-0  z-[9999] shadow-md md:hidden flex justify-center flex-col max-sm:w-[200px] w-[350px] items-center gap-6 px-3 py-2 transition rounded-xl bg-white/[0.6] dark:bg-darks-background/[0.4]`}>

<Input placeholder='search anything' />

    <Links href={'/about'} className={`font-normal hover:text-white hover:bg-gradient-to-r from-indigo-500 to-blue-500 ${pathname === '/about' && 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white '} w-full text-md px-2 py-2 rounded-lg`}>About us</Links>
    <Links href={'/project'}  className={`font-normal hover:text-white hover:bg-gradient-to-r from-indigo-500 to-blue-500 ${pathname === '/project' && 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white '} w-full text-md px-2 py-2 rounded-lg`}>Listing</Links>
    <Links href={'/agent'}  className={`font-normal hover:text-white hover:bg-gradient-to-r from-indigo-500 to-blue-500 text-md ${pathname === '/agent' && 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white '} w-full px-2 py-2 rounded-lg`}>Agents</Links>

    <Links href={'/service'}  className={`font-normal hover:text-white hover:bg-gradient-to-r from-indigo-500 to-blue-500 ${pathname === '/service' && 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white '} w-full text-md px-2 py-2 rounded-lg`}>Service</Links>


    <Links href={'/listing'}  className={`font-normal hover:text-white hover:bg-gradient-to-r from-indigo-500 to-blue-500 ${pathname === '/listing' && 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white '} w-full text-md px-2 py-2 rounded-lg`}>Project</Links>
    <Links href={'/wishlist'} className={`font-normal flex justify-start items-start gap-2 hover:text-white hover:bg-gradient-to-r from-indigo-500 to-blue-500 ${pathname === '/wishlist' && 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white '} w-full text-md px-2 py-2 rounded-lg`} > <span className='md:hidden text-base font-light'>Wishlist</span><CgShoppingBag size={25} className=' hover:scale-95 hover:text-orange-500 hover:fill-orange-500 transition-all'/> </Links>
      <Links href={'/user'} className={`font-normal flex justify-start items-start gap-2 hover:text-white hover:bg-gradient-to-r from-indigo-500 to-blue-500 ${pathname === '/user' && 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white '} w-full text-md px-2 py-2 rounded-lg`} > <span className='md:hidden text-base font-light'>User</span><FaUser size={25} className=' hover:scale-95 hover:fill-orange-500 transition-all'/> </Links>

</div>
  )
}

export default Mobile