import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularCamps from "../PopularCamps/PopularCamps";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Elite Care || Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCamps></PopularCamps>
        </div>
    );
};

export default Home;