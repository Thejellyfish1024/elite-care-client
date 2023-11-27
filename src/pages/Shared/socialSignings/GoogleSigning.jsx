import { FcGoogle } from "react-icons/fc";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const GoogleSigning = () => {

    const { googleSigning } = useAuth();
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const handleGoogle = () => {
        googleSigning()
            .then(async (result) => {
                console.log(result.user);
                await axiosSecure.post('/users', {name : result?.user?.displayName, email : result?.user?.email})
                .then(res =>{
                    console.log(res.data);
                    navigate('/')
                })
                toast.success('Successfully logged in')

                navigate(location?.state || '/')

            })
            .catch(error => {
                console.log(error);
                toast.error(`${error.message}`)
            })
    }

    return (
        <div className="text-center mt-4">
            <button onClick={handleGoogle} className="flex gap-5 hover:bg-[#52b788] font-semibold items-center justify-center p-2 rounded-full w-full border-2 
            border-[#52b788]">
                <FcGoogle className="text-2xl"></FcGoogle>
                 <span>Continue With Google</span>
            </button>
        </div>
    );
};

export default GoogleSigning;