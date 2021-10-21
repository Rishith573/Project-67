import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA-utifcaFPJPuZUsg_3lnjF9iHKsxtSoc",
    authDomain: "team-voting-app-76eb0.firebaseapp.com",
    projectId: "team-voting-app-76eb0",
    storageBucket: "team-voting-app-76eb0.appspot.com",
    messagingSenderId: "628767858946",
    appId: "1:628767858946:web:73bf9037d0819646fb221b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();