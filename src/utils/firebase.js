// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjd7isBKUOvAB-W791jSmfI7PxCIyyRDM",
  authDomain: "movie-app-5b0d9.firebaseapp.com",
  projectId: "movie-app-5b0d9",
  storageBucket: "movie-app-5b0d9.appspot.com",
  messagingSenderId: "406808650486",
  appId: "1:406808650486:web:9f4847520d7d24399942d7",
  measurementId: "G-JSKDRQT4QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();