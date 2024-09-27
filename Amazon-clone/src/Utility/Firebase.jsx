

//  Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBglm8g1DngpY_fNf5-LdF6eFwyeoKQUbs",
  authDomain: "clone-3cf13.firebaseapp.com",
  projectId: "clone-3cf13",
  storageBucket: "clone-3cf13.appspot.com",
  messagingSenderId: "783172781013",
  appId: "1:783172781013:web:42569956185f2e5eca735c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app); 
