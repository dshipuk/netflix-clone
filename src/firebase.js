import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7lUAkbX6qLfeHi8TsXdQLecfJV6mG-5A",
  authDomain: "netflix-clone-1d26c.firebaseapp.com",
  projectId: "netflix-clone-1d26c",
  storageBucket: "netflix-clone-1d26c.appspot.com",
  messagingSenderId: "747696291413",
  appId: "1:747696291413:web:fadd4684f07d6686bc9edc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
