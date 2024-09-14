// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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