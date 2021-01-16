import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAlNxk6KOkU3bW69tyN2TSSHoSCbs5OGQ0",
    authDomain: "hackthenorth-2021.firebaseapp.com",
    projectId: "hackthenorth-2021",
    storageBucket: "hackthenorth-2021.appspot.com",
    messagingSenderId: "716207938083",
    appId: "1:716207938083:web:cbc0b329c1d95855262f96"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;