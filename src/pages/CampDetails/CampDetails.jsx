import { Box, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const CampDetails = () => {
    const [camps, setCamps] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetch('/medicalCamps.json')
            .then(res => res.json())
            .then(data => setCamps(data))
    }, [])
    console.log(camps);

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <div className="relative flex min-h-[70vh] mt-10 w-full max-w-7xl mx-auto flex-row rounded-xl bg-white bg-clip-border text-gray-700 ">
                <div className="relative w-3/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none 
                shrink-0 rounded-xl bg-clip-border">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="image"
                        className="object-cover w-full h-full max-h-[70vh]"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="p-6 flex-grow">

                        <h6 className="block mb-4 font-sans  antialiased text-2xl font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                            {
                                camps[0]?.campName
                            }
                        </h6>
                        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                            {/* {camps[0]?.description} */}
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates earum quo inventore laudantium pariatur corrupti quas, non totam in voluptas. Amet nam, dolor debitis provident saepe ipsa ipsam sit optio ab dignissimos suscipit perferendis mollitia quod. Amet quis vitae aut fuga, blanditiis quaerat voluptatem, necessitatibus cupiditate excepturi porro debitis consequatur!
                        </p>
                        <div className="flex justify-between items-end">
                            <div className="font-bold">
                                <p className="text-lg text-pink-500">Audience : {camps[0]?.targetAudience}</p>
                                <p>Location : {camps[0]?.venue}</p>
                                <p className="font-semibold">Date : {camps[0]?.scheduledDateTime}</p>
                            </div>
                            <p className="text-lg font-bold text-pink-600">Camp Fee : ${camps[0]?.campFees}</p>
                        </div>
                    </div>
                    <div className="flex px-6 justify-center">
                        <button onClick={handleOpen} className="bg-pink-600 hover:bg-gray-800 py-3 w-full rounded-lg text-white uppercase text-lg font-semibold">Join Camp</button>
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/*  */}
                            <div className="flex gap-5 w-full">
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
                            <div className="flex gap-5 w-full">
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
                            <div className="flex gap-5 w-full">
                                <div className='mt-4 w-full'>
                                    <h4 className='text-xl font-semibold'>Address</h4>
                                    <input type="text" {...register("address", { required: true })} name="address" placeholder='Your Address' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                    {errors.address && <span className='text-red-500'>Address is required</span>}
                                </div>
                                <div className='mt-4 w-full'>
                                    <h4 className='text-xl font-semibold'>Camp Fee</h4>
                                    <input readOnly type="text" {...register("age", { required: true })} name="age" placeholder={`$${camps[0]?.campFees}`} className='py-3 pl-4 w-full border border-gray-300 font-bold mt-3 rounded-md' id="" />
                                    {errors.age && <span className='text-red-500'>Age is required</span>}
                                </div>
                            </div>
                            {/*  */}
                            <div className='mt-4 w-full'>
                                <h4 className='text-xl font-semibold'>Emergency Contact</h4>
                                <div className="flex items-center gap-5">
                                    <input type="text" {...register("emergency")} name="emergency" placeholder='Emergency Contact' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                    <p className="font-semibold">(Optional)</p>
                                </div>
                                {errors.address && <span className='text-red-500'>Address is required</span>}
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