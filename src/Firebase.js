// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBqiQ5O0jrs3N6_hPGuhHB_AayJv8Vs_g",
  authDomain: "blog-project-8798b.firebaseapp.com",
  projectId: "blog-project-8798b",
  storageBucket: "blog-project-8798b.appspot.com",
  messagingSenderId: "1042374941959",
  appId: "1:1042374941959:web:bb7db06bda1b12fb51b9a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)


