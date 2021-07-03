import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCI9vj0hGvO82Fb02W76xPSF7A6aJAUOWg",
    authDomain: "shuffle-time.firebaseapp.com",
    projectId: "shuffle-time",
    storageBucket: "shuffle-time.appspot.com",
    messagingSenderId: "756808074309",
    appId: "1:756808074309:web:5949611633e1abc4ef0f2c",
    measurementId: "G-03B57ZYE6W"
  };

  //const Firebase = firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({ timestampsInSnapshots: true});

  export const db = firebase.firestore();
  export const auth = firebase.auth();
