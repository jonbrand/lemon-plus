import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'; 
/* import firebase from "firebase";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbAS1OiUBf9jY1vn89qUSBof1BzTBj-jI",
  authDomain: "lemon-plus-f9b9f.firebaseapp.com",
  projectId: "lemon-plus-f9b9f",
  storageBucket: "lemon-plus-f9b9f.appspot.com",
  messagingSenderId: "526671414374",
  appId: "1:526671414374:web:d2b8987889826bf8da59a7",
  measurementId: "G-8F6Y2TJ7VV"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;