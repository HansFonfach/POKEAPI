// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbdR8HUR5-JJhJZ1z7I4n5JvOKkL4rK7g",
  authDomain: "react-37f88.firebaseapp.com",
  projectId: "react-37f88",
  storageBucket: "react-37f88.appspot.com",
  messagingSenderId: "1021664119561",
  appId: "1:1021664119561:web:384d90bf01228ca75921d8"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp); // lo necesito para la autenticacion
export const FirebaseBD = getFirestore(FirebaseApp); // configuracion de la bd