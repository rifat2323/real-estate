import Link from 'next/link'
import React from 'react'
import { CgShoppingBag } from "react-icons/cg";
import { FaUser } from "react-icons/fa";

export const Others = () => {
  return (
    <div className=' max-md:hidden flex max-md:flex-col gap-4 justify-center items-center'>
      <Link href={'/wishlist'} className="p-2.5 bg-slate-300 dark:bg-slate-600 rounded-[50%]" > <span className='md:hidden text-base font-light'>Wishlist</span><CgShoppingBag size={25} className=' hover:scale-95 hover:text-orange-500 hover:fill-orange-500 transition-all'/> </Link>
      <Link href={'/user'} className="p-2.5 bg-slate-300 dark:bg-slate-600 rounded-[50%]" > <span className='md:hidden text-base font-light'>User</span><FaUser size={25} className=' hover:scale-95 hover:fill-orange-500 transition-all'/> </Link>

    </div>
  )
}
