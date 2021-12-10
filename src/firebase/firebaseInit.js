import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAT2unmCGruvhXUWsaDTGUOKc_xzBrUcBw",
  authDomain: "nerdsblog-3d2c7.firebaseapp.com",
  projectId: "nerdsblog-3d2c7",
  storageBucket: "nerdsblog-3d2c7.appspot.com",
  messagingSenderId: "515474112641",
  appId: "1:515474112641:web:166901480bff45cba9cd80"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();
