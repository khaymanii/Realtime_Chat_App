import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwTWbcTfJTl3spcF00b5K9mGXSb1TcaN8",
  authDomain: "realtime-chat-aa4f2.firebaseapp.com",
  projectId: "realtime-chat-aa4f2",
  storageBucket: "realtime-chat-aa4f2.appspot.com",
  messagingSenderId: "384394654254",
  appId: "1:384394654254:web:7c6dad5665bd4462bce5bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

