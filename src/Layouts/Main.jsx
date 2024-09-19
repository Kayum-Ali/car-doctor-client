import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>

           <div className="z-10">
              <Outlet></Outlet>
           </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;