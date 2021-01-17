import firebase from "firebase/app";
import { useLocation } from 'react-router-dom';

import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import dotenv from 'dotenv'
dotenv.config()

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,

});

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithRedirect(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}
export const logOut = () => {
  auth.signOut().then(()=> {
    console.log('logged out');
    // window.location.href.reload(false);
  }).catch((error) => {
    console.log(error.message)
  })
}

export function addUser(userId) {
  firebase.database().ref('users/' + userId).set({
    feeling: "",
    tasks: "",
    year : "",
    month: "",
    day: "",
  });
}

