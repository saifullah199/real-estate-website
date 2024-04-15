import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const UserProfile = () => {

    const {user}= useContext(AuthContext)
    return (
        <div>
            

<div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/8gdq6XQ/pexels-pixabay-259588.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md ">
        <img src={user.photoURL} className=" rounded-lg shadow-2xl ml-10 " />
      <h1 className="mb-5 text-5xl font-bold"> {user.displayName} </h1>
      <p className="mb-5">  {user.email} </p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default UserProfile;