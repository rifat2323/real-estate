import Image from "next/image";
import styles from './home.module.css'
import { LuMessagesSquare } from "react-icons/lu";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { LuBookmarkPlus } from "react-icons/lu";

import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import Buy from '@/models/Buy'
import Link from 'next/link'
import connectDB from "@/db/connectDb";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const getData = async  ()=>{
   await connectDB()
  try{
    const data =  await Buy.find({}).populate('propertyId').sort({createdAt:-1}).limit(25)
    const property = await data.map((item)=>item.propertyId)
    return property


  }catch(error){
    console.log(error)
  }
}

export default async function Home() {
 const data = await getData()
 

  const social = [
   {
    icons:<FaFacebookSquare size={25}/>,
    link:"https://www.facebook.com/munna.rifat.3/",
    name:"facebook"
   },
   {
    icons:<BsTwitterX size={25}/>,
    link:"www.linkedin.com/in/rifatul-islam-757b062a6",
    name:"TwitterX"
   },
   {
    icons:<FaLinkedin size={25}/>,
    link:"www.linkedin.com/in/rifatul-islam-757b062a6",
    name:"Linkedin"
   },
   {
    icons:<FaGithub size={25}/>,
    link:"https://github.com/rifat2323",
    name:"Github"
   },
   {
    icons:<TbBrandFiverr size={25}/>,
    link:"https://www.fiverr.com/rifatul_islam1?source=gig_page",
    name:"Fiverr"
   }
 

  ]

  const steps = [
      {
        icons:<LuMessagesSquare size={78} style={{color:"#3be379"}}/>,
        title:"Answer a Few Questions",
        description:"We will get back to you within 24 hours lorem ipsam dolor sit amet consectetur adipiscing elit" 
      },
      {
        icons:<MdOutlineMarkEmailRead size={78} style={{color:"#e3942d"}}/>,
        title:"Select A Quote",
        description:"We will get back to you within 24 hours lorem ipsam dolor sit amet consectetur adipiscing elit" 
      },
      {
        icons:<TfiWrite size={78} style={{color:"#2da6e3"}}/>,
        title:"Get Resisted",
        description:"We will get back to you within 24 hours lorem ipsam dolor sit amet consectetur adipiscing elit" 
      },

  ]



   const office = [
     {
      title:15,
      name:"Customer"
     },
     {
      title:10,
      name:"Office"
     },
     {
      title:20,
      name:"Partners"
     }

   ]
  return (
    <main className="flex min-h-screen flex-col my-4 mx-4 ">
      <section  className={`${styles.hero} max-md:py-5 max-md:flex-col dark:shadow-lg  dark:bg-gradient-to-r from-[#101219a6] to-[#090d17a6] max-md:justify-center max-md:items-center`}>
     <div className="flex flex-col gap-4 items-start max-md:items-center max-md:w-full ml-3">
      <p className=" text-lg max-md:text-xl max-sm:text-base font-normal">welcome to my website</p>
      <h2 className=" text-6xl max-md:text-4xl max-sm:text-xl font-extrabold">Manage Your Property</h2>
       <div className=" max-sm:w-full   flex justify-between items-center h-[55px] rounded-2xl bg-white dark:bg-slate-200">
       <input type="email" placeholder="Enter Your Email" className=" dark:bg-slate-200 dark:text-black px-2 outline-none rounded-2xl w-[150px] sm:w-full border-none h-full  flex-1 "/>
        <button className=" bg-slate-950 rounded-2xl h-full px-4 max-sm:text-sm text-white">Get a Quote</button>
       </div>

    </div> 
   
    <Image src={'/home1.png'} width={800} height={800} quality={100} className=" max-md:w-[300px] max-md:h-[300px] w-[400px] h-[400px] max-md:items-center" alt="hero image"/>
      </section>
      <section className=" flex flex-col justify-center items-center my-7 mt-14 px-4">
      <p className=" max-sm:text-base text-lg max-md:text-xl font-normal">You are three step behind</p>
      <h2 className=" max-sm:text-lg text-5xl max-md:text-3xl my-11  font-extrabold">Everything should be this easy</h2>
      <div className=" w-full flex gap-4 justify-center items-center flex-wrap">
        {
          steps.map((item,index)=>(
          <div key={index} className=" flex flex-col justify-center gap-5 max-w-[350px] items-start my-12 ">
            <span>{item.icons}</span>
            <h2 className="text-xl  max-sm:text-lg font-semibold">{item.title}</h2>
            <p className=" text-base font-light ">{item.description}</p>

          </div>


          ))
        }

      </div>
      </section>
    <section className=" max-sm:mx-1 mx-6 flex flex-col justify-start mt-10 items-center w-full min-h-screen  ">
    <div className=" flex w-full mb-12 justify-center gap-3 items-start flex-col">
     <p className=" text-base max-md:text-sm font-light text-lights-text dark:text-darks-text">Best project of the year</p>
     <h2 className=" text-6xl max-md:text-4xl max-sm:text-3xl font-semibold text-lights-text dark:text-darks-text">Our Recent Project</h2>
    </div>
    <div className=" flex my-12 w-full justify-center items-center  gap-4 flex-wrap ">
    {
      data?.map((item,index)=>(

       <div  key={item?._id} className=" shadow-light1 dark:shadow-dark1 h-[350px] w-[370px] flex flex-col rounded-lg border-stone-300  dark:border-stone-800 border justify-between items-center  ">
        <div className=" w-full rounded-lg  h-3/5 ">
        <Image src={item.Image} width={500} height={500} quality={80} alt="house picture" className=" w-full h-full  rounded-lg"/>

        </div>
       <div className=" mb-4 pl-2 flex flex-col justify-center items-start">
       <Link href={`/houses/${item?._id}`}> <h3  className=" text-xl font-semibold mb-2" >{item?.Title}</h3></Link>
        <p className=" max-sm:text-sm text-base  font-light mb-2" >{item?.Description}</p>
        <div className=" mb-6 flex justify-center items-center my-2 gap-1">
          {
            Array.from({length:5}).map((_item,index)=>(
             <FaStar key={index} size={21} color={item?.Rating>=index+1?"yellow":"gray"}/>


            ))
          }

        </div>

       </div>


       </div>


      ))
    }
    </div>

    </section>

    <section className=" w-full my-10 flex flex-col mx-3 justify-center items-center">
      <h1 className=" max-md:mb-6 mb-11 text-6xl max-md:text-5xl max-sm:text-4xl font-bold">We are global ,Secure, Trusted Agency </h1>
      <div className=" w-full mt-11 flex justify-center items-center  gap-3">
        <div className=" flex flex-col  items-start justify-center w-[50%] max-md:w-full ">
         <h3 className=" text-4xl max-md:text-3xl font-bold mt-8 mb-3 text-wrap text-left">The Transfer of Real Estate</h3>
         <p className=" text-sm font-light leading-5 mb-6">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source</p>
     
         <div className=" flex items-center gap-4 flex-wrap">
           <button className=" group overflow-hidden  text-white flex justify-center items-center dark:bg-slate-800 bg-slate-950 py-3 px-6 rounded-lg hover:shadow-light1 dark:hover:shadow-dark1 "> <span className=" group-hover:-translate-x-20 group-hover:opacity-0 duration-500">Book Now</span> <span className=" opacity-0 group-hover:opacity-100 group-hover:-translate-x-10 transition duration-500 group-hover:block"><LuBookmarkPlus size={28}/> </span></button>
           <button className="group  flex justify-center items-center gap-1 py-3 pl-8 px-6 rounded-lg border border-zinc-600">Read me <span className=" opacity-0 group-hover:opacity-100 transition duration-300 group-hover:block"><FaLocationArrow size={18}/></span></button>

         </div>

         <div className=" w-full flex justify-between items-center mt-9 flex-wrap max-sm:gap-2">
          {
            office.map((item,index)=>(
              <div className=" flex  flex-col items-center gap-2" key={index}>
                 <h1 className=" text-7xl max-md:text-5xl font-bold">{item.title}+</h1>
                 <p className=" text-xl max-md:text-lg font-light">{item.name}</p>
              </div>

            ))
          }
        

         </div>
       
        </div> 
        <div className=" max-md:hidden h-full w-[40%] rounded-xl">
          <Image src={'/office.jpg'} width={1000} height={1000} quality={80} className=" rounded-xl w-full h-full filter contrast-75  saturate-50 blur-[.5px]" alt="office"/>
        </div>

      </div>


    </section>
   <section className={`${styles.hero}  mt-20  max-md:py-5 max-md:flex-col dark:shadow-lg  dark:bg-gradient-to-r from-[#101219a6] to-[#090d17a6] max-md:justify-center max-md:items-center`}>

   <div className="flex flex-col gap-4 items-start max-md:items-center w-[50%] max-md:w-full ml-3">
    
      <h2 className=" text-left w-full text-6xl max-md:text-4xl max-sm:text-xl font-extrabold">Stay Up To Date</h2>
      <p className="  text-base font-normal"> Join our social media platform for more information and fast information about any property and fast response</p>
       <div className=" flex justify-between w-full items-center pl-2 max-md:px-10 ">
        {
          social.map((item,index)=>(
          <a href={item.link} className=" relative hover:translate-y-1 duration-500" key={index}>
           <TooltipProvider>
            <Tooltip>
           <TooltipTrigger asChild>
            {item.icons}
           </TooltipTrigger>
           <TooltipContent>
            {item.name}
           </TooltipContent>

            </Tooltip>

           </TooltipProvider>

          </a>


          ))
        }
       
       </div>
      
    </div> 
   
    <Image src={'/home/bottom.png'} width={600} height={600} quality={85} className=" max-md:w-[300px] max-md:h-[300px] w-[400px] h-[400px] max-md:items-center" alt="hero image"/>


   </section>

    </main>
  );
}
