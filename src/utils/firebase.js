// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmCBupmQqFuzCZ1fXhbNH2_U9OHW0iA3w",
  authDomain: "filmpicxgpt.firebaseapp.com",
  projectId: "filmpicxgpt",
  storageBucket: "filmpicxgpt.appspot.com",
  messagingSenderId: "778316620181",
  appId: "1:778316620181:web:f003f84dea168922ce169c",
  measurementId: "G-XY45HX12P1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();



