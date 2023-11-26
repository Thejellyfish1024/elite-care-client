import { useEffect, useState } from "react";


const CampDetails = () => {

    const [camps, setCamps] = useState([]);

    useEffect(() => {
        fetch('/medicalCamps.json')
            .then(res => res.json())
            .then(data => setCamps(data))
    }, [])
    console.log(camps);

    return (
        <div>
            <div className="relative flex min-h-[70vh] mt-10 w-full max-w-7xl mx-auto flex-row rounded-xl bg-white bg-clip-border text-gray-700 ">
                <div className="relative w-3/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none 
                shrink-0 rounded-xl bg-clip-border">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="image"
                        className="object-cover w-full h-full"
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
                            {camps[0]?.description}
                        </p>
                        <div className="font-bold">
                            <p className="text-lg text-pink-500">Audience : {camps[0]?.targetAudience}</p>
                            <p>Location : {camps[0]?.venue}</p>
                            <p className="font-semibold">Date : {camps[0]?.scheduledDateTime}</p>
                        </div>
                    </div>
                    <div className="flex px-6 justify-center">
                        <button className="bg-pink-600 hover:bg-gray-800 py-3 w-full rounded-lg text-white uppercase text-lg font-semibold">Join Camp</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampDetails;