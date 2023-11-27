import { Outlet } from "react-router-dom";
import OrganizerLinks from "../Organizers/OrganizerLinks/OrganizerLinks";
import ParticipantLinks from "../Participants/ParticipantLinks/ParticipantLinks";
import useAuth from "../../../hooks/useAuth";
import ProfessionalLinks from "../Professionals/ProfessionalLinks/ProfessionalLinks";


const MainDashboard = () => {

    const {user} = useAuth();

    const isOrganizer = true;
    const isProfessional = false;

    return (
        <div className=" flex">
            <div className="lg:block w-64  hidden  bg-[#dee2e6] pt-5 min-h-screen">
                <ul className=" min-h-screen w-64 fixed font-bold">
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
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainDashboard;