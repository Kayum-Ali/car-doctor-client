import { useContext } from "react";
import { AuthCoontext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

// prop types import 

import PropTypes from "prop-types";

// Private route component to protect routes
const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthCoontext)
    if(loading){
        return <span className="loading loading-bars loading-lg flex justify-center items-center mx-auto text-7xl h-14 text-green-400"></span>
    }

    if(user?.email){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
export default PrivateRoute;