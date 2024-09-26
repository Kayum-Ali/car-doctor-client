import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types'; 


export const AuthCoontext = createContext();
const auth= getAuth(app)
const googleProvider = new GoogleAuthProvider()

const githubProvider = new GithubAuthProvider()


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

    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
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
    signIn,
    logout,
    googleLogin,
    githubLogin

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