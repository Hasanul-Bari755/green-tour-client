import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebasebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email, password) => {
        setLoading(true)
      return  signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const loginWithGoogle = () => {
        setLoading(true)
       return signInWithPopup(auth,googleProvider)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            return unsubcribe();
        }
    }, [])
    
    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        loginWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;