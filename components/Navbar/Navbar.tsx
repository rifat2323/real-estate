import React from 'react'
import { FcFactory } from "react-icons/fc";
import Large from './Large/Large';
import { Others } from './Others';
import ToggleTheme from './ToggleTheme';
import Mobile from './small/Mobile';

import Menu from './small/Menu';
import Links from './Links';
const Navbar = () => {
  return (
    <nav className=' relative  bg-lights-background dark:bg-darks-background/[0.6] w-full flex py-2 px-3 justify-between items-center  rounded-3xl my-3 '>
      <Links  href={'/'}>
      <FcFactory size={40}/>
      </Links>
   
   <Large/>
    <ToggleTheme/>
  <Others/>
  <Mobile/>
   <Menu/>
    </nav>
  )
}

export default Navbar