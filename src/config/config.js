import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfqxmpahOW_gx9r8SmdyJoQ3nTV64V7kw",
  authDomain: "finalproject-915f9.firebaseapp.com",
  databaseURL: "https://finalproject-915f9-default-rtdb.firebaseio.com",
  projectId: "finalproject-915f9",
  storageBucket: "finalproject-915f9.appspot.com",
  messagingSenderId: "98731158906",
  appId: "1:98731158906:web:093943c66fa31b2e75fac3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
