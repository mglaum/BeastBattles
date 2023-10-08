// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-tZQNn6_9DoWlNZJDDPSFEvDYnqsWjp4",
  authDomain: "beastbattles-8315b.firebaseapp.com",
  projectId: "beastbattles-8315b",
  storageBucket: "beastbattles-8315b.appspot.com",
  messagingSenderId: "282350982348",
  appId: "1:282350982348:web:80f1a31b023bef73209e69",
  measurementId: "G-6K1E86VYRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;