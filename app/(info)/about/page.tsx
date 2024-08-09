import React from 'react'
import styes from './about.module.css'
import { BsHouseUp } from "react-icons/bs";
import { BiBuildingHouse } from "react-icons/bi";
import { LuPartyPopper } from "react-icons/lu";
import { CiCircleChevLeft } from "react-icons/ci";
import { FcCamera } from "react-icons/fc";
import { FcAutomotive } from "react-icons/fc";
import { SiJetpackcompose } from "react-icons/si";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { FaPeopleRobbery } from "react-icons/fa6";
import Image from 'next/image'
import { FaMapLocationDot } from "react-icons/fa6";
import Map from './Map'
const About = () => {
  const cards =[
   {
    icon:<BsHouseUp size={32} color='white'/>,
    icon2:<BiBuildingHouse size={32} color='white'/>,
    iconsCOlor: "#0F67B1",
    bg:"#EAF0F5",
    heading: 'Wide Range of Property',
    text:"Benefit",
   extraIcon: <LuPartyPopper size={26} color="black"/>,
   extraIcon2: <CiCircleChevLeft size={26} color="black"/>,
   extraIcon3: <FcCamera size={26} color="black"/>,
   extraIcon4: <FcAutomotive size={26} color="black"/>,

   },
   {
    icon:<FaPeopleRoof size={32} color='white'/>,
    icon2:<SiJetpackcompose size={32} color='white'/>,
    iconsCOlor: "#50B498",
    bg:"#E6EBE6",
    heading: 'Best Community',
    text:"Benefit",
   extraIcon: <LuPartyPopper size={26} color="black"/>,
   extraIcon2: <CiCircleChevLeft size={26} color="black"/>,
   extraIcon3: <FcCamera size={26} color="black"/>,
   extraIcon4: <FcAutomotive size={26} color="black"/>,

   },
   {
    icon:<GiPayMoney size={32} color='white'/>,
    icon2:<GiReceiveMoney size={32} color='white'/>,
    iconsCOlor: "#E68369",
    bg:"#F9F8F8",
    heading: 'Best Investment',
    text:"Benefit",
   extraIcon: <LuPartyPopper size={26} color="black"/>,
   extraIcon2: <CiCircleChevLeft size={26} color="black"/>,
   extraIcon3: <FcCamera size={26} color="black"/>,
   extraIcon4: <FcAutomotive size={26} color="black"/>,

   },
   {
    icon:<MdOutlineEmojiPeople size={32} color='white'/>,
    icon2:<FaPeopleRobbery size={32} color='white'/>,
    iconsCOlor: "#80C4E9",
    bg:"#F6F8F8",
    heading: 'Home That Match',
    text:"Lifestyles",
   extraIcon: <LuPartyPopper size={26} color="black"/>,
   extraIcon2: <CiCircleChevLeft size={26} color="black"/>,
   extraIcon3: <FcCamera size={26} color="black"/>,
   extraIcon4: <FcAutomotive size={26} color="black"/>,

   },



  ]
  return (
    <section className=' w-full min-h-screen flex flex-col  my-7'>
    <div className=' bg-[url("/about.jpg")] mb-14 relative  bg-black bg-cover bg-no-repeat bg-center w-full h-[88dvh] flex justify-start items-center rounded-lg'>
     <h1 className=' dark:text-white text-white w-[60%] max-md:w-[70%] text-[90px] max-sm:text-6xl  max-md:text-8xl  align-middle'>We Build House OF Your Dream</h1>

{/*      <p className={styes.text}>Dream House</p> */}
    </div>

     <div className=' flex flex-col w-full min-h-screen justify-start items-center'>
       <div className=' flex w-full mb-4 justify-center items-center relative flex-col gap-2'>
        <h1 className=' text-6xl max-sm:text-5xl '>Why Us</h1>
        <p className={styes.text2}>Choose us</p>

       </div>
      <p className=' text-base text-lights-text dark:text-darks-text font-light'>Best Real State agent you will find In your life. <br /> If you encounter any problem just knock us</p>
       <div className=' flex w-full justify-center items-center gap-2 mt-10 flex-wrap '>
      {
        cards.map((card,index)=>(
         <div style={{background:card.bg}} className={`${styes.cardParent} group w-[300px] rounded-md flex flex-col gap-2 justify-center items-center  relative  px-3 py-3 h-[300px]  `} key={index}>
          <div className=' flex justify-center items-center  w-full'>
            <span style={{background:card.iconsCOlor}} className=' translate-x-6 group-hover:-translate-x-20 group-hover:opacity-0  w-14 h-14 rounded-[50%] flex justify-center items-center transition  duration-300 '>
              {card.icon}
            </span>
            <span style={{background:card.iconsCOlor}} className=' w-14 h-14 rounded-[50%] flex justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-x-5 items-center translate-x-20 transition duration-300'>
              {card.icon2}
            </span>

          </div>

           <h1 className=' text-xl text-zinc-900 text-semibold'>{card.heading}</h1>
           <p className=' text-base text-zinc-500'>{ card.text}</p>
           
         <p className={styes.extra}>{card.extraIcon}</p>
         <p className={styes.extra2}>{card.extraIcon2}</p>
         <p className={styes.extra3}>{card.extraIcon3}</p>
         <p className={styes.extra4}>{card.extraIcon4}</p>



         </div>
 


        ))
      }

       </div>





     </div>
      

   <div className=' flex flex-col w-full justify-center items-center my-8'>
    <h1 className=' text-7xl max-sm:text-5xl font-bold'>Our Offices</h1>
      <div className=' flex gap-1 justify-center items-center'>
        <div className='  mt-20 flex flex-wrap  justify-center items-center gap-2 '>
      
        <div className='  overflow-hidden relative group px-6 py-6 flex flex-col justify-center items-center w-[300px] h-[300px] rounded-md border border-stone-600'>
        <p className='font-base text-2xl'>Rangpure</p>    
        <p className=' font-light text-lg'>Lalbag</p>
        <p>126 street</p>
        <FaMapLocationDot size={48}/>
        <div className=' absolute w-full h-full z-10 translate-x-[400px] group-hover:translate-x-[0px] transition duration-300'>
        <Map point={[25.75,89.25]}/>
        </div>

        </div>
        <div className=' overflow-hidden relative group px-6 py-6 flex flex-col justify-center items-center w-[300px] h-[300px] rounded-md border border-stone-600'>
        <p className='font-base text-2xl'>Rangpure</p>    
        <p className=' font-light text-xl'>XYZ</p>
        <p>126 street</p>
        <FaMapLocationDot size={48}/>
        <div className=' absolute w-full h-full z-10 translate-x-[400px] group-hover:translate-x-[0px] transition duration-300'>
        <Map point={[25.74,89.25]}/>
        </div>

        </div>
        <div className=' overflow-hidden relative group px-6 py-6 flex flex-col justify-center items-center w-[300px] h-[300px] rounded-md border border-stone-600'>
        <p className='font-base text-2xl'>Rangpure</p>    
        <p className=' font-light text-xl'>Yellow</p>
        <p>126 street</p>
        <FaMapLocationDot size={48}/>
        <div className=' absolute w-full h-full z-10 translate-x-[400px] group-hover:translate-x-[0px] transition duration-300'>
       
        <Map point={[25.71,89.26]}/>
        </div>
    
        </div>
       
        </div>

  

      </div>
 


   </div>

   <div className=''>




   </div>
    <div className=' mt-10 flex flex-col w-full justify-center items-center h-fit py-8'>
      <h1 className=' text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-200'>Our Partners </h1>
      <div className={` ${styes.container} max-w-[1024px] flex justify-center items-center`}>
        <ul className={styes.ul}>
          {
            Array.from({length:5}).map((_item,index)=>(
              <li className={styes.li} key={index}>
                <Image src={'/logo.png'} className=' w-[250px] h-[150px] grayscale-100' width={400} height={400} alt='logo company image'/>
         
              </li>

            )
          )
          }
          {
            Array.from({length:5}).map((_item,index)=>(
              <li className={styes.li} key={index}>
                <Image src={'/logo.png'} className=' w-[250px] h-[150px] grayscale-100' width={700} height={700} alt='logo company image'/>
         
              </li>

            )
          )
          }
          {
            Array.from({length:5}).map((_item,index)=>(
              <li className={styes.li} key={index}>
                <Image src={'/logo.png'} className=' w-[250px] h-[150px] grayscale-100' width={700} height={700} alt='logo company image'/>
         
              </li>

            )
          )
          }
         


        </ul>

      </div>
    </div>


    </section>
  )
}

export default About