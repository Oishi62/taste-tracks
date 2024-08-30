import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    // apiKey: "AIzaSyDYUMpnLX0RaeR3I8H6kdwgDu6mtSFjR1U",
    // authDomain: "tastetracks-1a195.firebaseapp.com",
    // projectId: "tastetracks-1a195",
    // storageBucket: "tastetracks-1a195.appspot.com",
    // messagingSenderId: "726797437789",
    // appId: "1:726797437789:web:13d35c8a747acbb8ce76b4",
    // measurementId: "G-BV60Y2GT2E"


    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  };

  const app=initializeApp(firebaseConfig);

  export const auth=getAuth();
  export const db=getFirestore(app);
  export const storage = getStorage(app);
  export default app;