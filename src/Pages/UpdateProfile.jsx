import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";


const UpdateProfile = () => {
    const {user} = useContext(AuthContext)

    
          
   
    

    return (
        <div>
            <h3> User: {user.email} </h3>
        </div>
    );
};

export default UpdateProfile;