import React from 'react'
import Images from '@/components/CoverImage/Images'
import BuyButton from './BuyButton'
import Image from 'next/image'
import Link from 'next/link'
import Cart from '../Listing/Cart'
type Card ={
    _id:string,
    Image: string,
    Title:string,
    Description:string,
    Bed:string,
    Bath:string,
    Area:string,
    Price_Apart:string
    CountInStock:number,
    Rating:number,
    AgentName:string,
    Location:string,
    For_Sale:string,
    Price:string,
    Bed_and_Bath:string,
    Listing_Status:string,
    Type:string,
    Number_Of_Sales:number,
    discount:number
  
  }
  
const CommonCard = ({item}:{item:Card}) => {
  return (
    <div className=' child transition-all dark:bg-[#070604] border border-gray-400 max-w-[350px] w-full  sm:w-[250px] md:w-[350px] max-h-[500px] overflow-hidden rounded-md flex flex-col gap-2 justify-center items-center shadow-md'>
      <meta name='description' content={item?.Description}></meta>
             <meta name='DC.title' content={item?.Title}></meta>
             <meta name='keywords' content={item?.Price_Apart}></meta>
             <meta name='topic' content='sales building'></meta>
             <meta name='og:title' content={item?.Title}></meta>
             <meta name='og:type' content={item?.Title}></meta>
             <meta name='og:image' content={item?.Image}></meta>
             <meta name='og:description' content={item?.Description}></meta>
             <title>{item?.Title}</title>
          <Images url={item?.Image}/>
        <div className=' py-0.5 px-1.5 w-full relative'>
            <div className=' flex flex-col  justify-start gap-2  items-start  '>
                <h1 className=' flex justify-center items-center  w-full md:w-fit font-light text-md   truncate rounded-md '>{item?.Title}</h1>
                <p className=' flex justify-center items-center w-full md:w-fit  rounded-md text-base font-bold'>${item?.Price_Apart}</p>
                <p className=' -top-12 absolute  right-0'>

                <Cart id={item?._id}/>
                </p>
            </div>

            <p className=' font-light text-base truncate'>{item?.Description}</p>
           <div className='w-full flex mt-2 justify-center gap-2 flex-wrap items-center'>
           <p className='flex justify-center items-center text-sm gap-0.5'><Image src={'/bed.png'} width={100} height={100} alt='bed logo' className='w-[30px] h-[30px]'/>:{item?.Bed}{" bed(s)"}</p>
           <p className='flex justify-center items-center text-sm gap-0.5'><Image src={'/bath.png'} width={100} height={100} alt='bath logo' className='w-[30px] h-[30px]'/>:{item?.Bath}{" bath(s)"}</p>
           <p className='flex justify-center items-center  text-sm gap-0.5'><Image src={'/area.png'} width={100} height={100} alt='bed logo' className='w-[30px] h-[30px]'/>:{item?.Area} sqrft</p>

           </div>

           <div className=' flex flex-col mt-3 pb-1 md:flex-row justify-center gap-2 md:gap-0 md:justify-between items-center flex-wrap '>
                <BuyButton id={item?._id} className=' flex border border-gray-300  justify-center items-center font-light px-3 w-full md:w-fit shadow-sm text-base bg-black text-white py-2 truncate rounded-r-lg rounded-bl-md '/>
                <Link href={`/houses/${item?._id}`} className=' flex border border-gray-300 justify-center items-center px-3 py-2 shadow-sm  bg-black w-full md:w-fit text-white d rounded-l-lg rounded-br-lg text-md font-light'>Viw details</Link>
            </div>

        </div>


    </div>
  )
}

export default CommonCard