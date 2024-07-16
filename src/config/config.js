import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAfqxmpahOW_gx9r8SmdyJoQ3nTV64V7kw",
  authDomain: "finalproject-915f9.firebaseapp.com",
  databaseURL: "https://finalproject-915f9-default-rtdb.firebaseio.com",
  projectId: "finalproject-915f9",
  storageBucket: "finalproject-915f9.appspot.com",
  messagingSenderId: "98731158906",
  appId: "1:98731158906:web:093943c66fa31b2e75fac3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


const googleProvider = new GoogleAuthProvider();

export { auth, db, storage, googleProvider };
