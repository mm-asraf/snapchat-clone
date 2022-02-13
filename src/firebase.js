import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFGEkW7M2RqH01j1uRLofgmfqDJ_xNdGY",
  authDomain: "snapchat-clone-a57e9.firebaseapp.com",
  projectId: "snapchat-clone-a57e9",
  storageBucket: "snapchat-clone-a57e9.appspot.com",
  messagingSenderId: "854099731461",
  appId: "1:854099731461:web:a4c18d8b7a7c7b9dd4e86c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
