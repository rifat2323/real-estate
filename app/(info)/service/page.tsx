import React from 'react'
import { FaDollarSign, FaHome, FaMapMarkerAlt, FaSearchLocation } from 'react-icons/fa'
import Image from 'next/image'
import { HiOutlineChevronRight } from 'react-icons/hi'
import Tastimonial from '@/components/tastimonial/Tastimonial'
import FindAgentSection from '@/components/Agent'


const page = () => {
  return (
    <section className=' flex flex-col justify-start items-start w-full min-h-screen'>
        <div className=" w-full   h-fit flex flex-col justify-center items-center overflow-hidden  bg-gradient-to-b from-cyan-950 to-gray-950 py-20 rounded-lg shadow-lg">
      {/* Neon Light Effect */}
     
   
      {/* Content */}
      <div className=" w-full backdrop-blur-lg  relative z-1 flex flex-col items-center justify-center space-y-6 text-white">
        <h1 className="text-3xl md:text-4xl w-full font-bold text-center">Find Your Dream Home</h1>
        <p className="text-lg w-full text-center">
          Explore the best properties available with stunning views and modern amenities.
        </p>

        {/* Icons Section */}
        <div className="flex flex-wrap justify-center gap-4 items-center  mt-4">
          <div className="flex flex-col items-center">
            <FaHome size={50} className="text-blue-500 mb-2 text-2xl md:text-4xl animate-pulse" />
            <span className="font-semibold">Modern Homes</span>
          </div>

          <div className="flex flex-col items-center">
            <FaMapMarkerAlt size={50} className="text-green-500 text-2xl md:text-4xl  mb-2 animate-pulse" />
            <span className="font-semibold">Prime Locations</span>
          </div>

          <div className="flex flex-col items-center">
            <FaDollarSign size={50} className="text-yellow-500 text-2xl md:text-4xl mb-2 animate-pulse" />
            <span className="font-semibold">Affordable Prices</span>
          </div>
         
        </div>
      </div>

    </div>
    <div className="bg-gray-50 dark:bg-gray-950 gap-0 md:gap-3 p-8 md:p-16 lg:p-24 flex flex-col md:flex-row items-center justify-between shadow-md rounded-lg">
      {/* Image Container */}
      <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
        <div className="bg-yellow-50 rounded-xl p-4 shadow-lg transform rotate-3">
          <Image
            src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Mobile Banking App"
            className="rounded-lg w-full h-[160px] object-cover  aspect-video"
            width={400}
            height={400}
          />
        </div>
        <div className="absolute -bottom-4 -right-4  md:right-4 transform rotate-6">
          <Image
            src="https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Laptop and Piggy Bank"
            className="rounded-lg shadow-md w-full h-[120px] object-cover"
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* Text Container */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-3xl dark:text-slate-300 md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Here you can take a loan to buy your next favorite home
        </h1>
        <p className="text-gray-600 dark:text-slate-300 text-sm md:text-base lg:text-lg">
          If you are looking to take out a home loan, there are several steps you can take to prepare and increase your chances of being approved for a mortgage. Here are some tips to help you get started.
        </p>
        <button className="flex  items-center justify-center bg-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200">
          <FaSearchLocation className="mr-2" />
          Find a Lender
          <HiOutlineChevronRight className="ml-2" />
        </button>
      </div>
    </div>
    <Tastimonial/>
    <FindAgentSection/>

    </section>
  )
}

export default page