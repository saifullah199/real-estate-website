import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";



const UpdateProfile = () => {
    const {user} = useContext(AuthContext)

    
          
   
    

    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold"> Update your profile</h1>
       
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name </span>
          </label>
          <input type="text" 
          placeholder="name"
           name="name" 
           value={user.displayName}
           className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url  </span>
          </label>
          <input type="text"
            placeholder="photoURL"
            value={user.photoURL}
            className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update </button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default UpdateProfile;