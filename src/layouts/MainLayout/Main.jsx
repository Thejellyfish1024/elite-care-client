import { Outlet } from "react-router-dom";
import NavBar from "../../pages/Shared/NavBar/NavBar";
import { Toaster } from "react-hot-toast";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="pt-[88px]">
            <Outlet></Outlet>
            </div>
            <Toaster />
        </div>
    );
};

export default Main;