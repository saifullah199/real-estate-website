// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyYhJpTTR3Ai-5sNFGO_2dtl14sibXpvo",
  authDomain: "react-real-estate-92713.firebaseapp.com",
  projectId: "react-real-estate-92713",
  storageBucket: "react-real-estate-92713.appspot.com",
  messagingSenderId: "937743973789",
  appId: "1:937743973789:web:1e9d1d902df78da9b50374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;