import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthCoontext } from "../../Context/AuthContext";



const SignUp = () => {

    const img = 'https://i.ibb.co/4pdK1mZ/Frame.png';
    document.title = 'Sign Up'


    const {createUser} = useContext(AuthCoontext)

    const handleSignUp = (e)=>{

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,email,password);

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
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
                <h2 className="text-3xl font-bold text-center">Sign Up</h2>
                    <form onSubmit={handleSignUp} className="card-body">
                      
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text  text-xl font-medium"> Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                          
                        </div>
                        <div className="form-control mt-6">
                          
                            <input className="btn btn-primary" type="submit" value="Sign Up" />

                            <p className="mt-5 text-center ">Already have an account? <Link className="text-orange-600 font-bold hover:underline" to='/login'>Login</Link></p>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;