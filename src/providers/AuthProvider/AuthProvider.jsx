import React, { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    // sign up
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // google sign in
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const authInfo = {
        signUp,
        signIn,
        googleSignIn,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;