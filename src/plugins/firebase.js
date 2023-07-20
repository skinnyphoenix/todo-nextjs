// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnZNfONlK_yvBkAAtY544MvHJsI8yfvGo",
  authDomain: "todo-nextjs-d6159.firebaseapp.com",
  projectId: "todo-nextjs-d6159",
  storageBucket: "todo-nextjs-d6159.appspot.com",
  messagingSenderId: "281383163151",
  appId: "1:281383163151:web:5a5a52aa1b7b3a57171a7a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
