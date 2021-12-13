import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvF-kOvVH_OpDhDXWaY1EhFqLx7FKys3Q",
  authDomain: "quora-cub.firebaseapp.com",
  projectId: "quora-cub",
  storageBucket: "quora-cub.appspot.com",
  messagingSenderId: "296182346954",
  appId: "1:296182346954:web:4726e4a17205cc3731f033",
  measurementId: "G-DFWTQ9JEH0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
