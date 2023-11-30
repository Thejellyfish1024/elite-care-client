import { NavLink } from "react-router-dom";


const ProfessionalLinks = () => {
    return (
        <>
        <NavLink className={({ isActive }) => isActive ? "text-[#0077b6]" : ""} to='/dashboard/professional-profile'>
            <li className="hover:bg-gray-200 p-1 pl-4 mb-2 "> Profile Management</li>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-[#0077b6]" : ""} to='/dashboard/accepted-camps'>
            <li className="hover:bg-gray-200 p-1 pl-4 mb-2">Accepted Camps</li>
        </NavLink>
    </>
    );
};

export default ProfessionalLinks;