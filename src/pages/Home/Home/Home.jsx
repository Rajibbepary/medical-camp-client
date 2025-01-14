import Banner from "../Banner/Banner";
import FeedBack from "../Feedback/FeedBack";
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MCMS | Home</title>
            </Helmet>
            <Banner/>
            <FeedBack/>
        </div>
    );
};

export default Home;