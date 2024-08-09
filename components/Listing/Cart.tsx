"use client"
import React, { useState } from 'react'

const Cart = () => {
  const [isClick,setIsClick] = useState(false)
    const path = "M4.24,12.25C3.47,11.5 3,10.42 3,9.25C3,6.9 4.9,5 7.25,5C8.83,5 10.21,5.86 10.94,7.14H12.06C12.79,5.86 14.17,5 15.75,5C18.1,5 20,6.9 20,9.25C20,10.42 19.5,11.5 18.76,12.25L11.5,19.5L4.24,12.25M19.46,12.96C20.41,12 21,10.7 21,9.25C21,6.35 18.65,4 15.75,4C14,4 12.45,4.85 11.5,6.17C10.55,4.85 9,4 7.25,4C4.35,4 2,6.35 2,9.25C2,10.7 2.59,12 3.54,12.96L11.5,20.92L19.46,12.96Z"
    const handelClick = ()=>{
        setIsClick((prev)=>!prev)
    } 
  return (
    <svg onClick={handelClick}  className=' w-[30px] h-[30px] ' style={{stroke:`#f53b16`,fill: isClick?"#f53b16":"transparent" }}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>heart</title><path d={!isClick? path : "M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}/></svg>
    
    
    
 
    
    
    
  )
}

export default Cart