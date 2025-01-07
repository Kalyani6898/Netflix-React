// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR9zonwE8xrocn57tzpoivbFMfEhJGDho",
  authDomain: "netflixgpt-34963.firebaseapp.com",
  projectId: "netflixgpt-34963",
  storageBucket: "netflixgpt-34963.firebasestorage.app",
  messagingSenderId: "593313256707",
  appId: "1:593313256707:web:0205eb4cd8c67e3ec5c536",
  measurementId: "G-Y5W9ZBJYQ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
