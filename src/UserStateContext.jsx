import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./Firebase";

const UserStateContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const name = authUser.displayName;
        const email = authUser.email;
        const thumbnail = authUser.photoURL;

        setUser({ name, email, thumbnail });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserStateContext.Provider value={user}>
      {children}
    </UserStateContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserStateContext);
};
