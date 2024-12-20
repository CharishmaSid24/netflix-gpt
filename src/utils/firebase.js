// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBskNqzYOhbJaS7vipOzbYeyFynHt3QOPk",
  authDomain: "netflix-gpt-136d1.firebaseapp.com",
  projectId: "netflix-gpt-136d1",
  storageBucket: "netflix-gpt-136d1.firebasestorage.app",
  messagingSenderId: "720174685860",
  appId: "1:720174685860:web:a5151fc2433dd386fc1031",
  measurementId: "G-RN6C2LN0GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();