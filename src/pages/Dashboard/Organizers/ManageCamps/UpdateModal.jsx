/* eslint-disable react/prop-types */
import { Box, Modal } from "@mui/material";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


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

const UpdateModal = ({ open, setOpen, camp, refetch }) => {

    const axiosSecure = useAxiosSecure();

    const handleClose = () => setOpen(false);
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async(data) => {
        // console.log('modal', data)
        const updatedCamp = {
            campFees: parseFloat(data?.campFees),
            campName: data?.campName,
            description: data?.description,
            targetAudience: data?.targetAudience,
            venue: data?.venue,
            healthcareProfessionalsInAttendance: [
                {
                    doctorName: data?.firstDoctor,
                    specialty: data?.firstSpecialty
                },
                {
                    doctorName: data?.secondDoctor,
                    specialty: data?.secondSpecialty
                },
            ],
        }
        // console.log('new camp', newCamp);
        const updateRes = await axiosSecure.patch(`/medical-camps/${camp._id}`, updatedCamp)
        console.log(updateRes.data);
        if (updateRes?.data?.modifiedCount > 0) {
            handleClose()
            refetch()
            Swal.fire({
                title: "Updated!",
                text: "Camp has been updated.",
                icon: "success"
            });
        }
    }
   

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form className="md:w-[600px] w-80 p-4 lg:p-0" onSubmit={handleSubmit(onSubmit)}>
                        {/*  */}
                        <div className="flex flex-col md:flex-row gap-5 w-full">
                            <div className='mt-4 w-full'>
                                <h4 className='text-xl font-semibold'>Camp Name</h4>
                                <input type="text" defaultValue={camp?.campName} {...register("campName", { required: true })} name="campName" className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                {errors.campName && <span className='text-red-500'>Camp Name is required</span>}
                            </div>
                            <div className='mt-4 w-full'>
                                <h4 className='text-xl font-semibold'>Camp Fee</h4>
                                <input type="text" defaultValue={camp?.campFees} {...register("campFees", { required: true })} name="campFees" placeholder='Enter camp fee' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                {errors.campFees && <span className='text-red-500'>Camp Fee is required</span>}
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex flex-col md:flex-row  gap-5 w-full">
                            <div className='mt-4 w-full'>
                                <h4 className='text-xl font-semibold'>Location</h4>
                                <input type="text" defaultValue={camp?.venue} {...register("venue", { required: true })} name="venue" placeholder='Location' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                {errors.venue && <span className='text-red-500'>Location is required</span>}
                            </div>
                            <div className='mt-4 w-full'>
                                <h4 className='text-xl font-semibold'>Target Audience</h4>
                                <input type="text" defaultValue={camp?.targetAudience} {...register("targetAudience", { required: true })} name="targetAudience" placeholder='Target audience' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                {errors.targetAudience && <span className='text-red-500'>Target audience is required</span>}
                            </div>
                        </div>
                        {/*  */}
                        <div className="border border-white p-5 my-4">
                            <h4 className='text-xl font-semibold'>Healthcare Professionals</h4>
                            <ol className="list-decimal">
                                <li className="flex flex-col md:flex-row md:gap-5 mb-4 md:mb-0">
                                    <input type="text" defaultValue={camp?.healthcareProfessionalsInAttendance[0]?.doctorName} {...register("firstDoctor", { required: true })} name="firstDoctor" placeholder='Add doctor name' className='py-2 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />

                                    <input type="text" defaultValue={camp?.healthcareProfessionalsInAttendance[0]?.specialty}  {...register("firstSpecialty")} name="firstSpecialty" placeholder="Add doctor's specialty" className='py-2 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />

                                </li>
                                <li className="flex md:gap-5  flex-col md:flex-row">
                                    <input type="text" defaultValue={camp?.healthcareProfessionalsInAttendance[1]?.doctorName} {...register("secondDoctor")} name="secondDoctor" placeholder='Add doctor name' className='py-2 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />

                                    <input type="text" defaultValue={camp?.healthcareProfessionalsInAttendance[1]?.specialty} {...register("secondSpecialty")} name="secondSpecialty" placeholder="Add doctor's specialty" className='py-2 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                </li>
                            </ol>
                        </div>

                        {/*  */}
                        <div className='mt-4 w-full'>
                            <h4 className='text-xl font-semibold'>Description</h4>
                            <textarea type="text" defaultValue={camp?.description} {...register("description")} name="description" placeholder='Description' className='py-3 pl-4 w-full h-20 border border-gray-300 mt-3 rounded-md' id="" />
                            {errors.description && <span className='text-red-500'>Description is required</span>}

                        </div>

                        <div className='text-end mt-10'>
                            <button className='hover:bg-[#52b788] bg-green-800 w-1/2 p-2 text-white font-bold rounded-full'>
                                Save Changes
                            </button>
                        </div>
                    </form>
                    <button className="bg-red-500 py-3 px-8 font-bold hover:bg-red-800 text-white rounded-md" onClick={handleClose}>Close</button>
                </Box>
            </Modal>
        </div>
    );
};

export default UpdateModal;