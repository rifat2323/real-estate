"use server"

import jwt from  'jsonwebtoken'
import {cookies} from "next/headers";

export const varifyToken = async  ()=>{

   const token =  cookies().get("refreshToken")?.value
    if(!token) return  null
    try{
     const decode =  jwt.verify(token, process.env.REFRESH_KEY!);
      

      if (typeof decode !== 'string' && 'email' in decode) {
        return decode.email;
    } else {
        return null; 
    }
        

    }catch (err:any){
        if (err instanceof jwt.JsonWebTokenError) {
            console.log(`JWT Error: ${err.message}`);
        } else {
            console.log(`Other Error: ${err.message}`);
        }
        return null;
    }
}