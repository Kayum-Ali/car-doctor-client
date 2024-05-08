import About from "../About/About";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Team from "../Team/Team";


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Products></Products>
            <Team></Team>
            <ChooseUs></ChooseUs>
            
        </div>
    );
};

export default Home;