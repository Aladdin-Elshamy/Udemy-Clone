// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj1eI_FM5unkmS5A5TyinhydiOlH4kgbs",
  authDomain: "realtime-database-84d36.firebaseapp.com",
  databaseURL: "https://realtime-database-84d36-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "realtime-database-84d36",
  storageBucket: "realtime-database-84d36.appspot.com",
  messagingSenderId: "192252263794",
  appId: "1:192252263794:web:da177303522d87a4a4b1eb"
};

export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({
  'display': 'popup'
});
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = 'en';
