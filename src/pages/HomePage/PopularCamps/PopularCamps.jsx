
import useCamps from "../../../hooks/useCamps";
import SingleCamp from "./singleCamp";


const PopularCamps = () => {

    const {data : camps} = useCamps('/popular-camps');
    console.log(camps);

    return (
        <div className="max-w-7xl mx-auto my-16">
            <h2 className="text-4xl font-bold text-center my-16">Popular Camps</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    camps?.map(camp => <SingleCamp key={camp?._id} camp={camp} popularCampId={camp?.campId}></SingleCamp>)
                }
            </div>
        </div>
    );
};

export default PopularCamps;