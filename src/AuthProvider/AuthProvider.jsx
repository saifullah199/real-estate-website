import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    

    // create user
    const createUser = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed', currentUser)
            setUser(currentUser)
        })
    },[])
    const authInfo= {
        user,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;