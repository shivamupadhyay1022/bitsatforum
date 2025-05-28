// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAINkXRLe1-_GnZbq7lhT63cbHeaLwjCDo",
  authDomain: "sci-bitsatforum.firebaseapp.com",
  databaseURL: "https://sci-bitsatforum-default-rtdb.firebaseio.com",
  projectId: "sci-bitsatforum",
  storageBucket: "sci-bitsatforum.firebasestorage.app",
  messagingSenderId: "1060608637590",
  appId: "1:1060608637590:web:6cbe3a003f03ad01f120b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);