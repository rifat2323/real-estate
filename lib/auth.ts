import jwt from  'jsonwebtoken'
import {cookies} from "next/headers";
type USer = {
    Name: string;
    Email: string;
    Password: string;
    Mobile_Number: string;
    Last_Name: string;
    City: string;
    Country: string;
    Current_Balance: number;

}
export const  Regis = async (details:USer)=>{
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/user/api/reg`,{
            method:"POST",
            body:JSON.stringify(details)
        })
        const data = await response.json();
       return data.url
        

    }catch(error){
        console.log(error)
        return error
    }
}

export  const createToken = async (email:string)=>{
    try{

        const accessToken =  jwt.sign( {email},process.env.ACCESS_KEY! ,{expiresIn:"1d"})
        const refreshToken =  jwt.sign( {email},process.env.REFRESH_KEY! ,{expiresIn:"2d"})
        return {
            accessToken,
            refreshToken
        }
    }catch (e) {
        console.log(e)
    }
}

export const varifyToken = async  ()=>{
    "use server"
   const token =  cookies().get("refreshToken")?.value
    if(!token) return  null
    try{
     const decode =  jwt.verify(token, process.env.REFRESH_KEY!);
     return  decode?.email

    }catch (err:any){
        if (err instanceof jwt.JsonWebTokenError) {
            console.log(`JWT Error: ${err.message}`);
        } else {
            console.log(`Other Error: ${err.message}`);
        }
        return null;
    }
}



