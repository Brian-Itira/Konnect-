import React from "react";
import { signInWithGoogle, signOut } from "../Firebase";
import { useUser } from "../UserStateContext";
import { Link } from 'react-router-dom';

import '../styles/Login.css'

const LoginScreen = () => {
  const user = useUser();

  const handleSignInClick = () => {
    signInWithGoogle();
  };

  const handleSignOutClick = () => {
    signOut();
  };

  return (

    <>
     <div className='parent-div'>
    
    {user ? (
      <div>
        <p>{user.name}</p>
        <button onClick={handleSignOutClick}>Sign Out</button>
        
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

  <div className='left-image-container'>

  <img className='left-image' src="https://i.ibb.co/Z2Xnv4P/ideogram-1.jpg" alt="ideogram-1" border="0"/>

  </div>



  <div className='right-image-container'>
    
    

  <img className='right-image' src="https://i.ibb.co/FhG2Nrx/k-logo.png" alt="logo-k" border="0"/>

  </div>

    </>
   

   
  );
};

export default LoginScreen;
