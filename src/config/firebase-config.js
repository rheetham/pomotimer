// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB__mqzc7223sWliFtJJ6JdFN1so0pB94A",
  authDomain: "zenith-f8eab.firebaseapp.com",
  projectId: "zenith-f8eab",
  storageBucket: "zenith-f8eab.appspot.com",
  messagingSenderId: "939945454135",
  appId: "1:939945454135:web:fdcd13f3f1aae7bfcb6db2",
  measurementId: "G-XXFMWPWG40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const name= result.user.displayName;
// export const email= result.user.email;
// export const photoUrl= result.user.photoURL;
