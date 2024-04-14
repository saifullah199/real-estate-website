import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const UpdateProfile = () => {
    const {user} = useContext(AuthContext)

    return (
        <div>
            <h3> User: {user.email} </h3>
        </div>
    );
};

export default UpdateProfile;