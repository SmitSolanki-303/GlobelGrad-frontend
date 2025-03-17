// frontend/src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBwLj7Ps2DdMH985GPs4Xxocj8-QeZc-ok",
  authDomain: "globalgrad-29.firebaseapp.com",
  projectId: "globalgrad-29",
  storageBucket: "globalgrad-29.firebasestorage.com",
  messagingSenderId: "792816948374",
  appId: "1:792816948374:web:2b66eb036fa52fe06edeb7",
  measurementId: "G-FWF2QCNHYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth , db, collection, addDoc, storage};

