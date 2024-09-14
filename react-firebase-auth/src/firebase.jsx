import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-firebase-auth-220a2.firebaseapp.com",
  projectId: "react-firebase-auth-220a2",
  storageBucket: "react-firebase-auth-220a2.appspot.com",
  messagingSenderId: "370567851432",
  appId: "1:370567851432:web:4b6d915b017dd7350e419d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;