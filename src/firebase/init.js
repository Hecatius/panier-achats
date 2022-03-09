import firebaseConfig from './config'
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { initializeApp } from 'firebase/app';




// Initialiser Firebase
export const app = initializeApp(firebaseConfig);

//initialiser Firestore
export const bdFirestore = getFirestore();
