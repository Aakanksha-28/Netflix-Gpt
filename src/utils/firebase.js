// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClk-9VVl9Dic2p-9FBAWdOjcIp6yGHo_0",
  authDomain: "netflix-gpt-3bf22.firebaseapp.com",
  projectId: "netflix-gpt-3bf22",
  storageBucket: "netflix-gpt-3bf22.appspot.com",
  messagingSenderId: "222632133035",
  appId: "1:222632133035:web:7f057d346bc133277a52ee",
  measurementId: "G-LPSDSJ83LL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
