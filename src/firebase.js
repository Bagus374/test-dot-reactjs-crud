import firebase from "firebase";

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChQDFUgF99iQfWmjeocPg52KHJwpJjYjU",
  authDomain: "reactjs-crud-dot.firebaseapp.com",
  projectId: "reactjs-crud-dot",
  storageBucket: "reactjs-crud-dot.appspot.com",
  messagingSenderId: "950229764720",
  appId: "1:950229764720:web:fb03779cd98433221a02b5",
  measurementId: "G-BT79RDTQV9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default app;
export { db };