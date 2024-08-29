"use client"
import { createContext } from "react";


  interface WishlistStore  {
    wishList?: any[] | null ,
    userId?:string | null,
    statusCode?:number | undefined | null,


    
  }
export const contextProvider = createContext<WishlistStore>({
    userId: null,
    wishList: null,
    statusCode: null,
   
})