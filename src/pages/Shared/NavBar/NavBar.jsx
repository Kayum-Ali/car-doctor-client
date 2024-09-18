import { Link } from "react-router-dom";

const NavBar = () => {
    const logo = 'https://i.ibb.co/PcV18rt/Group-2.png'
    const navItem = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/services'>Services</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    <li><Link to='/login'>Login</Link></li>
    </>
    return (
        <div className="navbar bg-base-100  top-0 overflow-hidden z-20 my-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to='/'>
                    <img className="w-[100px]" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navItem}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn  btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default NavBar;