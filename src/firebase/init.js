import firebaseConfig from './config'
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Initialiser Firebase
export const app = initializeApp(firebaseConfig);

// Initialiser Firebase Authentification
export const authFirebase = getAuth();

//Authentification fédérée google
export const authGoogle = new GoogleAuthProvider();

//initialiser Firestore
export const bdFirestore = getFirestore();
