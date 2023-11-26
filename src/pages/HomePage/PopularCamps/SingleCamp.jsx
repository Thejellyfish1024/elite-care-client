/* eslint-disable react/prop-types */


const SingleCamp = ({ camp }) => {
    const { campName, scheduledDateTime, specializedServicesProvided, healthcareProfessionalsInAttendance, targetAudience, campFees, venue } = camp
    return (
        <div className="flex justify-center p-2 md:p-0">
            <div className="lg:w-4/5 text-white mt-10 bg-gradient-to-r md:w-3/5">
                <h2 className=" bg-gradient-to-r from-[#f48c06] to-[#faa307] p-3 md:text-xl text-lg uppercase rounded-t-full font-bold text-center">
                    {campName}
                </h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgN8UVn7hUYf3GotsyGV_GDBqNe8viyQHU969R7XyprSdvlgpGOIHaPWwo4WWGAHLeoeI&usqp=CAU" className="w-full h-52" alt="" />
                <div className="flex justify-center px-6 -mt-5 z-30">
                    <p className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-center py-2 w-full rounded-full font-bold">On {scheduledDateTime} Sharp
                        <span className="block">Location : {venue}</span>
                    </p>
                </div>
                <div className="bg-gradient-to-r from-[#f48c06] to-[#faa307] flex justify-between md:justify-around -mt-5
                 pt-8 p-3 md:h-60 h-72">
                    <div className="space-y-2 ">
                        <h4 className="text-lg font-bold">Professionals</h4>
                        {
                            healthcareProfessionalsInAttendance?.map(professional => <div className="md:pl-4 list-disc" key={professional?.doctorName}>
                                <li className="font-bold">{professional?.doctorName}</li>
                                <p className="md:pl-6 text-sm">{professional?.specialty}</p>
                            </div>)
                        }
                    </div>
                    <div className="space-y-2 ">
                        <h4 className="font-bold">Services</h4>
                        {
                            specializedServicesProvided?.map(service => <div className="md:pl-4" key={service}>
                                <li className="md:font-bold font-medium ">{service}</li>
                            </div>)
                        }
                    </div>
                </div>
                <div className="flex justify-end -mt-16">
                    <p className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500
                     md:font-bold rounded-l-full md:w-64 w-56 p-3 text-center h-20 md:h-24 flex items-center">
                        Specially for {targetAudience}</p>
                </div>
                <div className="bg-gray-600 py-3 -mt-12">
                    <p className="md:pl-5 pl-2 font-bold">Camp Fee : ${campFees}</p>
                </div>
                <button type="button" className="bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500
                w-full text-center font-bold py-2 rounded-b-full">
                    See Camp Details
                </button>
            </div>
        </div>
    );
};

export default SingleCamp;