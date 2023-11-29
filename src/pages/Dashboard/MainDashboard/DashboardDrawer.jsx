import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Divider } from '@mui/material';
import ParticipantLinks from '../Participants/ParticipantLinks/ParticipantLinks';
import OrganizerLinks from '../Organizers/OrganizerLinks/OrganizerLinks';
import ProfessionalLinks from '../Professionals/ProfessionalLinks/ProfessionalLinks';
import useOrganizer from '../../../hooks/useOrganizer';

export default function DashboardDrawer() {

    const { user } = useAuth();
    const { isOrganizer } = useOrganizer();
    const isProfessional = false;

    const [state, setState] = React.useState({ left: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <List>
                <ul className="font-bold pt-5 space-y-6">
                    <NavLink className={({ isActive }) => isActive ? "text-[#48cae4]" : ""} to='/'>
                        <li className="hover:bg-gray-300 p-1 pl-4 mb-2 ">Home</li>
                    </NavLink>

                    {
                        user &&
                        <NavLink className={({ isActive }) => isActive ? "text-[#48cae4]" : ""} to='/available-camps'>
                            <li className="hover:bg-gray-300 p-1 pl-4 mb-2 ">Available Camps</li>
                        </NavLink>
                    }
                    {
                        isOrganizer &&
                        <NavLink className={({ isActive }) => isActive ? "text-[#48cae4] hidden lg:block" : "hidden lg:block"}
                            to='/dashboard/organizer-profile'>
                            <li className="hover:bg-gray-300 p-1 pl-4 mb-2 ">Dashboard</li>
                        </NavLink>
                    }
                    {
                        isProfessional &&
                        <NavLink className={({ isActive }) => isActive ? "text-[#48cae4] hidden lg:block" : "hidden lg:block"}
                            to='/dashboard/professional-profile'>
                            <li className="hover:bg-gray-300 p-1 pl-4 mb-2 ">Dashboard</li>
                        </NavLink>
                    }
                    {
                        !isOrganizer && !isProfessional && user &&
                        <NavLink className={({ isActive }) => isActive ? "text-[#48cae4] hidden lg:block" : "hidden lg:block"}
                            to='/dashboard/participant-profile'>
                            <li className="hover:bg-gray-300 p-1 pl-4 mb-2 ">Dashboard</li>
                        </NavLink>
                    }

                    <NavLink className={({ isActive }) => isActive ? "text-[#48cae4]" : ""} to='/contact-us'>
                        <li className="hover:bg-gray-300 p-1 pl-4 mb-2 ">Contact Us</li>
                    </NavLink>
                    <Divider />
                    {
                        isOrganizer &&
                        <OrganizerLinks></OrganizerLinks>
                    }
                    {
                        isProfessional &&
                        <ProfessionalLinks></ProfessionalLinks>
                    }
                    {
                        !isOrganizer && !isProfessional && user &&
                        <ParticipantLinks></ParticipantLinks>
                    }

                </ul>
            </List>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <MenuIcon></MenuIcon>
                    </Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}