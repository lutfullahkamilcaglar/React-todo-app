// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3tWimCcl7r5gUMMlg7bldj5R7RWdW9MI",
  authDomain: "to-do-fe361.firebaseapp.com",
  projectId: "to-do-fe361",
  storageBucket: "to-do-fe361.appspot.com",
  messagingSenderId: "4048007165",
  appId: "1:4048007165:web:a46b5f370cfb79e0ecf394"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)