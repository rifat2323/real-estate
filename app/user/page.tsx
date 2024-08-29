import {varifyToken} from "@/lib/action";
import {redirect} from "next/navigation";
import Image from "next/image";

const getData = async (email:string)=>{
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/user/api?email=${email}`,{cache:"no-store"});
        return await response.json();

    }catch (error){
        console.log(error);
    }
}

const page = async () => {
    const token:string = await  varifyToken()
    if (!token){
        redirect('/login');
    }

 const data = await  getData(token)


    return (
        <div className={'flex flex-col w-full h-fit py-4 justify-center items-center md:items-start md:flex-row md:justify-around gap-2.5'}>
          <div className={'max-w-52 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-h-52 w-full md:w-[40%]  rounded-[50%]'}>
              <Image src={data?.Image} alt={data?.Name} width={700} height={700} className={'w-full h-full rounded-[50%] aspect-square'}/>

          </div>
            <div className={ 'flex justify-center w-fit md:w-[55%]  items-center flex-wrap gap-1.5 '}>
                <input type="text" id="disabled-input" aria-label="disabled input"
                       className="mb-6 w-fit bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-2.5 px-1.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={data?.Name} disabled/>
                <input type="text" id="disabled-input" aria-label="disabled input"
                       className="mb-6 w-fit  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-2.5 px-1.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={data?.Last_Name} disabled/>
                <input type="text" id="disabled-input" aria-label="disabled input"
                       className="mb-6 w-fit  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-2.5 px-1.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={data?.Email} disabled/>
                <input type="text" id="disabled-input" aria-label="disabled input"
                       className="mb-6 w-fit  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-2.5 px-1.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={data?.City} disabled/>
                <input type="text" id="disabled-input" aria-label="disabled input"
                       className="mb-6 w-fit  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-2.5 px-1.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={data?.Country} disabled/>
            </div>


        </div>
    );
};
export default page;
