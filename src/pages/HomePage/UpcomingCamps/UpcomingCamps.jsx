import useCamps from "../../../hooks/useCamps";
import UpcomingCampCard from "./UpcomingCampCard";


const UpcomingCamps = () => {
    const {data: upcomingCamps, refetch} = useCamps('/upcoming-camps');
    console.log('upcoming', upcomingCamps);
    return (
        <div className="max-w-7xl mx-auto mb-10">
            <h2 className="text-center font-bold text-4xl my-10">Upcoming Camps</h2>
            <div>
            {
                upcomingCamps?.map(camp => <UpcomingCampCard key={camp?._id} camp={camp} refetch={refetch}></UpcomingCampCard>)
            }
        </div>
        </div>
    );
};

export default UpcomingCamps;