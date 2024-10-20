import { useContext } from "react";
import { Link, useLocation, useNavigate,  } from "react-router-dom";
import './Login.css'
import { AuthCoontext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
// import axios from "axios";
// import axios from "axios";


const Login = () => {
    const img = 'https://i.ibb.co/4pdK1mZ/Frame.png';
    document.title = 'Login';
    const navigate = useNavigate()
    const location = useLocation()

    const from = location?.state ? location?.state : "/";
  

    const {signIn, googleLogin,githubLogin} = useContext(AuthCoontext)

    const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
        .then(() =>{
          
            form.reset()
            // const user = email
            // get access token from server
            // axios.post('http://localhost:5000/jwt', {user}, {withCredentials: true})
            // .then(res => {
            //    if(res.data.success){
                //    }
                // })
                
                    navigate(from);
          
            let timerInterval;
            Swal.fire({
              title: "Login Successfully",
              html: "I will close in <b></b> milliseconds.",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
               
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                  timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
              },
              willClose: () => {
                clearInterval(timerInterval);
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
              }
            });
           
        })
        .catch(error => console.log(error))
    }

    const handleGoogleLogin = ()=>{
        googleLogin()
       .then(result=>{
        // const user = result?.user?.email
        // axios.post('http://localhost:5000/jwt', {user}, {withCredentials: true})
        // .then(res => {
        //    if(res.data.success){
        //     navigate(from);
        //    }
        // })
           if(result.user){
           
                navigate(from);
            
           
             Swal.fire({
                 title: "Login Successfully",
                 html: "I will close in <b></b> milliseconds.",
                 timer: 2000,
                 timerProgressBar: true,
                
             })
           }
       })
       .catch(error => console.log(error))
       
    }

    const handleGithubLogin= ()=>{

        githubLogin()
        .then(result=>{
            // const user = result?.user?.email
            // axios.post('http://localhost:5000/jwt', {user}, {withCredentials: true})
            // .then(res => {
            //    if(res.data.success){
            //     navigate(from);
            //    }
            // })
            if(result.user){
                navigate(from);
                Swal.fire({
                    title: "Login Successfully",
                    html: "I will close in <b></b> milliseconds.",
                    timer: 2000,
                    timerProgressBar: true,
                })
            }
        })

        
    }
    
    return (
        <div className="px-5 lg:px-0">
            <div className="flex flex-col lg:flex-row md:flex-row">
                <div className="flex-1">
                    <img className="mx-auto w-72 lg:w-auto" src={img} alt="" />
                   
                </div>

                <div className="card shrink-0 lg:w-[610px] md:w-max w-max mx-auto h-[680px] border shadow-2xl bg-base-100 p-12 pb-5 my-5">
                <h2 className="text-3xl font-bold text-center selection:bg-pink-300 selection:text-green-300">Login</h2>
                    <form onSubmit={handleLogin} className="card-body">
                      
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text  text-xl font-medium ">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered placeholder-cyan-500" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                          
                            <input className="btn btn-primary" type="submit" value="Login" />

                            <p className="mt-5 text-center ">New to Cars Doctors? <Link className="text-orange-600 font-bold hover:underline" to='/signup'>Sign Up</Link></p>
                        </div>
                    </form>
                    <h2 className="text-center font-medium">Or Login with</h2>

                    <div className="flex gap-5 justify-center py-10">
                        <button onClick={handleGoogleLogin} className="btn text-2xl flex items-center"> <FcGoogle /> Google</button>
                        <button onClick={handleGithubLogin} className="btn text-2xl flex items-center"> <VscGithubInverted /> Github</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;