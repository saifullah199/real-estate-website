import Banner from "../Components/Banner";
import { useLoaderData } from "react-router-dom";
import EstatesCard from "../Components/EstatesCard";

const Home = () => {

    const estates = useLoaderData()
    console.log(estates)
    return (
        <div className="container mx-auto space-y-4">
            <Banner className=""></Banner>

            <div data-aos="fade-up" data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                estates.map( estate => <EstatesCard key={estate.id} estate={estate}></EstatesCard>)
                }
            </div>
        </div>
    );
};

export default Home;