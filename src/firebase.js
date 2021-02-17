// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCqPXGKlTJ5Ku3Jotj19OMvGAhP6iNVAHQ",
    authDomain: "challenge-d8456.firebaseapp.com",
    projectId: "challenge-d8456",
    storageBucket: "challenge-d8456.appspot.com",
    messagingSenderId: "65370852974",
    appId: "1:65370852974:web:d25c6689ebd416958ea07f",
    measurementId: "G-W4JFGCK2PD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};