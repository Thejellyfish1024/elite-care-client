import { Helmet } from "react-helmet-async";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Elite Care || Home</title>
            </Helmet>
            <Banner></Banner>
            This is home
        </div>
    );
};

export default Home;