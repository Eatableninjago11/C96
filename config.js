import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyAqYG74MioMIbaURoO1uGbhpmbo0z28ROs",
  authDomain: "rock-song-finder.firebaseapp.com",
  projectId: "rock-song-finder",
  storageBucket: "rock-song-finder.appspot.com",
  messagingSenderId: "536166069968",
  appId: "1:536166069968:web:309f1e01dfef3ace9310d5"
};


if (!firebase.apps.length) 
firebase.initializeApp(firebaseConfig); 






export default firebase.firestore();


