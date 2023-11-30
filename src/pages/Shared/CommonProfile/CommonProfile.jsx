import { useForm } from 'react-hook-form';
import { FaFacebook, FaInstagram, FaLinkedin, FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useProfile from '../../../hooks/useProfile';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const CommonProfile = () => {
    const { register, handleSubmit } = useForm()
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { data: profile, refetch } = useProfile(user?.email)

    console.log('profile', profile);

    const onSubmit = async (data) => {
        // console.log(data)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Save it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                let image = profile?.image || null;
                // console.log('key', image_hosting_key);
                if (data?.image[0]) {
                    const imageFile = { image: data.image[0] }
                    const res = await axiosPublic.post(image_hosting_api, imageFile, {
                        headers: {
                            'content-type': 'multipart/form-data'
                        }
                    })
                    image = res?.data?.data?.url;
                    console.log(res?.data?.data?.url);
                }

                const updatedProfile = {
                    name: data?.name || profile?.name,
                    email: data?.email || profile?.email,
                    number: data?.number || profile?.number,
                    image: image
                }
                console.log(updatedProfile);

                const updateRes = await axiosSecure.put(`/users/${user?.email}`, updatedProfile)
                console.log(updateRes.data);
                if (updateRes?.data?.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Updated!",
                        text: "Your profile has been updated.",
                        icon: "success"
                    });
                }

            }
        });



    }


    return (
        <div className="">
            <div className="my-6">
                <h2 className="text-4xl font-bold text-center mb-10">My Profile</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="md:flex gap-8 lg:w-3/5 w-4/5 mx-auto items-center">
                    <div className="flex flex-col items-center">
                        {
                            profile?.image ?
                                <img className='w-60 h-60 rounded-full' src={profile?.image} alt="not found" />
                                :
                                <div>
                                    {
                                        user?.photoURL ?
                                            <img className='w-60 h-60 rounded-full' src={user?.photoURL} alt="not found" />
                                            :
                                            <FaUserCircle className='text-9xl'></FaUserCircle>

                                    }

                                </div>
                        }
                        <div className="flex justify-center gap-4 mt-4">
                            <FaFacebook size={30}></FaFacebook>
                            <FaInstagram size={30}></FaInstagram>
                            <FaLinkedin size={30}></FaLinkedin>
                        </div>
                        <div className="mt-4 space-y-2">
                            <p className="font-bold">Change Profile Picture</p>
                            <p className='p-2 bg-slate-300 rounded-md'>
                                <input type="file" {...register("image")} name="image" id="" />
                            </p>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <div className='mt-4'>
                            <div className='mt-4'>
                                <h4 className='text-xl font-semibold'>Your Name</h4>
                                <input type="text" defaultValue={profile?.name} {...register("name")} name="name" className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                            </div>
                            <div className="mt-4">
                                <h4 className='text-xl font-semibold'>Your Email</h4>
                                <input type="email" {...register("email")} name="email" defaultValue={profile?.email} className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                            </div>
                            <div className="mt-4">
                                <h4 className='text-xl font-semibold'>Phone Number</h4>
                                <input type="" {...register("number")} defaultValue={profile?.number} name="number" placeholder={!profile?.number && 'Enter your number'} className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                            </div>
                        </div>

                        <div className='text-center mt-10'>
                            <button className='hover:bg-[#52b788] bg-green-800 w-full p-2 text-white font-bold rounded-full'>
                                Update
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default CommonProfile;






