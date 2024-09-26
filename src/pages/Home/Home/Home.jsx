import About from "../About/About";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    window.scrollTo(0,0)
    document.title = "Mechanic"
    return (
        <div>
           
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Products></Products>
            <Team></Team>
            <ChooseUs></ChooseUs>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;