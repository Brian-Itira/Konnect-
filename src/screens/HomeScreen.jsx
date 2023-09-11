// HomeScreen.js
import React from "react";
import { signOut } from "../Firebase"

const HomeScreen = () => {

   const handleSignOutClick = () => {
    signOut();
  };
  return (
    <div>
      <h1>Home</h1>
       <button onClick={handleSignOutClick}>Sign Out</button>
    </div>
  );
};

export default HomeScreen;
