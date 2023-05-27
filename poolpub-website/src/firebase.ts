import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

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

export const db = getFirestore(app);

// Sign in with Google
export const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user
        const name = result.user.displayName ?? '';
        const email = result.user.email ?? '';

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)

        window.location.href = "/profile";
    }).catch((error) => {
        console.log(error);
    })
}

export const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear()
        // Redirect to the login page
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("Logout error:", error);
      });
  };