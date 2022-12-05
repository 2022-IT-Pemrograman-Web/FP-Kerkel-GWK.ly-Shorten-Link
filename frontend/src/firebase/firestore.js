// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdIagc9GdlcuLxdEw-bEHuqD4sJ0sjGwA",
  authDomain: "final-project-34ef4.firebaseapp.com",
  projectId: "final-project-34ef4",
  storageBucket: "final-project-34ef4.appspot.com",
  messagingSenderId: "846988045629",
  appId: "1:846988045629:web:a19958fb0a945a1fb42954",
  measurementId: "G-T0397YQ14C"
};


// Initialize Firebase
initializeApp(firebaseConfig);
// const projectFirestore = firebase.firestore();
// const analytics = getAnalytics(app);
const auth = getAuth();
// export { projectFirestore }
export { auth }

