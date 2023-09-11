import React from "react";
import { signInWithGoogle } from "../Firebase";
import { useUser } from "../UserStateContext";
import { signOut } from "../Firebase";

const LoginScreen = () => {
  const user = useUser();

  const handleSignInClick = () => {
    signInWithGoogle();
  };

  const handleSignOutClick = () => {
    signOut();
  };

  return (
    <div>
      {!user ? (
        <button onClick={handleSignInClick}>Google</button>
      ) : (
        <div>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
          <img src={user.thumbnail} alt="thumbnail" />
          <button onClick={handleSignOutClick}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default LoginScreen;
