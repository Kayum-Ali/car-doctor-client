import { useContext } from "react";
import { AuthCoontext } from "../Context/AuthContext";


const useAuth = () => {
    const auth = useContext(AuthCoontext)
    return auth;
    
};

export default useAuth;