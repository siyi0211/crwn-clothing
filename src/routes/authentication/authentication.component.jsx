// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import './authentication.styles.scss';

const Authentication = () => {

    // useEffect(() => {
        
    //     async function getUserData(){
    //         const response = await getRedirectResult(auth);

    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }

    //     getUserData();
        

    // }, []);

    // const logGoogleUser = async () =>{
    //     const {user} = await signInWithGooglePopup();
    //     const userDocRef = await createUserDocumentFromAuth(user);
    // };

    return(
      <div className="authentication-container">
        {/* <h1>Sign In Page</h1> */}
        {/* <button onClick={logGoogleUser}>Sign In with Google Popup</button> */}
        {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}
        <SignInForm />
        <SignUpForm />

      </div>
    )
  }

export default Authentication;