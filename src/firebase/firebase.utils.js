import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDiNjQas5p0j6_hbznoF43Dhtsg7IHeXmI",
    authDomain: "skivi-db.firebaseapp.com",
    databaseURL: "https://skivi-db.firebaseio.com",
    projectId: "skivi-db",
    storageBucket: "skivi-db.appspot.com",
    messagingSenderId: "1050383475382",
    appId: "1:1050383475382:web:d77c2e78230c711b40fc17",
    measurementId: "G-P6XQHQQ488"
}

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
