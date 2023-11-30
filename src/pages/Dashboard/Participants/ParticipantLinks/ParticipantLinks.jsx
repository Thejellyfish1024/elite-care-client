import { NavLink } from "react-router-dom";


const ParticipantLinks = () => {
    return (
        <>
            <NavLink className={({ isActive }) => isActive ? "text-[#0077b6]" : ""} to='/dashboard/participant-profile'>
                <li className="hover:bg-gray-200 p-1 pl-4 mb-2 "> Profile Management</li>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-[#0077b6]" : ""} to='/dashboard/registered-camps'>
                <li className="hover:bg-gray-200 p-1 pl-4 mb-2">Registered Camps</li>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-[#0077b6]" : ""} to='/dashboard/payment-history'>
                <li className="hover:bg-gray-200 p-1 pl-4 mb-2">Payment History</li>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-[#0077b6]" : ""} to='/dashboard/feedback-and-ratings'>
                <li className="hover:bg-gray-200 p-1 pl-4 mb-2">Feedback and Ratings</li>
            </NavLink>
        </>
    );
};

export default ParticipantLinks;