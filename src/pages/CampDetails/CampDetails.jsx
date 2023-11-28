import { Box, Modal } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const CampDetails = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const id = useParams()?.campId
    

    const {data} = useQuery({
        queryKey:[id],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/camp-details/${id}`)
            return res.data;
        }
    })

    // console.log('data', data);

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (details) => {
        console.log('modal' , details)
        const newRegister = {
            campId : data?._id,
            email : user?.email,
            name : details?.name,
            age : details?.age,
            address : details?.address,
            fee : details?.fee,
            gender : details?.gender,
            phone : details?.phone,
            emergency : details?.emergency
        }
        console.log('new form', newRegister);

        axiosSecure.post('/registered-participants', newRegister)
        .then(res =>{
            console.log(res.data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registration Successful",
                showConfirmButton: false,
                timer: 1500
            });
            setOpen(false)
        })

    }

    return (
        <div>
            <div className="relative flex flex-col lg:flex-row min-h-[70vh] mt-10 w-full max-w-7xl mx-auto rounded-xl bg-white bg-clip-border text-gray-700 ">
                <div className="relative p-2 md:p-4 lg:p-0 w-full lg:w-3/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none 
                shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={data?.image}
                        alt="image"
                        className="object-cover w-full h-full max-h-[70vh]"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="p-6 flex-grow">

                        <h6 className="block mb-4 font-sans  antialiased text-2xl font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                            {
                                data?.campName
                            }
                        </h6>
                        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                            {data?.description}
                        </p>
                        <div className="flex flex-col lg:flex-row justify-between lg:items-end">
                            <div className="font-bold">
                                <p className="text-lg text-pink-500">Audience : {data?.targetAudience}</p>
                                <p>Location : {data?.venue}</p>
                                <p className="font-semibold">Date : {data?.scheduledDateTime}</p>
                            </div>
                            <p className="text-lg font-bold mt-3 lg:mt-0 text-pink-600">Camp Fee : ${data?.campFees}</p>
                        </div>
                    </div>
                    <div className="flex px-6 justify-center">
                        <button disabled={user ? false : true} onClick={handleOpen} className={` py-3 w-full rounded-lg text-white uppercase text-lg font-semibold ${user ? 'bg-pink-600 hover:bg-gray-800' : 'bg-slate-300'}
                        `}>Join Camp</button>
                    </div>
                </div>
            </div>
            <div>
                <Modal
                    open={open}
                    // onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <form className="md:w-[600px] w-80 p-4 lg:p-0" onSubmit={handleSubmit(onSubmit)}>
                            {/*  */}
                            <div className="flex flex-col md:flex-row gap-5 w-full">
                                <div className='mt-4 w-full'>
                                    <h4 className='text-xl font-semibold'>Name</h4>
                                    <input type="text" {...register("name", { required: true })} name="name" placeholder='Name' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                    {errors.name && <span className='text-red-500'>Name is required</span>}
                                </div>
                                <div className='mt-4 w-full'>
                                    <h4 className='text-xl font-semibold'>Age</h4>
                                    <input type="text" {...register("age", { required: true })} name="age" placeholder='Enter your age' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                    {errors.age && <span className='text-red-500'>Age is required</span>}
                                </div>
                            </div>
                            {/*  */}
                            <div className="flex flex-col md:flex-row  gap-5 w-full">
                                <div className='mt-4 w-full'>
                                    <h4 className='text-xl font-semibold'>Number</h4>
                                    <input type="text" {...register("phone", { required: true })} name="phone" placeholder='Phone Number' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                    {errors.phone && <span className='text-red-500'>Phone Number is required</span>}
                                </div>
                                <div className='mt-4 w-full'>
                                    <h4 className='text-xl font-semibold'>Gender</h4>
                                    <select name="gender" defaultValue='male' {...register("gender", { required: true })} className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md">
                                        <option value='male'>Male</option>
                                        <option value='female'>Female</option>
                                    </select>
                                </div>
                            </div>
                            {/*  */}
                            <div className="flex flex-col md:flex-row  gap-5 w-full">
                                <div className='mt-4 w-full'>
                                    <h4 className='text-xl font-semibold'>Address</h4>
                                    <input type="text" {...register("address", { required: true })} name="address" placeholder='Your Address' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                    {errors.address && <span className='text-red-500'>Address is required</span>}
                                </div>
                                <div className='mt-4 w-full'>
                                    <h4 className='text-xl font-semibold'>Camp Fee</h4>
                                    <input readOnly value={data?.campFees} type="text" {...register("fee")} name="fee"  className='py-3 pl-4 w-full border border-gray-300 font-bold mt-3 rounded-md' id="" />
                                </div>
                            </div>
                            {/*  */}
                            <div className='mt-4 w-full'>
                                <h4 className='text-xl font-semibold'>Emergency Contact</h4>
                                <div className="flex items-center gap-5">
                                    <input type="text" {...register("emergency")} name="emergency" placeholder='Emergency Contact' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                    <p className="font-semibold">(Optional)</p>
                                </div>
                            </div>

                            <div className='text-end mt-10'>
                                <button className='hover:bg-[#52b788] bg-green-800 w-1/2 p-2 text-white font-bold rounded-full'>
                                    Register
                                </button>
                            </div>
                        </form>
                        <button className="bg-red-500 py-3 px-8 font-bold hover:bg-red-800 text-white rounded-md" onClick={handleClose}>Close</button>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default CampDetails;