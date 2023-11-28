/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useOrganizer from "../hooks/useOrganizer";
import useAuth from "../hooks/useAuth";
import { Box, CircularProgress } from "@mui/material";

const OrganizerRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const { isOrganizer, isOrganizerLoading } = useOrganizer();
    const location = useLocation()

    if (loading || isOrganizerLoading) {
        return <div className="w-screen flex justify-center">
            <Box sx={{ display: 'flex', mt: '20px' }}>
                <CircularProgress />
            </Box>
        </div>
    }

    if (user && isOrganizer) {
        return children
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default OrganizerRoute;