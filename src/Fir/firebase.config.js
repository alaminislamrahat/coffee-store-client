// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlsH7FAN6S4NacvKL1NVTz6n2k57EnHPE",
  authDomain: "coffee-store-b5af7.firebaseapp.com",
  projectId: "coffee-store-b5af7",
  storageBucket: "coffee-store-b5af7.appspot.com",
  messagingSenderId: "249346405633",
  appId: "1:249346405633:web:d07292d12356db78149700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;