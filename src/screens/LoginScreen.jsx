import React from "react";
import { signInWithGoogle } from "../Firebase";
import { useUser } from "../UserStateContext";
import Chat from "./Chat";

import '../styles/Login.css'

const LoginScreen = () => {
  const user = useUser();

  const handleSignInClick = () => {
    signInWithGoogle();
  };



  return (

    <>
     <div className='parent-div'>
    
    {user ? (
      <div>
        <Chat/>
        
      </div>
    ) : (
      <div className='google-signin'>
        <p className='text-title'>Konnect</p>
        <p className='signin-headtext'>Please click to sign in with <br></br>your Google account</p>
        <img className='google-image' src="https://i.ibb.co/kKr3W0P/google-logo.png" alt="google-logo" border="0"/>
        <button className='signin-btn' onClick={handleSignInClick}>Sign In</button>
      </div>
    )}
  </div>



    </>
   

   
  );
};

export default LoginScreen;
