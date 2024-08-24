"use client"

import React,{useState} from 'react'
import Link from 'next/link'
import { Regis } from '@/lib/auth'

import { useRouter } from 'next/navigation'
import Loader from '@/components/Loader'


/* const handelSubmit =  async(e: FormData)=>{
    "use server"

    const baseUrl = process.env.NEXT_PUBLIC_URL 
  const Name = e.get("first_name")
  const Email = e.get("email")
  const Password = e.get("password")

   const Mobile_Number = e.get("phone")
   const Last_Name = e.get("last_name")
   const City = e.get("city")
   const Country = e.get("country")
   const Current_Balance = e.get("balance")

 
 const data = {
    Name,
    Email,
    Password,
    Mobile_Number,
    Last_Name,
    City,
    Country,
    Current_Balance
 }
  try{
  const getData  = await  Regis(data)
  console.log(`getData`,getData)
  redirect(getData)
  }catch(error){
    console.log(error)
  }

} */

const Page = () => {
    const router = useRouter()
    const [data,setData] = useState({
        Name:'',
        Email:'',
        Password:'',
        Mobile_Number:'',
        Last_Name:'',
        City:'',
        Country:'',
        Current_Balance:1000
    })
    const [loading,setLoading] = useState(false)

    const handelSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(loading){
            return;
        }
        setLoading(true)
        try{
         const datas =  await Regis(data)
         console.log(datas)
         router.push(datas)
         setLoading(false)
        }catch(error){
            console.log(error)
            setLoading(false)
        }
    }
   
     
  return (
 <div className='my-6 w-full h-fit py-6 '>
 <h3 className=' w-full flex justify-center items-center mb-6   text-slate-800 dark:text-slate-300 font-medium text-xl'>Welcome to {"Rifat's"} House</h3>
 <h1 className=' w-full flex justify-center mb-10 items-center text-slate-800 dark:text-slate-300 font-bold text-2xl md:text-4xl'>User Registration </h1>

    
<form  onSubmit={handelSubmit}>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input value={data.Name} onChange={(e)=>setData({...data,Name:e.target.value})} type="text" name='first_name' id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input value={data.Last_Name} onChange={(e)=>setData({...data,Last_Name:e.target.value})} type="text" name='last_name' id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
        </div>
         
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input  value={data.Mobile_Number} onChange={(e)=>setData({...data,Mobile_Number:e.target.value})} type="tel" name='phone'  id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" required />
        </div>
        <div>
            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
            <input value={data.City} onChange={(e)=>setData({...data,City:e.target.value})} type="text" name='city' id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dhaka"  required />
        </div>
      
        <div >
            <label htmlFor="country"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
            <input  value={data.Country} onChange={(e)=>setData({...data,Country:e.target.value})} type="text" name='country' id="Country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country"  required />
        </div>

    <div  >
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input value={data.Email} onChange={(e)=>setData({...data,Email:e.target.value})} type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
    </div> 

    <div >
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input  value={data.Password} onChange={(e)=>setData({...data,Password:e.target.value})} type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
    </div> 
   
    <div className="mb-6">
        <label htmlFor="balance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Balance</label>
        <input value={data.Current_Balance}  onChange={(e)=>setData({...data,Current_Balance:parseInt(e.target.value)})} type="number" name='balance' id="balance" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20000" required />
    </div> 
    </div>
   
    

   
    <div className=" w-full flex items-center justify-between mb-6 flex-wrap">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
        </div>
     
        <Link href={'/login'} className='text-blue-600 text-base ' >Already have an account?</Link>

    </div>
    <button type="submit" className="text-white justify-center items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading ? "loading..":"Submit"}</button>
</form>
</div>
  )
}

export default Page