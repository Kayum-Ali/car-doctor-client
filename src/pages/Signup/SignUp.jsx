import { Link } from "react-router-dom";


const SignUp = () => {

    const img = 'https://i.ibb.co/F3F0wRC/Frame.png';

    const handleLogin = (e)=>{
        e.preventDefault();
        console.log(e.target)
    }
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="">
                    <img src={img} alt="" />
                   
                </div>

                <div className="card shrink-0 w-[610px] h-[780px] border shadow-2xl bg-base-100 p-12">
                <h2 className="text-3xl font-bold text-center">Login</h2>
                    <form onSubmit={handleLogin} className="card-body">
                      
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text  text-xl font-medium">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
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

export default SignUp;