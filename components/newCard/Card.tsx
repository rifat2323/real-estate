import SmoothImage from "@/components/CoverImage/SmoothImage";
import Link from 'next/link'
interface  Obj {
    Image:string,
    Title:string,
    _id:string
}

const Cards = ({obj}:{obj:Obj}) =>{
	return (



        <div className={'w-[250px] md:w-[350px] flex flex-col dark:bg-stone-950 justify-center items-center max-h-[350px] rounded-lg shadow-md'}>
       
            <SmoothImage url={obj?.Image}/>
            <Link href={`/houses/${obj?._id}`} className={'flex w-full justify-between py-1.5 px-1 -translate-y-1.5 items-center  '}>
                <h1 className={'text-base md:text-xl truncate font-medium font-sans '}>{obj?.Title}</h1>

            </Link>
       
        </div>
	)
}
export default Cards;