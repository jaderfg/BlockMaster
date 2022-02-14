import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0dOnnjwyWl9vKrwjQapYPEXtW7geaAUA",
    authDomain: "blockmaster-6154a.firebaseapp.com",
    projectId: "blockmaster-6154a",
    storageBucket: "blockmaster-6154a.appspot.com",
    messagingSenderId: "760077893400",
    appId: "1:760077893400:web:6dfe2b1ada95c2b116a86d"
  };

const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();

export{
    app,
    google
}