import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { Button } from "@mui/material";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddCamp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
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

        if(data?.secondService){
            specializedServicesProvided.push(data?.secondService)
        }
        
        if(data?.thirdService){
            specializedServicesProvided.push(data?.thirdService)
        }
        if(data?.forthService){
            specializedServicesProvided.push(data?.forthService)
        }

        const newCamp = {
            campFees : parseFloat(data?.campFees),
            campName : data?.campName,
            description : data?.description,
            image :  res?.data?.data?.url,
            scheduledDateTime : data?.scheduledDateTime,
            targetAudience : data?.targetAudience,
            venue : data?.venue,
            healthcareProfessionalsInAttendance : [
                {
                    doctorName : data?.firstDoctor,
                    specialty : data?.firstSpecialty
                },
                {
                    doctorName : data?.secondDoctor,
                    specialty : data?.secondSpecialty
                },
            ],
            specializedServicesProvided : specializedServicesProvided
         }

        //  console.log('newCamp', newCamp);
        await axiosSecure.post('/medical-camps', newCamp)
        .then(res => {
            console.log(res.data);
        })
    }
    return (
        <div className=" pl-16">
            <h2 className="text-4xl font-bold text-center my-10">Add a Camp</h2>
            <div className="w-[800px] p-12 bg-gray-600   rounded-md mb-16">
                <form className=" p-4 lg:p-0" onSubmit={handleSubmit(onSubmit)}>
                    {/*  */}
                    <div className="flex flex-col md:flex-row gap-5 w-full">
                        <div className='mt-4 w-full'>
                            <h4 className='text-xl font-semibold text-white'>Camp Name</h4>
                            <input type="text" {...register("campName", { required: true })} name="campName" placeholder='Name' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                            {errors?.campName && <span className='text-red-500'>Camp name is required</span>}
                        </div>
                        <div className='mt-4 w-full'>
                            <h4 className='text-xl font-semibold text-white'>Camp Fees</h4>
                            <input type="text" {...register("campFees", { required: true })} name="campFees" placeholder='Camp Fees' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                            {errors?.campFees && <span className='text-red-500'>Camp Fees is required</span>}
                        </div>
                    </div>
                    {/*  */}
                    <div className="border border-white p-5 my-4">
                        <h4 className='text-xl font-semibold text-white'>Healthcare Professionals</h4>
                        <ol className="list-decimal">
                            <li className="flex gap-5">
                                <input type="text" {...register("firstDoctor", { required: true })} name="firstDoctor" placeholder='Add doctor name' className='py-2 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                
                                <input type="text" {...register("firstSpecialty", { required: true })} name="firstSpecialty" placeholder="Add doctor's specialty" className='py-2 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                
                            </li>
                            <li className="flex gap-5">
                                <input type="text" {...register("secondDoctor", { required: true })} name="secondDoctor" placeholder='Add doctor name' className='py-2 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                
                                <input type="text" {...register("secondSpecialty", { required: true })} name="secondSpecialty" placeholder="Add doctor's specialty" className='py-2 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                            </li>
                        </ol>
                    </div>
                    {/*  */}
                    <div className="border border-white p-5 my-4">
                        <h4 className='text-xl font-semibold text-white'>Specialized Services Provided</h4>
                        <ol className="list-decimal">
                            <li className="flex gap-5">
                                <input type="text" {...register("firstService", { required: true })} name="firstService" placeholder='Add Service' className='py-2 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                <input type="text" {...register("secondService")} name="secondService" placeholder="Add Service" className='py-2 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                            </li>
                            <li className="flex gap-5">
                                <input type="text" {...register("thirdService")} name="thirdService" placeholder='Add Service' className='py-2 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                <input type="text" {...register("forthService")} name="forthService" placeholder="Add Service" className='py-2 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                            </li>
                        </ol>
                    </div>

                    {/*  */}
                    <div className="flex flex-col md:flex-row  gap-5 w-full">
                        <div className='mt-4 w-full'>
                            <h4 className='text-xl font-semibold text-white'>Scheduled Date and Time</h4>
                            <input type="datetime-local" {...register("scheduledDateTime", { required: true })} name="scheduledDateTime" className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                            {errors?.scheduledDateTime && <span className='text-red-500'>Date is required</span>}
                        </div>

                        <div className='mt-4 w-full'>
                            <h4 className='text-xl font-semibold text-white'> Target Audience</h4>
                            <input type="text" {...register("targetAudience", { required: true })} name="targetAudience" placeholder='Target Audience' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                            {errors.targetAudience && <span className='text-red-500'>Target audience is required</span>}
                        </div>

                    </div>
                    {/*  */}
                    <div className='mt-4 w-full'>
                        <h4 className='text-xl font-semibold text-white'>Location</h4>
                        <input type="text" {...register("venue", { required: true })} name="venue"
                            placeholder='Location' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                        {errors?.venue && <span className='text-red-500'>Location is required</span>}
                    </div>
                    {/*  */}
                    <div className='mt-4 w-full'>
                        <h4 className='text-xl font-semibold text-white'>Comprehensive Description</h4>
                        <textarea type="text" {...register("description", { required: true })} name="description"
                            placeholder='Description' className='py-3 h-40 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                        {errors?.description && <span className='text-red-500'>Description is required</span>}
                    </div>
                    {/*  */}
                    <h4 className='text-xl font-semibold text-white mb-3'>Add Image</h4>
                    <Button component="label" sx={{ ml: '16px'}} variant="contained" startIcon={<CloudUploadIcon />}>

                        <input type="file" {...register("image", { required: true })} name="image" className="rounded-md" id="" />
                    </Button>
                    <p>{errors?.image && <span className='text-red-500'>Image is required</span>}</p>


                    {/*  */}

                    <div className='text-center mt-10'>
                        <button className='hover:bg-[#52b788] bg-green-800 w-1/2 p-2 text-white font-bold rounded-full uppercase'>
                            Add Camp
                        </button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default AddCamp;


// , Image (Upload camp image using ImgBB or
//     other hosting platform), , , , ,,, .