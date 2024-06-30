// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCbwQKxRQfg8kqHkLvLBenbL2JaVImBs_Y",
  authDomain: "hackathon-lcep.firebaseapp.com",
  projectId: "hackathon-lcep",
  storageBucket: "hackathon-lcep.appspot.com",
  messagingSenderId: "576087027020",
  appId: "1:576087027020:web:833645c1e62e27b4bd73e9",
  measurementId: "G-RHYGVYHWSV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };
