import { Outlet } from "react-router-dom";
import OrganizerLinks from "../Organizers/OrganizerLinks/OrganizerLinks";
import ParticipantLinks from "../Participants/ParticipantLinks/ParticipantLinks";
import useAuth from "../../../hooks/useAuth";
import ProfessionalLinks from "../Professionals/ProfessionalLinks/ProfessionalLinks";
import useOrganizer from "../../../hooks/useOrganizer";
import useProfessional from "../../../hooks/useProfessional";
import { Helmet } from "react-helmet-async";


const MainDashboard = () => {

    const {user} = useAuth();

    const {isOrganizer} = useOrganizer()
    const {isProfessional} = useProfessional()

    return (
        <div className=" flex">
             <Helmet>
                <title>Elite Care || Dashboard</title>
            </Helmet>
            <div className="lg:block w-64  hidden  bg-[#ced4da] pt-5 min-h-screen">
                <ul className=" min-h-screen w-60 fixed font-bold">
                    {
                        isOrganizer &&  user &&
                         <OrganizerLinks></OrganizerLinks> 
                    }
                    {
                        isProfessional && user &&
                        <ProfessionalLinks></ProfessionalLinks>
                    }
                    {
                        !isOrganizer && !isProfessional && user &&
                        <ParticipantLinks></ParticipantLinks>
                    }
                </ul>
            </div>
            <div className="flex-grow">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainDashboard;