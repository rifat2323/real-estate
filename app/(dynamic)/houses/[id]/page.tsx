import React from 'react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Cart from '@/components/Listing/Cart'

const Position = dynamic(() => import('@/components/GetPosotion/Position'), {ssr:false})

const getData = async (params:string)=>{
 
     try{
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/houses/${params}/api`,{cache:"no-store"})
     
      const data = await response.json()
      return data

     }catch(err){
        console.log(err)
     }
}


const page = async ({params}:{params:{id:string}}) => {

      
        const data = await getData(params.id)
        console.log(data)
        if(data.url){
          redirect(data.url)
        }
       

      
    const afterPRice = parseInt(data?.Price_Apart)  - (parseInt(data?.Price_Apart) * (data.discount/100))

    

  return (
    <div className="w-full h-fit flex flex-col justify-between">
    
    <Image src={data?.Image} priority  width={1200}  height={1200} alt="house picture" className=" w-full rounded-sm max-h-[60dvh] lg:h-[85vh] md:h-[50vh] aspect-video  "/>
     <div className='w-full rounded-sm overflow-hidden my-7  h-[30vh]'>
     <Position city={data?.Location}/>

     </div>
      <div className=' w-full h-fit  my-14 flex justify-between flex-col gap-2 items-center '>
        <h1 className=' text-2xl md:text-3xl lg:text-4xl font-extrabold  text-blue-600'>{data?.Title}</h1>
        
      </div>
      <div className=' w-full mb-12 h-fit flex flex-col justify-start items-start'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-300'>Property Description:</h1>
        <p className=' text-base font-light text-zinc-900 dark:text-zinc-300'>{data?.Description}</p>

      </div>
      <div className=' w-full mb-12 max-sm:flex-col max-sm:justify-center max-sm:gap-6 gap-0 flex-row h-fit flex justify-between items-center flex-wrap'>
      <h1 className='text-base w-fit max-sm:w-full text-center   bg-slate-500 text-slate-200  rounded-sm py-3 px-1 '>Price:${afterPRice} <span className=' line-through opacity-40'>${data?.Price_Apart}</span></h1>
      <button type="button" className="text-white max-sm:w-full text-base bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  py-3 px-8  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy Now</button>
       <div className=' flex justify-center items-center gap-1'>
        <p className=' text-base font-light'>add to wish List:</p>

       <Cart/>
       </div>
      </div>

     

<div className="relative mb-12 overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
       
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
               
                <th className="px-6 py-4">
                In Stock
                </th>
                <th className="px-6 py-4">
                    Location
                </th>
                <th className="px-6 py-4">
                  Price
                </th>
                <th className="px-6 py-4">
                  Bed
                </th>
                <th className="px-6 py-4">
                  Bath
                </th>
                <th className="px-6 py-4">
                  Area
                </th>
                <th className="px-6 py-4">
                  Type
                </th>
                <th className="px-6 py-4">
                  Status
                </th>
            </tr>
            </thead>
            <tbody>

         
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              
                <td className="px-6 py-4">
                   {data?.CountInStock}
                </td>
                <td className="px-6 py-4">
                {data?.Location}
                </td>
                <td className="px-6 py-4">
                {data?.Price_Apart}
                </td>
                <td className="px-6 py-4">
                {data?.Bed}
                </td>
                <td className="px-6 py-4">
                {data?.Bath}
                </td>
                <td className="px-6 py-4">
                {data?.Area} sqrft
                </td>
                <td className="px-6 py-4">
                {data?.Type} 
                </td>
                <td className="px-6 py-4">
                {data?.Listing_Status} 
                </td>
            </tr>
            </tbody>
           
     
    </table>
</div>


      </div>
  )
}

export default page