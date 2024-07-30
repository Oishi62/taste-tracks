import {initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDYUMpnLX0RaeR3I8H6kdwgDu6mtSFjR1U",
    authDomain: "tastetracks-1a195.firebaseapp.com",
    projectId: "tastetracks-1a195",
    storageBucket: "tastetracks-1a195.appspot.com",
    messagingSenderId: "726797437789",
    appId: "1:726797437789:web:13d35c8a747acbb8ce76b4",
    measurementId: "G-BV60Y2GT2E"
  };

  export const app=initializeApp(firebaseConfig);