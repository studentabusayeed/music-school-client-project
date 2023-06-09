import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import Testimonial from "../Testimonial/Testimonial";
import Instructors from "../Instructors/Instructors";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Music School | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Instructors></Instructors>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;