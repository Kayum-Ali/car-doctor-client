
import NavBar from "./Shared/NavBar/NavBar";
import Footer from "./Shared/Footer/Footer";


const ErrorPage = () => {
    document.title = "Not Found";
    return (
        <div className="">
            <NavBar></NavBar>
            <div className="flex justify-center items-center  gap-5 flex-col">
               <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1729261222/Frame_nevicu.png" alt="" />
            </div>
            <Footer></Footer>

        </div>
    );
};

export default ErrorPage;