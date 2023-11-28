import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/elite-care-logo.png'
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { FaUserCircle } from "react-icons/fa";
import { useState } from 'react';
import toast from 'react-hot-toast';
import DashboardDrawer from '../../Dashboard/MainDashboard/DashboardDrawer';
import useProfile from '../../../hooks/useProfile';

const NavBar = () => {

    const { user, logOut } = useAuth();
    const [showProfile, setShowProfile] = useState(false);
    const { data: profile } = useProfile(user?.email);


    const navLinks = <>
        <ul className="  text-white flex md:gap-5 gap-2">
            <li><NavLink className={({ isActive }) => isActive ? "text-[#48cae4] border-b-2 p-1 border-[#48cae4] font-bold" : "font-bold p-1"}
                to='/'>Home</NavLink></li>
            {
                user && <>
                    <li><NavLink className={({ isActive }) => isActive ? "text-[#48cae4] border-b-2 p-1 border-[#48cae4]  font-bold" : " p-1"}
                        to='/available-camps'>Available Camps</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "text-[#48cae4] border-b-2 p-1 border-[#48cae4] font-bold" : " p-1"}
                        to='/dashboard'>Dashboard</NavLink></li>
                </>
            }
            <li><NavLink className={({ isActive }) => isActive ? "text-[#48cae4] border-b-2 p-1 border-[#48cae4] font-bold" : " p-1"}
                to='/contact-us'>Contact Us</NavLink></li>
        </ul>
    </>
    return (
        <div className="bg-[#023047] w-full p-5 fixed z-50">
            <div className='max-w-7xl mx-auto flex justify-between text-white items-center font-semibold'>

                <div className='flex gap-2 items-center'>
                    <div className='lg:hidden'>
                        <DashboardDrawer></DashboardDrawer>
                    </div>
                    <img src={logo} className='w-12 h-12 rounded-full' alt="" />
                    <h2 className='text-2xl font-bold italic'>Elite Care</h2>
                </div>
                <div className='hidden lg:block'>
                    {navLinks}
                </div>
                <div>
                    {
                        user ?
                            <div className='relative flex items-center gap-3'>

                                <button onClick={() => setShowProfile(!showProfile)}>
                                    {
                                        profile?.image ?
                                            <img className='w-12 h-12 rounded-full' src={profile?.image} alt="not found" />
                                            :
                                            <div>
                                                {
                                                    user?.photoURL ?
                                                        <img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="not found" />
                                                        :
                                                        <FaUserCircle className='text-4xl'></FaUserCircle>

                                                }

                                            </div>
                                    }
                                </button>
                                {/* top-9 right-0 */}
                                <div className={`text-end bg-gray-300 z-30 p-5 top-12 right-1 rounded-lg absolute flex justify-center w-60 ${showProfile ? '' : 'hidden'}`}>
                                    <div className="w-full">
                                        <div className="flex justify-center w-full">
                                            <div>
                                                {
                                                    user?.photoURL ?
                                                        <img src={user?.photoURL} className="w-16 h-16 rounded-full" alt="" /> :
                                                        <FaUserCircle className='text-4xl'></FaUserCircle>
                                                }

                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <h5 className='text-lg text-black font-semibold mb-2'>{user?.displayName}</h5>
                                        </div>
                                        <p className="text-center mb-2 text-gray-500">{user?.email}</p>
                                        <div className="flex justify-center">
                                            <button onClick={() => {
                                                logOut();
                                                setShowProfile(!showProfile)
                                                toast.success('User logged out!!')
                                            }} className=" btn btn-outline text-[#FF3811] btn-sm md:btn-md md:px-6">Log Out</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/login'><Button variant="outlined" sx={{ color: '#48cae4', borderColor: '#48cae4' }}>Login</Button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;