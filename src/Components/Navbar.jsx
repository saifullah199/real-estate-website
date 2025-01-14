import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";


const Navbar = () => {

  const {user,logOut} = useContext(AuthContext)

  const handleSignOut = () => {
    logOut()
    .then()
    .catch()
  }

    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        <li><NavLink to='/profile'>Update Profile</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
    </>
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <a className="btn btn-outline btn-primary text-xl">Florida Cash Buyers</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ?
      <div className="flex">
        {/* <Link to='/userprofile'> <FaUser /> </Link> */}
        <Link to='/userprofile'>
           <img className="w-[50px] rounded-full" 
              src={user?.photoURL} alt="" /> 
        </Link>
        
        
        <button onClick={handleSignOut} className="btn btn-outline btn-secondary"> Sign Out </button>
      </div>
      :
      <Link to='/login'>
         <button className="btn btn-outline btn-success"> Login</button>
      </Link>
    }


  </div>
</div>
        </div>
    );
};

export default Navbar;