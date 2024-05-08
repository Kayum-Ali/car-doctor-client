import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types'; 


export const AuthCoontext = createContext();
const auth= getAuth(app)


const AuthContext = ({children}) => {


    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscriber =   onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('currnet user', currentUser)
            setLoading(false)
        })
        return ()=>{
            return unSubscriber()
        }
    },[])


const authInfo = {
    user,
    loading,
    createUser,
    signIn

}

    return (
        <AuthCoontext.Provider value={authInfo}>
            {children}
        </AuthCoontext.Provider>
    );
};
AuthContext.propTypes = {
    children: PropTypes.node.isRequired
  };
export default AuthContext;