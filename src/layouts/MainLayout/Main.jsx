import { Outlet } from "react-router-dom";
import NavBar from "../../pages/Shared/NavBar/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "../../pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="bg-slate-200">
            <NavBar></NavBar>
            <div className="pt-[88px]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Main;