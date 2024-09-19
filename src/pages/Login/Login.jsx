import { useContext } from "react";
import { Link,  useNavigate,  } from "react-router-dom";
import './Login.css'
import { AuthCoontext } from "../../Context/AuthContext";
import Swal from "sweetalert2";


const Login = () => {
    const img = 'https://i.ibb.co/4pdK1mZ/Frame.png';
    document.title = 'Login';
    const navigate = useNavigate()

    const {signIn} = useContext(AuthCoontext)

    const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result =>{
            form.reset()
            {
                result.user && navigate('/')
            }
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

    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="">
                    <img src={img} alt="" />
                   
                </div>

                <div className="card shrink-0 w-[610px] h-[780px] border shadow-2xl bg-base-100 p-12">
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
                    
                </div>
            </div>
        </div>
    );
};

export default Login;