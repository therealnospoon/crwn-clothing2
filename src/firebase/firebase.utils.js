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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
