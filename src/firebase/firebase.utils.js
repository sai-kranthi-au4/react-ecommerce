import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB7zzHtNfb1RVjTd-u0OY-20eqWUwJtMp0",
  authDomain: "v-db-9e28b.firebaseapp.com",
  databaseURL: "https://v-db-9e28b.firebaseio.com",
  projectId: "v-db-9e28b",
  storageBucket: "v-db-9e28b.appspot.com",
  messagingSenderId: "168605528930",
  appId: "1:168605528930:web:16009dd8f3aa824209b23b",
  measurementId: "G-WVSG28V9F3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
