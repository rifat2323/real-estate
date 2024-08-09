import React from 'react'
import Image from 'next/image'
import { FaPeopleGroup } from "react-icons/fa6";
import { FaChartSimple } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import Cards from '@/components/reUseable/Cards';
import { Button } from '@/components/ui/button';
import FindAgentSection from '@/components/Agent';
const page = () => {
  const cards =[
    {
    heading:"10000+",
    text:"Happy users",
    icon:<FaPeopleGroup size={22}  color={"#FFA38F"}/>,
     stye : " absolute z-10 flex justify-center items-center gap-3 left-[0px] top-[-10px] bg-[#FFD18E]"

    },
    {
    heading:"20000+",
    text:"Total sales",
    icon:<FaChartSimple color='#E0A75E' size={22}/>,
     stye : " absolute z-10 flex justify-center items-center gap-3 right-0 bottom-[100px] md:bottom-[20px] bg-[#FAEDCE] "

    },
    {
    heading:"30000+",
    text:"Total Buyers",
    icon:<BsPeopleFill size={22} color='#91DDCF'/>,
     stye : " absolute z-10 flex justify-center items-center gap-3 left-0 bottom-[20px] bg-[#CDFADB]"

    },
  ]
  const bestProjects = [
    {
      title:"Rifat vailla I",
      des: " lorem ipsam dolor sit amet consectetur adipiscing elit loream ipsam",
      image:"/home/home1.jpg",
       star:4
    },
    {
      title:"Rifat vailla II",
      des: " lorem ipsam dolor sit amet consectetur adipiscing elit loream ipsam",
      image:"/home/home2.jpg",
       star:3
    },
    {
      title:"Rifat vailla III",
      des: " lorem ipsam dolor sit amet consectetur adipiscing elit loream ipsam",
      image:"/home/home-3.jpg",
       star:2
    },
    {
      title:"Rifat vailla IV",
      des: " lorem ipsam dolor sit amet consectetur adipiscing elit loream ipsam",
      image:"/home/home-4.jpg",
       star:5
    },
 

   ]
  return (
    <section className='w-full px-2 md:px-0 min-h-screen flex justify-center items-center flex-col'>
    <div className=' w-full min-h-screen md:h-screen gap-12 md:gap-0 flex-col md:flex-row  flex justify-center items-center'>
      <div className=' md:w-1/2 w-full flex flex-col justify-center items-center'>
        <h1 className=' text-4xl font-bold font-serif mb-4 md:text-6xl text-slate-900 dark:text-slate-300 '>Let Us Help You Find Your Perfect Home</h1>
        <p>Real estate agents are responsible for the buying, selling, and management of real estate. They may also be responsible for the acquisition of real estate.</p>
        <div className=" max-sm:w-full mt-4 border border-zinc-950 dark:border-zinc-400   flex justify-between items-center h-[55px] rounded-2xl bg-white dark:bg-slate-200">
       <input type="email" placeholder="Search For Property" className=" dark:bg-slate-200 dark:text-black px-2 outline-none rounded-2xl w-[150px] sm:w-full border-none h-full  flex-1 "/>
        <button className=" bg-slate-950 rounded-2xl h-full px-4 max-sm:text-sm text-white">Search</button>
       </div>
      </div>

      <div className='md:w-1/2 w-full flex flex-col justify-center items-center relative'>
       <Image src={'/list.webp'} className=' max-w-[250px] md:max-w-[400px] md:max-h-[400px] object-cover border border-orange-600 p-3 md:p-6 max-h-[250px]  rounded-[50%]' width={500} height={500} alt='property image'/>
      {
        cards.map((item,index)=>(
          <div key={index} className = {`${item.stye} w-[200px] h-[80px] rounded-md`}>
            <span className ='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-[50%]'>{item.icon}</span>
            <div className='flex justify-center items-center flex-col'>
              <h4 className="text-bold text-xl text-zinc-950 dark:text-black">{item.heading}</h4>
              <p className="text-sm text-zinc-950 dark:text-black">{item.text}</p>

            </div>
           </div>
        ))
      }
      </div>


    </div>

    <div className=' w-full h-fit py-4 flex justify-center items-center flex-col'>
      <h1 className='text-4xl font-bold font-serif mb-4 md:text-6xl text-slate-900 dark:text-slate-300'>Up to 40% off on top projects</h1>
      <div className='flex my-12 w-full justify-center items-center  gap-4 flex-wrap'>
        {
          bestProjects.map((item,index)=>(
            <Cards index={index} des={item.des} image={item.image} star={item.star} title={item.title} key={index}/>

          ))
        }

      </div>
      <Button>Show All</Button>

    </div>
    <div className=' w-full h-fit py-4 flex justify-center items-center flex-col'>
      <h1 className='text-4xl font-bold font-serif mb-4 md:text-6xl text-slate-900 dark:text-slate-300'>New Arrivals</h1>
      <div className='flex my-12 w-full justify-center items-center  gap-4 flex-wrap'>
        {
          bestProjects.map((item,index)=>(
            <Cards index={index} des={item.des} image={item.image} star={item.star} title={item.title} key={index}/>

          ))
        }

      </div>
      <Button>Show All</Button>

    </div>
    <div className=' w-full h-fit py-4 flex justify-center items-center flex-col'>
      <h1 className='text-4xl font-bold font-serif mb-4 md:text-6xl text-slate-900 dark:text-slate-300'>Hot Deals</h1>
      <div className='flex my-12 w-full justify-center items-center  gap-4 flex-wrap'>
        {
          bestProjects.map((item,index)=>(
            <Cards index={index} des={item.des} image={item.image} star={item.star} title={item.title} key={index}/>

          ))
        }

      </div>
      <Button>Show All</Button>

    </div>
   <FindAgentSection/>

    </section>
  )
}

export default page