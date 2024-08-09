import Link from 'next/link'
import React from 'react'

export const Others = () => {
  return (
    <div className=' max-md:hidden flex max-md:flex-col gap-4 justify-center items-center'>
        <Link href={'/other-service'} className=' font-extra-light hover:text-indigo-600  text-md'>Other service</Link>
        <Link href={'/contact-us'} className=' hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-white hover:border-white font-extra-light px-2 py-2 rounded-md border border-zinc-800'>Contact us</Link>

    </div>
  )
}
