import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyBB5i7SmgbhBrIWi-gp0bOs4pIqBG1MRsI",
  authDomain: "vjtdl-vf.firebaseapp.com",
  databaseURL: "https://bezkoder-firebase.firebaseio.com",
  projectId: "vjtdl-vf",
  storageBucket: "vjtdl-vf.appspot.com",
  messagingSenderId: "321907261687",
  appId: "1:321907261687:web:ee940e3ba15a84f49193f2"
};

firebase.initializeApp(config);

export default firebase.firestore();
