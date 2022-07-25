// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, signInWithPopup,signInWithRedirect, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

import {getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJdFNI5qFjbpm4eyRkyUlhbx5kWAT2mmY",
  authDomain: "crwn-clothing-db-92cd3.firebaseapp.com",
  projectId: "crwn-clothing-db-92cd3",
  storageBucket: "crwn-clothing-db-92cd3.appspot.com",
  messagingSenderId: "1061459957588",
  appId: "1:1061459957588:web:966d748570d64092861ac1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) =>{
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  //if user data not exist
  //create 
  if(!userSnapshot.exists()){
    const{ displayName, email } = userAuth;
    const createdAt = new Date();
    
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    }
    catch (error){
      console.log('error creating the user.', error.message);
    }
  }

  return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};