import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthCoontext } from "../../../Context/AuthContext";
import Swal from "sweetalert2";

const NavBar = () => {
  const logo = "https://i.ibb.co/PcV18rt/Group-2.png";

  const { user, logout } = useContext(AuthCoontext);
  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You logout successfully",
          showConfirmButton: true,
          timer: 6000,
        });
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };
  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to={`/my-bookings`}>My Bookings</Link>
          </li>
          <li onClick={handleLogout}>
            <Link>Logout</Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100  top-0  z-20 my-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-green-500 rounded-box w-52 *:hover:bg-cyan-500"
          >
            {navItem}
          </ul>
        </div>
        <Link to="/">
          <img className="w-[100px]" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn  btn-outline btn-warning mr-2">
          Appointment
        </button>
        {user ? (
          <Link to={`/user/${user.uid}`}>
            <div className="tooltip z-20 tooltip-left" data-tip={user.email}>
              <img
                className="avatar w-16 rounded-full"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
