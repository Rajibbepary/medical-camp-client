import Banner from "../Banner/Banner";
import FeedBack from "../Feedback/FeedBack";
import { Helmet } from 'react-helmet-async';
import Popular from "../Popular/Popular";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MCMS | Home</title>
            </Helmet>
            <Banner/>
            <Popular/>
            <FeedBack/>
        </div>
    );
};

export default Home;