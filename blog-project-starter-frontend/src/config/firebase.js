// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
 
const firebaseConfig = {
  apiKey: "AIzaSyBvAFHTK7PgeW4tj_gUF-3WISSeRTYMI1o",
  authDomain: "blog-app-e9201.firebaseapp.com",
  projectId: "blog-app-e9201",
  storageBucket: "blog-app-e9201.appspot.com",
  messagingSenderId: "984512310724",
  appId: "1:984512310724:web:07555603446e03d29b8891",
  measurementId: "G-0347BRKKEM"
};

// Initialize Firebase



const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth
