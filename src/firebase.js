 //import firebase from "firebase";
 import firebase from 'firebase/compat/app';
 import 'firebase/compat/firestore';
 import 'firebase/compat/auth';
 
//  import firebase from 'firebase/compat/app';
//  import 'firebase/compat/auth';
//  import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZb_tTtJWqo02OavJrIzeVPFxFmUIrodU",
  authDomain: "clone-7a9b2.firebaseapp.com",
  projectId: "clone-7a9b2",
  storageBucket: "clone-7a9b2.appspot.com",
  messagingSenderId: "587884695074",
  appId: "1:587884695074:web:06634f522ea93e22da847b",
  measurementId: "G-KQCBNBQ1EZ"
};
const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};