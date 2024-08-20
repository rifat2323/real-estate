 "use server"
 import {cookies} from "next/headers";
import {createToken} from "@/lib/auth";

export const login = async (Email:string, Password:string)=>{
    const datas = {
        Email,
        Password
    }
     try{
         const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/user/api/login`,{
             method: "POST",
             body: JSON.stringify(datas)
         })
         const data = await response.json()
         if(data?.url === '/'){
             const {refreshToken,accessToken} = await createToken(Email)

             cookies().set("refreshToken",refreshToken, {
                 httpOnly:true,
                 sameSite:"none",
                 secure:true,
                 maxAge: 1000*60*60*48,

             })
             cookies().set("accessToken",accessToken, {
                 httpOnly:true,
                 sameSite:"none",
                 secure:true,
                 maxAge: 1000*60*60*24,

             })

         }
         if(data?.url === '/' ||data?.url === '/404' ){

            return data

         }








        return  data

     }catch (error){
         console.error(error)
     }


 }