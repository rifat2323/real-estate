import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className = 'w-full h-screen flex flex-col justify-center items-center'>
      <h2 className=" text-3xl font-bold text-slate-800 dar:text-slate-300">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='text-base text-blue-600 '>Return Home</Link>
    </div>
  )
}