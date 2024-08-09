"use client"

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { PiMoonStarsBold } from "react-icons/pi";
import { PiSunDimFill } from "react-icons/pi";
const ToggleTheme = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent rendering until theme has been set to avoid flicker
    if (!mounted) return null;

     
  return (
    <div className=' flex justify-center items-center'>
        <PiMoonStarsBold className={`${theme === "light" && 'hidden'}`} size={25} onClick={()=>setTheme("light")}/>
            <PiSunDimFill className={`${theme === "dark" && 'hidden'}`} size={25} onClick={()=>setTheme("dark")}/>

    </div>
  )
}

export default ToggleTheme