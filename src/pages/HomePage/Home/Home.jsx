import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularCamps from "../PopularCamps/PopularCamps";
import UpcomingCamps from "../UpcomingCamps/UpcomingCamps";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Elite Care || Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCamps></PopularCamps>
            <UpcomingCamps></UpcomingCamps>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;