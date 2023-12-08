// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl2gZHUF17U9ozYhzrIMBdpbDeDJzaqek",
  authDomain: "nnn-watch.firebaseapp.com",
  projectId: "nnn-watch",
  storageBucket: "nnn-watch.appspot.com",
  messagingSenderId: "503660623073",
  appId: "1:503660623073:web:c382ed79b75b2a3554b3a0",
  measurementId: "G-KTTL8BHDWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);