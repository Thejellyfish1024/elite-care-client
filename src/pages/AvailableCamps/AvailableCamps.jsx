import { Helmet } from "react-helmet-async";
import useCamps from "../../hooks/useCamps";
import SingleCamp from "../HomePage/PopularCamps/singleCamp";


const AvailableCamps = () => {

    const { data: camps } = useCamps('/available-camps');
    console.log('available camps', camps);
    return (
        <div className="max-w-7xl mx-auto mb-10">
             <Helmet>
                <title>Elite Care || Available Camps</title>
            </Helmet>
            <h2 className="text-center text-4xl font-bold mt-10 mb-16">Available Camps</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    camps?.map(camp => <SingleCamp key={camp?.id} camp={camp}></SingleCamp>)
                }
            </div>
        </div>
    );
};

export default AvailableCamps;