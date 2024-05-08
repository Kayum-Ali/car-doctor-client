import { Link } from "react-router-dom";
import NavBar from "./Shared/NavBar/NavBar";
import Footer from "./Shared/Footer/Footer";


const ErrorPage = () => {
    return (
        <div className="">
            <NavBar></NavBar>
            <div className="flex justify-center items-center h-[80vh] gap-5 flex-col">
                <h2>Not Found !!!</h2>
                <Link to='/' className="btn">Go to Home</Link>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default ErrorPage;