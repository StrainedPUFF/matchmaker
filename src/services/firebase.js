// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Firebase configuration (replace with your Firebase project settings)
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_apiKey,
  authDomain: process.env.EXPO_PUBLIC_authDomain,
  projectId: process.env.EXPO_PUBLIC_projectId,
  storageBucket: process.env.EXPO_PUBLIC_storageBucket,
  messagingSenderId: process.env.EXPO_PUBLIC_messagingSenderId,
  appId: process.env.EXPO_PUBLIC_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
