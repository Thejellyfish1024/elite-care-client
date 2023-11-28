/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../config/firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const axiosPublic = useAxiosPublic()
    

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleSigning = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const updateUserProfile = (name, url) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName : name,
            photoURL: url
        })
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user', currentUser);
            setUser(currentUser)
            
            if(currentUser){
                const userInfo = {email : currentUser?.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res =>{
                    if(res.data?.token){
                        localStorage.setItem('access-token', res.data.token)
                        setLoading(false)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token')
                setLoading(false)
            }
        })
        return () => unsubscribe()
    },[axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleSigning,
        logOut,
        updateUserProfile
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;