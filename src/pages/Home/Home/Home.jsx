import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Music School | Home</title>
            </Helmet>
            <h2 className="text-3xl">This is Home</h2>
        </div>
    );
};

export default Home;