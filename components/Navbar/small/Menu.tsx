"use client"

import React from 'react'
import { TiThMenu } from 'react-icons/ti'
import Zusatan from '../Zustan'
const Menu = () => {
    const setIsHidden = Zusatan((state)=>state.setIsHidden)
  return (
    <>
         <TiThMenu onClick={setIsHidden} className='md:hidden' style={{cursor:"pointer"}} size={25}/>
    </>
  )
}

export default Menu