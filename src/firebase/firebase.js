import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmgBmY-qsX0veIlPgWJojPJU65bQ-CrYg",
    authDomain: "whatsapp-clone-mern-981f2.firebaseapp.com",
    projectId: "whatsapp-clone-mern-981f2",
    storageBucket: "whatsapp-clone-mern-981f2.appspot.com",
    messagingSenderId: "128877230696",
    appId: "1:128877230696:web:d487200e668eca07c419dd",
    measurementId: "G-GC3JXG7RZH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
