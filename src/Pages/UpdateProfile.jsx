import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


import { getAuth, updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
const auth = getAuth();
const UpdateProfile = () => {
    const {user} = useContext(AuthContext)
    const [displayName, setDisplayName] = useState(user.displayName);
    const [photoURL, setPhotoURL] = useState(user.photoURL);
    const [email, setEmail] = useState(user.email);
    const notify = () => toast('Your profile updated successfully')
    useEffect(() => {
      
      updateProfile(auth.currentUser, {
        displayName,
        photoURL,
        email,
      })
        .then(() => {
          console.log("Profile updated successfully");
        })
        .catch((error) => {
          console.log("Oops! Profile is not updated:", error.message);
        });
    }, []);
          
    const handleUpdate = (e) => {
      e.preventDefault();
      
      updateProfile(auth.currentUser, {
        displayName,
        photoURL,
        email,
      })
        .then(() => {
          console.log("Profile updated successfully");
        })
        .catch((error) => {
          console.log("Oops! Profile is not updated:", error.message);
        });
    };
    

    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold"> Update your profile</h1>
       
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name </span>
          </label>
          <input type="text" 
          placeholder="name"
           name="name" 
           value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
           className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url  </span>
          </label>
          <input type="text"
            placeholder="photoURL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email  </span>
          </label>
          <input type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button onClick={notify} type="submit" className="btn btn-primary">Update </button>
        </div>
      </form>
    </div>
  </div>
</div>
<Toaster />
        </div>
    );
};

export default UpdateProfile;