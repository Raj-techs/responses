// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu8qbWaHG3RhBEX4a_cvTxWksGvcGSCVI",
  authDomain: "postdata-f6d65.firebaseapp.com",
  projectId: "postdata-f6d65",
  storageBucket: "postdata-f6d65.appspot.com",
  messagingSenderId: "876607141748",
  appId: "1:876607141748:web:f148a7504f458bc2e59e21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };