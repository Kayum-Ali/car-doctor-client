import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:7001',
    withCredentials: true,
   
})

const useAxiosSecure = () => {
    const {logout} = useAuth()
    const navigate = useNavigate()
    useEffect(()=>{
        axiosSecure.interceptors.response.use( res =>{
            return res;
        } , error => {
            if (error.response.status === 401 || error.response.status === 403) {
                logout()
                .then(()=>{
                   navigate('/login')
                })
                .catch(error =>{
                    console.log(error)
                })
            }
            return Promise.reject(error);
        });
 
    },[ logout, navigate])
    
    return axiosSecure;
};

export default useAxiosSecure;