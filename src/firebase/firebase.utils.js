import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDIhbrvolei5hHJx17kmgu1wr8rsDl8Dtg",
  authDomain: "crwn-db2-8c546.firebaseapp.com",
  databaseURL: "https://crwn-db2-8c546.firebaseio.com",
  projectId: "crwn-db2-8c546",
  storageBucket: "crwn-db2-8c546.appspot.com",
  messagingSenderId: "327571884324",
  appId: "1:327571884324:web:838d8b197dff74db8b8bb1",
  measurementId: "G-CT6YTFTZ9K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;