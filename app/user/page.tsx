import {varifyToken} from "@/lib/action";
import {redirect} from "next/navigation";

const page = async () => {
    const token = await  varifyToken()
    if (!token){
        redirect('/login');
    }

    return (
        <div>page</div>
    );
};
export default page;
