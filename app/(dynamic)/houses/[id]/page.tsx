import React from 'react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Cart from '@/components/Listing/Cart'
import getColorFromImage from "@/lib/GetColor";
import BuyButton from '@/components/CommonCard/BuyButton'

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
   
        if(data?.url){
          redirect(data.url)
        }
       

      
    const afterPRice = parseInt(data?.Price_Apart)  - (parseInt(data?.Price_Apart) * (data?.discount/100) || 0)

 
   
    const color = await getColorFromImage(data?.Image)
   

  return (
    <div className="w-full  max-md:h-fit h-screen lg:h-[140dvh] flex flex-col max-md:justify-center max-md:gap-1.5 justify-between relative">
    
    <Image src={data?.Image} priority quality={100}   width={2000}  height={2000} alt="house picture" className=" w-full rounded-sm  h-[450px] md:absolute md:z-10 md:left-0 md:top-0 md:h-full "/>
     <div className='w-full max-md:flex-col max-md:justify-end max-md:items-center h-full flex justify-between z-40 '>
         <div className={'flex flex-col max-md:w-full max-md:h-fit justify-around items-center min-h-[200px] h-fit max-md:mt-1 mt-20 bg-gray-200 ml-2.5 dark:bg-gray-900 w-[300px] rounded-md'}>
          <h1 className={`font-semibold text-2xl `}>{data?.Title}</h1>
             <p className={`text-xl font-bold`}>Today Price: <span style={{color:color}} className={`text-${color}`}>{afterPRice}</span> </p>
             <p className={`text-base font-light`}>{data?.Description}</p>
             <div style={{background:color}} className={`bg-cyan-500 w-[90%] rounded-lg flex justify-around items-center py-2.5`}>
                 <BuyButton id={params?.id} className={'text-white flex justify-center items-center'}/>
                 <p  className={'text-white'}>|</p>
                 <Cart id={data?._id}/>

             </div>
         </div>



         <div className={' mt-8 flex flex-col max-md:w-full gap-1.5 items-center'}>
             <div className={'rounded-lg max-md:w-full max-md:h-[160px] w-[250px] h-[250px] md:w-[360px] '}>
                 <Position city={data?.Location}/>
             </div>
             <div className={'flex max-md:w-full flex-col px-6 bg-gray-200 py-5 rounded-md dark:bg-gray-900 gap-1.5 z-50 items-center w-[300px] h-fit'}>
                 <h1 className={`bg-cyan-500 rounded-md text-white p-4 `}>House Details</h1>
              <p className={`text-base font-light`}> This House Located at <span style={{color:color}} className={`text-${color} font-medium`}>{data?.Location}.</span>
                  This House Price is <span  style={{color:color}} className={`text-${color} font-medium`}>{data?.Price_Apart} </span>
                  This House have <span style={{color:color}} className={`text-${color} font-medium`}>{data?.Bed} Bed(s) </span>
                   and <span style={{color:color}} className={`text-${color} font-medium`}>{data?.Bath} Bath(s).</span>
                  Total area of this house is <span style={{color:color}} className={`text-${color} font-medium`}>{data?.Area}sqft.</span>



              </p>
             </div>

         </div>


     </div>


     




      </div>
  )
}

export default page