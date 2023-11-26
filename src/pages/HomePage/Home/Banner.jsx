import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <div className="">
            <Carousel className="text-center">
                {/* first */}
                <div className=" h-[85vh]" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/1432210844/photo/doctor-applying-vaccine-on-a-child-in-a-sheltering.jpg?s=2048x2048&w=is&k=20&c=QLnXf2Ui3vekoy4kqz1FdJ0fLfxdgrioKgcDBTWb3KE=)', backgroundRepeat: 'no-repeat', backgroundSize: '100vw 85vh' }}>
                    <div className='bg-[#31303099] text-white h-full p-5 md:p-0 rounded-md flex flex-col justify-center items-center'>
                        <h2 className=' md:text-4xl text-2xl lg:w-2/5 md:w-3/5  font-bold'>Witness the Heartwarming Impact of Our Past Medical Camps</h2>
                        <p className='lg:w-1/2 md:w-4/5 md:text-xl font-medium text-center mt-4'>From Lifesaving Interventions to Community Empowerment, Each Event Leaves a Lasting Mark</p>
                    </div>
                </div>

                {/* second */}
                <div className=" h-[85vh]" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1683141168204-7e5f85e820bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lZGljYWwlMjBjYW1wfGVufDB8fDB8fHww)', backgroundRepeat: 'no-repeat', backgroundSize: '100vw 85vh' }}>
                    <div className='bg-[#3c353599] text-white h-full p-5 md:p-0 rounded-md flex flex-col justify-center items-center'>
                        <h2 className=' md:text-4xl text-2xl lg:w-2/5 md:w-3/5  font-bold'>From Checkups to Cheers</h2>
                        <p className='lg:w-1/2 md:w-4/5 md:text-xl font-medium text-center mt-4'>Reflect on the Success Stories That Define Our Medical Camps, Showcasing Moments of Joy, Healing, and Healthcare Excellence</p>
                    </div>
                </div>
                {/* third */}
                <div className=" h-[85vh]" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/517470809/photo/white-rescue-control-centre-tent-with-camp-bed.jpg?s=2048x2048&w=is&k=20&c=1HaptHwV4hbc6zTgu2iYrylFsdFg0JGgmRSPaisuPj8=)', backgroundRepeat: 'no-repeat', backgroundSize: '100vw 85vh' }}>
                    <div className='bg-[#31303099] text-white h-full p-5 md:p-0 rounded-md flex flex-col justify-center items-center'>
                        <h2 className=' md:text-4xl text-2xl lg:w-2/5 md:w-3/5  font-bold'>Wellness at Your Fingertips</h2>
                        <p className='lg:w-1/2 md:w-4/5 md:text-xl font-medium text-center mt-4'> Discover the Future of Medical Camp Coordination with Our User-Friendly Platform.</p>
                    </div>
                </div>
                {/* fourth */}
                <div className=" h-[85vh]" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/1395923150/photo/young-female-refugee-with-son-looking-at-clinician-making-notes-in-document.jpg?s=2048x2048&w=is&k=20&c=jvGn438RnapD2Wq2VR1jF5u0yEhDIuplR6jn30ZH7ro=)', backgroundRepeat: 'no-repeat', backgroundSize: '100vw 85vh' }}>
                    <div className='bg-[#3c353599] text-white h-full p-5 md:p-0 rounded-md flex flex-col justify-center items-center'>
                        <h2 className=' md:text-4xl text-2xl lg:w-2/5 md:w-3/5  font-bold'>Caring Together</h2>
                        <p className='lg:w-1/2 md:w-4/5 md:text-xl font-medium text-center mt-4'>Elevate Your Medical Camp Experience with Our Innovative Management Solutions</p>
                    </div>
                </div>
                {/* fifth */}
                <div className=" h-[85vh]" style={{ backgroundImage: 'url(https://cdn.dribbble.com/users/26059/screenshots/6090071/media/de0320fb615b5434d7b62066a9e3543a.jpg?resize=800x600&vertical=center)', backgroundRepeat: 'no-repeat', backgroundSize: '100vw 85vh', }}>
                    <div className='bg-[#2c2a2a99] text-white h-full p-5 md:p-0 rounded-md flex flex-col justify-center items-center'>
                        <h2 className=' md:text-4xl text-2xl lg:w-2/5 md:w-3/5  font-bold'>Your Health, Our Priority</h2>
                        <p className='lg:w-1/2 md:w-4/5 md:text-xl font-medium text-center mt-4'>Navigate Seamless Medical Camps with Our Intuitive Management Platform</p>
                    </div>
                </div>

            </Carousel>

        </div>
    );
};

export default Banner;