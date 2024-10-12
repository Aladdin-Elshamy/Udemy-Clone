// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHuuyZgR18Oi9oTA4Bxzlmjj-Pt1F1MyA",
  authDomain: "signup-udemy.firebaseapp.com",
  projectId: "signup-udemy",
  storageBucket: "signup-udemy.appspot.com",
  messagingSenderId: "384757676855",
  appId: "1:384757676855:web:b2b70769d53a3fed5678b2",
  measurementId: "G-C2K1CW5CTK"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics= getAnalytics(app)

export {app , analytics};