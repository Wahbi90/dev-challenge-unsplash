import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDufh6zFCT9I3TYg1RrCtnyNaGy1yCBItk",
    authDomain: "unsplash-gallery-proj.firebaseapp.com",
    projectId: "unsplash-gallery-proj",
    storageBucket: "unsplash-gallery-proj.appspot.com",
    messagingSenderId: "623147271822",
    appId: "1:623147271822:web:3846c95ea9f38533eeebdf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const imageStorage = firebase.storage();
  const imageFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;


  export { imageStorage, imageFirestore, timeStamp };