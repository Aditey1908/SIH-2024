import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBR3ANtHXRYxvMVgJE_zg8HnMt8iiLbs0o",
    authDomain: "sihhh-81f69.firebaseapp.com",
    projectId: "sihhh-81f69",
    storageBucket: "sihhh-81f69.appspot.com",
    messagingSenderId: "381824054305",
    appId: "1:381824054305:web:f1ae0fd687a7000c27df60",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, createUserWithEmailAndPassword, provider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup };

