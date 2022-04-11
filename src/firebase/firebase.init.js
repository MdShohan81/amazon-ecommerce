// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKdmH75jCtgQClH_lonxWmwZpD2BKpZYA",
  authDomain: "ecommerce-cb940.firebaseapp.com",
  projectId: "ecommerce-cb940",
  storageBucket: "ecommerce-cb940.appspot.com",
  messagingSenderId: "283568927251",
  appId: "1:283568927251:web:cfd536ad78ba39038fc5e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;