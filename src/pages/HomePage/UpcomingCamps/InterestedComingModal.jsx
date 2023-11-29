/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Box, Modal } from "@mui/material";

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

const InterestedComingModal = ({professionalOpen, data, setProfessionalOpen, handleProfessionalClose}) => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()

    const { register, handleSubmit, formState: { errors },reset } = useForm()

    const onSubmit = (details) => {
        console.log('modal', details)
        const professionalInfo = {
            campId: data?._id,
            organizerEmail: data?.organizerEmail,
            email: user?.email,
            name: details?.name,
            professionalEmail : details?.professionalEmail,
            specialty : details?.specialty,
            phone : details?.phone
        }
        console.log('new info', professionalInfo);

        axiosSecure.post('/interested-professionals', professionalInfo)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registration Successful",
                    showConfirmButton: false,
                    timer: 2500
                });
                reset()
                setProfessionalOpen(false)
            })

    }
    
    return (
        <div>
            <Modal
                open={professionalOpen}
                onClose={handleProfessionalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form className="md:w-[600px] w-80 p-4 lg:p-0" 
                    onSubmit={handleSubmit(onSubmit)}>
                        {/*  */}
                        <div className="flex flex-col md:flex-row gap-5 w-full">
                            <div className='mt-4 w-full'>
                                <h4 className='text-xl font-semibold'>Name</h4>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder='Name' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                {errors.name && <span className='text-red-500'>Name is required</span>}
                            </div>
                            <div className='mt-4 w-full'>
                                <h4 className='text-xl font-semibold'>Specialization</h4>
                                <input type="text" {...register("specialty", { required: true })} name="specialty" placeholder='Specialization' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                {errors.specialty && <span className='text-red-500'>Specialization is required</span>}
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
                                <h4 className='text-xl font-semibold'>Email</h4>
                                <input readOnly type="email" {...register("professionalEmail", { required: true })} name="professionalEmail" value={user?.email} className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                {errors.professionalEmail && <span className='text-red-500'>Email is required</span>}
                            </div>
                            
                        </div>
                        {/*  */}
                       
                        {/*  */}
                        

                        <div className='text-end mt-10'>
                            <button className='hover:bg-[#52b788] bg-green-800 w-1/2 p-2 text-white font-bold rounded-full'>
                                Submit
                            </button>
                        </div>
                    </form>
                    <button className="bg-red-500 py-3 px-8 font-bold hover:bg-red-800 text-white rounded-md" onClick={handleProfessionalClose}>Close</button>
                </Box>
            </Modal>
        </div>
    );
};

export default InterestedComingModal;