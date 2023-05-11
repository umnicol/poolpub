import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEDwsTeKCGlhgtFKS4Y7sKjiJdx1p8Ftw",
  authDomain: "poolpub-f880f.firebaseapp.com",
  projectId: "poolpub-f880f",
  storageBucket: "poolpub-f880f.appspot.com",
  messagingSenderId: "212475858315",
  appId: "1:212475858315:web:99b258ad204af54079338e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

// Sign in with Google
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const name = result.user.displayName ?? '';
        const email = result.user.email ?? '';

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }).catch((error) => {
        console.log(error);
    })
}