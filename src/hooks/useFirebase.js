import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../components/Firebase/firebaseInit';

initializeAuthentication();


const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const auth = getAuth();

    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
            }
        });
    }, [])

    const handleGoogleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
            })
    }


    return {
        user,
        handleGoogleLogin,
        handleGoogleLogout
    }
};

export default useFirebase;