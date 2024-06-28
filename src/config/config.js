import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyAfqxmpahOW_gx9r8SmdyJoQ3nTV64V7kw",
    authDomain: "finalproject-915f9.firebaseapp.com",
    projectId: "finalproject-915f9",
    storageBucket: "finalproject-915f9.appspot.com",
    messagingSenderId: "98731158906",
    appId: "1:98731158906:web:093943c66fa31b2e75fac3"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();
  export {auth,db,storage};