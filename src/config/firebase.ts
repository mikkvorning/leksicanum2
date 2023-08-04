import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDclgjKDcr_h8VTinma2pFBSPuuzr2i6e4",
  authDomain: "warhammer-app-cdec2.firebaseapp.com",
  projectId: "warhammer-app-cdec2",
  storageBucket: "warhammer-app-cdec2.appspot.com",
  messagingSenderId: "353531994355",
  appId: "1:353531994355:web:fb01c156a8641db17b5786",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
