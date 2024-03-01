// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtp16Ejb9mKK8Uawjv4ehJU_SVOiT5Guo",
  authDomain: "twitter-f3fc1.firebaseapp.com",
  projectId: "twitter-f3fc1",
  storageBucket: "twitter-f3fc1.appspot.com",
  messagingSenderId: "91549902027",
  appId: "1:91549902027:web:ab9cf7e23b121ac92d274e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth refernası al
export const auth =getAuth(app);

// provider referansı al
export const provider = new GoogleAuthProvider();

// firestore referansı al
export const db = getFirestore(app);

// storage referansı al
export const storage =getStorage(app);