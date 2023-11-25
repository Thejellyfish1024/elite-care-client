import { Outlet } from "react-router-dom";
import NavBar from "../../pages/Shared/NavBar/NavBar";
import { Toaster } from "react-hot-toast";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Main;