// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB18twOyl4gvpdGon9Wh2lI6GP075i-xaQ",
  authDomain: "fir-b97e5.firebaseapp.com",
  databaseURL: "https://fir-b97e5.firebaseio.com",
  projectId: "fir-b97e5",
  storageBucket: "fir-b97e5.appspot.com",
  messagingSenderId: "256845023152",
  appId: "1:256845023152:web:cfc1389901444ce71ff875",
  measurementId: "G-SGPPGN175H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db ,auth};