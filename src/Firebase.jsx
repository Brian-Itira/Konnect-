import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD05wFE_iwAVNmE2YaWzusB8SRX9NHhgi8",
  authDomain: "konnect-81f6e.firebaseapp.com",
  projectId: "konnect-81f6e",
  storageBucket: "konnect-81f6e.appspot.com",
  messagingSenderId: "955640063126",
  appId: "1:955640063126:web:9e8b9f0db2269e6cbf0eb7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app)

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((results) => {
      const name = results.user.displayName;
      const email = results.user.email;
      const thumbnail = results.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("thumbnail", thumbnail);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signOut = () => {
  auth
    .signOut()
    .then(() => {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("thumbnail");
    })
    .catch((error) => {
      console.log(error);
    });
};



