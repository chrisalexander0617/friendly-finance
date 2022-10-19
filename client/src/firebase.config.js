import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_apiKey,
  authDomain:process.env.REACT_APP_FIREBASE_authDomain,
  projectId:process.env.REACT_APP_FIREBASE_projectedId,
  storageBucket:process.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId:process.env.REACT_APP_FIREBASE_messagingSenderId,
  appId:process.env.REACT_APP_FIREBASE_appId,
  measurementId:process.env.REACT_APP_FIREBASE_measurementId 
};

const app = initializeApp(firebaseConfig);
  
provider.setCustomParameters({   
    prompt : "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);