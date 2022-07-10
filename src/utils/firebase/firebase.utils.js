// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, signInWithPopup,signInWithRedirect, GoogleAuthProvider} from 'firebase/auth';

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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
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
        createdAt
      });
    }
    catch (error){
      console.log('error creating the user.', error.message);
    }
  }

  return userDocRef;

};


