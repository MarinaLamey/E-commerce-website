

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider , getAuth } from 'firebase/auth';


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5mBQgfc0qfuPzeTm53HWMV2NQKYkuQdQ",
    authDomain: "negmcartilla.firebaseapp.com",
    projectId: "negmcartilla",
    storageBucket: "negmcartilla.firebasestorage.app",
    messagingSenderId: "878394829761",
    appId: "1:878394829761:web:f4b1c6dcca462c02689d40"
  };
  
  // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);

 export const googleAuthProvider = new GoogleAuthProvider();

