import useCamps from "../../../hooks/useCamps";
import UpcomingCampCard from "./UpcomingCampCard";


const UpcomingCamps = () => {
    const {data: upcomingCamps, refetch} = useCamps('/upcoming-camps');
    console.log('upcoming', upcomingCamps);
    return (
        <div className="max-w-7xl mx-auto lg:my-28 md:my-16 my-10">
            <h2 className="text-center font-bold text-4xl md:mb-16 mb-8">Upcoming Camps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 lg:p-0 ">
            {
                upcomingCamps?.map(camp => <UpcomingCampCard key={camp?._id} camp={camp} refetch={refetch}></UpcomingCampCard>)
            }
        </div>
        </div>
    );
};

export default UpcomingCamps;