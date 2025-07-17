// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVpRQ7kcm_tVAI3DGqE-AJRYSNU9kd_Co",
  authDomain: "sacdeli-8c146.firebaseapp.com",
  projectId: "sacdeli-8c146",
  storageBucket: "sacdeli-8c146.appspot.com",
  messagingSenderId: "829241465949",
  appId: "1:829241465949:web:54d2606282cb1057ec81b4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
