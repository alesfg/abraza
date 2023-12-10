import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
/*   apiKey: 'api-key',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com', ---------------------
  projectId: 'project-id',
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id', */

  apiKey: "AIzaSyAl2gZHUF17U9ozYhzrIMBdpbDeDJzaqek",
  authDomain: "nnn-watch.firebaseapp.com",
  projectId: "nnn-watch",
  storageBucket: "nnn-watch.appspot.com",
  messagingSenderId: "503660623073",
  appId: "1:503660623073:web:c382ed79b75b2a3554b3a0",
  measurementId: "G-KTTL8BHDWZ"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
