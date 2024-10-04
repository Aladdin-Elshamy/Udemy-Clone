import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArDf1o7V0HfTollPdh1C6OPO2QwZHtDaE",
  authDomain: "udemy-business-form.firebaseapp.com",
  projectId: "udemy-business-form",
  storageBucket: "udemy-business-form.appspot.com",
  messagingSenderId: "653059502184",
  appId: "1:653059502184:web:909d9f6d5bbb88d7d74bdd",
  measurementId: "G-0LBP9QHZV8",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
