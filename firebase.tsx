// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue } from "firebase/database";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHxBbQ5by1dOZxyzvAA_iiR917taK9f70",
  authDomain: "non-invasive-glucometer-46d9d.firebaseapp.com",
  databaseURL: "https://non-invasive-glucometer-46d9d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "non-invasive-glucometer-46d9d",
  storageBucket: "non-invasive-glucometer-46d9d.appspot.com",
  messagingSenderId: "162767347143",
  appId: "1:162767347143:web:a5c3d446237b09ba34cde2",
  measurementId: "G-4V7HYVR8L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db, ref, onValue };