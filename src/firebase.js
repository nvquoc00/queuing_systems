import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "queuing-system-97481.firebaseapp.com",
  projectId: "queuing-system-97481",
  storageBucket: "queuing-system-97481.appspot.com",
  messagingSenderId: "1093311348418",
  appId: "1:1093311348418:web:6643ed80a2e91ea607855b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
