import { NavLink } from "react-router-dom";


const OrganizerLinks = () => {
    return (
        <>
            <NavLink className={({ isActive }) => isActive ? "text-[#0077b6]" : ""} to='/dashboard/organizer-profile'>
                <li className="hover:bg-gray-200 p-1 pl-4 mb-2 "> Profile Management</li>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-[#0077b6]" : ""} to='/dashboard/add-a-camp'>
                <li className="hover:bg-gray-200 p-1 pl-4 mb-2">Add a Camp</li>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-[#0077b6]" : ""} to='/dashboard/manage-camps'>
                <li className="hover:bg-gray-200 p-1 pl-4 mb-2">Manage Camps</li>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-[#0077b6]" : ""} to='/dashboard/manage-registered-camps'>
                <li className="hover:bg-gray-200 p-1 pl-4 mb-2">Manage Registered Camps</li>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-[#0077b6]" : ""} to='/dashboard/add-upcoming-camp'>
                <li className="hover:bg-gray-200 p-1 pl-4 mb-2">Add Upcoming Camps</li>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-[#0077b6]" : ""} to='/dashboard/manage-upcoming-camps'>
                <li className="hover:bg-gray-200 p-1 pl-4 mb-2">Manage Upcoming Camps</li>
            </NavLink>
        </>
    );
};

export default OrganizerLinks;