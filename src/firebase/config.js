// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB,
  authDomain: "eshop-93aad.firebaseapp.com",
  projectId: "eshop-93aad",
  storageBucket: "eshop-93aad.appspot.com",
  messagingSenderId: "339261472585",
  appId: "1:339261472585:web:84f23b01df9951cfc3a498",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
