/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import useProfessionalCount from "../../../hooks/useProfessionalCount";
import useUpcomingRegistrationCount from "../../../hooks/useUpcomingRegistrationCount";


const UpcomingCampCard = ({ camp }) => {
    const {data} = useUpcomingRegistrationCount(camp?._id)
    const {data: professionalCount} = useProfessionalCount(camp?._id)
    console.log('prof', professionalCount);
    return (
        <div>
            <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-gray-200 bg-clip-border text-gray-700 shadow-md">
                <h3 className="w-full text-xl font-bold italic text-center bg-gray-800 text-white py-2 rounded-t-md">Coming Soon</h3>
                <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                    <img
                        src={camp?.image}
                        className="w-full h-48"
                    />
                    <p className="absolute bg-black bottom-0 right-0 text-white rounded-tl-lg font-semibold p-2">
                        Camp Fee : ${camp?.campFees}</p>
                </div>
                <div className="flex justify-between font-semibold p-4 text-red-500">
                    <p>Participants : {data?.totalUpcomingRegistration}</p>
                    <p>Interested Professionals : {professionalCount?.totalProfessionals}</p>
                </div>
                <div className="px-4 pb-3">
                    <h4 className="block font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900 uppercase text-purple-500">
                        {camp?.campName}
                    </h4>
                    <div className="mt-3 flex gap-6">
                        <h4 className="text-lg font-bold uppercase">Services : </h4>
                        <ul className=" mt-2 font-semibold space-y-1">
                            {
                                camp?.specializedServicesProvided?.map((service, index) =>
                                    <li key={service}> {index + 1}. {service}</li>)
                            }
                        </ul>
                    </div>
                    <p className="font-semibold text-lg my-3">Specially For : <span className="text-red-600">{camp?.targetAudience}</span></p>
                    <div className="flex justify-end">
                        <Link to={`/upcoming-camp-details/${camp?._id}`}><button className="bg-black text-white font-bold py-2 px-8 rounded-lg">Details</button></Link>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default UpcomingCampCard;