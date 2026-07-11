// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYi5otuWtq-AF69Jgfahb2khP1E10RR0U",
    authDomain: "pooja-artisan-chocolates.firebaseapp.com",
    projectId: "pooja-artisan-chocolates",
    storageBucket: "pooja-artisan-chocolates.firebasestorage.app",
    messagingSenderId: "250366613294",
    appId: "1:250366613294:web:5dc3e2edd9e238d1648cbf",
    measurementId: "G-TLSB0Q5670"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;