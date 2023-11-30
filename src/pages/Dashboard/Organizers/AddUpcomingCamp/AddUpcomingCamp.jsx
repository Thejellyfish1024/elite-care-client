
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { Button } from "@mui/material";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddUpcomingCamp = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const onSubmit = async (data) => {
        // console.log(data);
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        // console.log('image', res?.data?.data?.url);

        let specializedServicesProvided = [data?.firstService];

        if (data?.secondService) {
            specializedServicesProvided.push(data?.secondService)
        }

        if (data?.thirdService) {
            specializedServicesProvided.push(data?.thirdService)
        }
        if (data?.forthService) {
            specializedServicesProvided.push(data?.forthService)
        }

        const newCamp = {
            organizerEmail: user?.email,
            campFees: parseFloat(data?.campFees),
            campName: data?.campName,
            description: data?.description,
            image: res?.data?.data?.url,
            scheduledDateTime: data?.scheduledDateTime,
            targetAudience: data?.targetAudience,
            venue: data?.venue,
            specializedServicesProvided: specializedServicesProvided
        }

        //  console.log('newCamp', newCamp);
        await axiosSecure.post('/upcoming-camps', newCamp)
            .then(res => {
                console.log(res.data);
                if (res?.data?.insertedId) {
                    reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully added upcoming camp",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className="flex justify-center p-5 ">
            <div>
                <h2 className="text-4xl font-bold text-center mb-10">Add Upcoming Camp</h2>
                <div className="lg:w-[900px] md:w-[700px]  md:p-12   rounded-md mb-16">
                    <form className=" p-4 lg:p-0" onSubmit={handleSubmit(onSubmit)}>
                        {/*  */}
                        <div className="flex flex-col md:flex-row gap-5 w-full">
                            <div className='mt-4 w-full'>
                                <h4 className='text-xl font-semibold '>Camp Name</h4>
                                <input type="text" {...register("campName", { required: true })} name="campName" placeholder='Name' className='py-3 pl-4 w-full border border-gray-500 mt-3 rounded-md' id="" />
                                {errors?.campName && <span className='text-red-500'>Camp name is required</span>}
                            </div>
                            <div className='mt-4 w-full'>
                                <h4 className='text-xl font-semibold '>Camp Fees</h4>
                                <input type="text" {...register("campFees", { required: true })} name="campFees" placeholder='Camp Fees' className='py-3 pl-4 w-full border border-gray-500 mt-3 rounded-md' id="" />
                                {errors?.campFees && <span className='text-red-500'>Camp Fees is required</span>}
                            </div>
                        </div>

                        {/*  */}
                        <div className="border border-gray-400 p-5 my-4">
                            <h4 className='text-xl font-semibold '>Specialized Services Provided</h4>
                            <ol className="list-decimal">
                                <li className="flex flex-col md:flex-row md:gap-5">
                                    <input type="text" {...register("firstService", { required: true })} name="firstService" placeholder='Add Service' className='py-2 pl-4 w-full border border-gray-500 mt-3 rounded-md' id="" />
                                    <input type="text" {...register("secondService")} name="secondService" placeholder="Add Service" className='py-2 pl-4 w-full border border-gray-500 mt-3 rounded-md' id="" />
                                </li>
                                <li className="flex flex-col md:flex-row md:gap-5">
                                    <input type="text" {...register("thirdService")} name="thirdService" placeholder='Add Service' className='py-2 pl-4 w-full border border-gray-500 mt-3 rounded-md' id="" />
                                    <input type="text" {...register("forthService")} name="forthService" placeholder="Add Service" className='py-2 pl-4 w-full border border-gray-500 mt-3 rounded-md' id="" />
                                </li>
                            </ol>
                            {errors?.firstService && <span className='text-red-500'>Have to give at least one service</span>}
                        </div>

                        {/*  */}
                        <div className="flex flex-col md:flex-row  gap-5 w-full">
                            <div className='mt-4 w-full'>
                                <h4 className='text-xl font-semibold '>Scheduled Date and Time</h4>
                                <input type="datetime-local" {...register("scheduledDateTime", { required: true })} name="scheduledDateTime" className='py-3 pl-4 w-full border border-gray-500 mt-3 rounded-md' id="" />
                                {errors?.scheduledDateTime && <span className='text-red-500'>Date is required</span>}
                            </div>

                            <div className='mt-4 w-full'>
                                <h4 className='text-xl font-semibold '> Target Audience</h4>
                                <input type="text" {...register("targetAudience", { required: true })} name="targetAudience" placeholder='Target Audience' className='py-3 pl-4 w-full border border-gray-500 mt-3 rounded-md' id="" />
                                {errors.targetAudience && <span className='text-red-500'>Target audience is required</span>}
                            </div>

                        </div>
                        {/*  */}
                        <div className='mt-4 w-full'>
                            <h4 className='text-xl font-semibold '>Location</h4>
                            <input type="text" {...register("venue", { required: true })} name="venue"
                                placeholder='Location' className='py-3 pl-4 w-full border border-gray-500 mt-3 rounded-md' id="" />
                            {errors?.venue && <span className='text-red-500'>Location is required</span>}
                        </div>
                        {/*  */}
                        <div className='mt-4 w-full'>
                            <h4 className='text-xl font-semibold '>Comprehensive Description</h4>
                            <textarea type="text" {...register("description", { required: true })} name="description"
                                placeholder='Description' className='py-3 h-40 pl-4 w-full border border-gray-500 mt-3 rounded-md' id="" />
                            {errors?.description && <span className='text-red-500'>Description is required</span>}
                        </div>
                        {/*  */}
                        <h4 className='text-xl font-semibold  mb-3'>Add Image</h4>
                        <div className="md:ml-4 w-fit">
                            <Button component="label"  variant="contained" startIcon={<CloudUploadIcon />}>

                                <input type="file" {...register("image", { required: true })} name="image" className="rounded-md w-3/4" id="" />
                            </Button>
                        </div>
                        <p>{errors?.image && <span className='text-red-500'>Image is required</span>}</p>


                        {/*  */}

                        <div className='text-center mt-10'>
                            <button className='hover:bg-[#52b788] bg-green-800 text-white md:w-1/2 p-2 w-full  font-bold rounded-full uppercase'>
                                Add Upcoming Camp
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default AddUpcomingCamp;
