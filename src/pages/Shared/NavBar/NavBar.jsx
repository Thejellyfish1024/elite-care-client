import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/elite-care-logo.png'
import { Button } from '@mui/material';

const NavBar = () => {
    const navLinks = <>
        <ul className="  text-white flex md:gap-5 gap-2">
            <li><NavLink className={({ isActive }) => isActive ? "text-[#48cae4] border-b-2 p-1 border-[#48cae4] font-bold" : "font-bold p-1"}
                to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "text-[#48cae4] border-b-2 p-1 border-[#48cae4]  font-bold" : " p-1"}
                to='/available-camps'>Available Camps</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "text-[#48cae4] border-b-2 p-1 border-[#48cae4] font-bold" : " p-1"}
                to='/dashboard'>Dashboard</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "text-[#48cae4] border-b-2 p-1 border-[#48cae4] font-bold" : " p-1"}
                to='/contact-us'>Contact Us</NavLink></li>
        </ul>
    </>
    return (
        <div className="bg-[#023047] w-full p-5 ">
            <div className='max-w-7xl mx-auto flex justify-between text-white items-center font-semibold'>
                <div className='flex gap-3 items-center'>
                    <img src={logo} className='w-12 h-12 rounded-full' alt="" />
                    <h2 className='text-2xl font-bold italic'>Elite Care</h2>
                </div>
                <div className='hidden lg:block'>
                    {navLinks}
                </div>
                <div>
                    <Link to='/login'><Button variant="outlined" sx={{color: '#48cae4', borderColor: '#48cae4'}}>Login</Button></Link>
                </div>
            </div>
            <div className='mt-4 lg:hidden flex justify-center'>
                {
                    navLinks
                }
            </div>
        </div>
    );
};

export default NavBar;