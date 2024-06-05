import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBgX3iCXKpu_TLoOdWcwrrC2Ogay-_kuBU",
    authDomain: "userloginsignup-a2466.firebaseapp.com",
    projectId: "userloginsignup-a2466",
    storageBucket: "userloginsignup-a2466.appspot.com",
    messagingSenderId: "189096133658",
    appId: "1:189096133658:web:e53b3e8a4857b1e8debda3",
    measurementId: "G-12P0G4L1X5"
  };
  const app = initializeApp(firebaseConfig);

  export const auth=getAuth(app);