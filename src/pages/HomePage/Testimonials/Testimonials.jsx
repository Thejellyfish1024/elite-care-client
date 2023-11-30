/* eslint-disable react/no-unescaped-entities */

// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Rating } from '@mui/material';

const Testimonials = () => {

    const axiosPublic = useAxiosPublic();

    const { data: testimonials } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews')
            return res?.data;
        }
    })
    console.log('reviews', testimonials);

    return (
        <div className='max-w-7xl mx-auto my-16'>
            <h2 className='text-4xl font-bold text-center my-16'>Testimonials</h2>
            <Swiper navigation={true} modules={[Navigation]} classNameName="mySwiper">

                {
                    testimonials?.map(testimonial => <SwiperSlide key={testimonial?._id}>
                        <div className='flex justify-center'>
                            <div
                                className="relative bg-[#457b9d] py-5 px-10 flex w-3/4 flex-col rounded-xl bg-clip-border text-white shadow-none">
                                <div className='mb-5'>
                                    <h3 className='text-3xl font-semibold italic mb-2'>Participants Testimonials</h3>
                                    <Rating sx={{ color: 'orange' }} name="read-only" value={testimonial?.ratings} readOnly />
                                </div>

                                <h4 className='text-lg font-bold mb-2'>Camp Name : {testimonial?.campName}</h4>
                                <div className="p-0 pl-6 mb-6">
                                    <p className="block  w-3/5 text-base antialiased  leading-relaxed text-inherit">
                                        {testimonial?.review}
                                    </p>
                                </div>
                                <div className='flex justify-end'>
                                    <div
                                        className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden bg-transparent shadow-none rounded-xl bg-clip-border">
                                        <img src={testimonial?.reviewerImage}
                                            className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
                                        <div className="flex w-full flex-col gap-0.5">
                                            <h5
                                                className="block text-xl  font-semibold  ">
                                                {testimonial?.reviewerName}
                                            </h5>
                                            <p>{testimonial?.reviewDate}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
}

export default Testimonials;
