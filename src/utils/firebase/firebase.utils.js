// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChMpqM8H747k2MQpMMbxJilpwbIbrIiWo",
  authDomain: "roar-db.firebaseapp.com",
  projectId: "roar-db",
  storageBucket: "roar-db.appspot.com",
  messagingSenderId: "732542271448",
  appId: "1:732542271448:web:f158be66080b1a858d3cad",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
console.log('error creating the user', error.message);
    }
  }

return userDocRef;

};
