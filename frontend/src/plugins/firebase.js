import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBD8yZlhIQ-t2KNLdfxNtGyEUKoBHwbHnk",
  authDomain: "kouxinha-site.firebaseapp.com",
  projectId: "kouxinha-site",
  storageBucket: "kouxinha-site.appspot.com",
  messagingSenderId: "154146545291",
  appId: "1:154146545291:web:536a4c92884464fd77be8e",
  measurementId: "G-5H4XFEJHX6"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
const db = getFirestore(firebase);

export default db;