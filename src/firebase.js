import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDYUMpnLX0RaeR3I8H6kdwgDu6mtSFjR1U",
    authDomain: "tastetracks-1a195.firebaseapp.com",
    projectId: "tastetracks-1a195",
    storageBucket: "tastetracks-1a195.appspot.com",
    messagingSenderId: "726797437789",
    appId: "1:726797437789:web:13d35c8a747acbb8ce76b4",
    measurementId: "G-BV60Y2GT2E"
  };

  const app=initializeApp(firebaseConfig);

  export const auth=getAuth();
  export const db=getFirestore(app);
  export const storage = getStorage(app);
  export default app;