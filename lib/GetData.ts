export const Data = async (url:string)=>{
    try{
 
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/${url}`,{next:{revalidate:1500}})
      const data = await response.json()
      return data
  
    }catch(error){
      console.log(error)
      return []
    }
  }