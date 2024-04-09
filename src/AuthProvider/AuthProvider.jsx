import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {

    // create user
    const createUser = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email, password)
    }

    const authInfo= {
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;