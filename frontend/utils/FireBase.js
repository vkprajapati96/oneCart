import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-5d241.firebaseapp.com",
  projectId: "loginonecart-5d241",
  storageBucket: "loginonecart-5d241.firebasestorage.app",
  messagingSenderId: "876196929418",
  appId: "1:876196929418:web:cc25da9bc9647ffac9b273"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
const provider =new GoogleAuthProvider()

export {auth ,provider}