/* eslint-disable react/prop-types */
import { Box, Modal } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import useProfile from "../../../../hooks/useProfile";


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

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const FeedBackRow = ({ payment }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);

    const { user } = useAuth();
    const {data: profile } = useProfile(user?.email);

    const axiosSecure = useAxiosSecure();
   

    const { data: attendedCamp } = useQuery({
        queryKey: ['attendedCamp', payment?._id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/medical-camp/${payment?.campId}`)
            return res?.data;
        }
    })
    // console.log('camp details', attendedCamp);
    let reviewerImage = user?.photoURL;

    // console.log('profile image', profile);
    if(profile?.image){
        reviewerImage = profile?.image;
    }



    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (details) => {
        // console.log('modal', details, 'rating', value)
        const newReview = {
            review: details?.review,
            ratings: value,
            reviewTime : new Date().valueOf(),
            reviewDate : new Date(),
            reviewerName : user?.displayName,
            reviewerImage : reviewerImage,
            campId: attendedCamp?._id,
            campName: attendedCamp?.campName,
            scheduledDateTime: attendedCamp?.scheduledDateTime,
            venue: attendedCamp?.venue,
            campFees: attendedCamp?.campFees,
            organizerEmail: attendedCamp?.organizerEmail,
            email: user?.email,
        }
        console.log('new review', newReview);

        axiosSecure.post('/reviews', newReview)
            .then(res => {
                console.log(res.data);
                if (res?.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thanks for your review",
                        showConfirmButton: false,
                        timer: 2500
                    });
                    setOpen(false)
                }

            })

    }

    return (
        <>
            <tr>
                <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {attendedCamp?.campName}
                    </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {attendedCamp?.scheduledDateTime}
                    </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {attendedCamp?.venue}
                    </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        ${attendedCamp?.campFees}
                    </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                    <button onClick={handleOpen} className="bg-violet-600 py-2 px-4 rounded-lg
                 text-white font-bold hover:bg-violet-900">Review</button>
                </td>
            </tr>

            {/* modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form className="md:w-[600px] w-80 p-4 lg:p-0" onSubmit={handleSubmit(onSubmit)}>
                        {/*  */}

                        <div className='mt-4 w-full'>
                            <h4 className='text-xl font-semibold'>Review</h4>
                            <textarea type="text" {...register("review", { required: true })} name="review" placeholder='Share your review' className='py-3 h-24 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                            {errors.review && <span className='text-red-500'>Review is required</span>}
                        </div>
                        <div className='mt-4 w-full'>
                            <h4 className='text-xl font-semibold'>Ratings</h4>
                            <Box
                                sx={{
                                    width: 200,
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Rating
                                    name="hover-feedback"
                                    value={value}
                                    precision={0.5}
                                    getLabelText={getLabelText}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    onChangeActive={(event, newHover) => {
                                        setHover(newHover);
                                    }}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                                {value !== null && (
                                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                )}
                            </Box>
                        </div>



                        <div className='text-end mt-10'>
                            <button className='hover:bg-[#52b788] bg-green-800 w-1/2 p-2 text-white font-bold rounded-full'>
                                Submit
                            </button>
                        </div>
                    </form>
                    <button className="bg-red-500 py-3 px-8 font-bold hover:bg-red-800 text-white rounded-md" onClick={handleClose}>Close</button>
                </Box>
            </Modal>
        </>
    );
};

export default FeedBackRow;