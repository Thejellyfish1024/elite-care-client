
import { useEffect, useState } from "react";
import SingleCamp from "./singleCamp";


const PopularCamps = () => {

    const [camps, setCamps] = useState([]);

    useEffect(() => {
        fetch('/medicalCamps.json')
            .then(res => res.json())
            .then(data => setCamps(data))
    }, [])
    console.log('camps', camps);

    return (
        <div className="max-w-7xl mx-auto mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    camps?.map(camp => <SingleCamp key={camp.campName} camp={camp}></SingleCamp>)
                }
            </div>
        </div>
    );
};

export default PopularCamps;