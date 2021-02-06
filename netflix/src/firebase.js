import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCJNDU35hyIvGL8d1MFXVjg8vFQlSYBz4",
  authDomain: "netflix-clone-22f65.firebaseapp.com",
  projectId: "netflix-clone-22f65",
  storageBucket: "netflix-clone-22f65.appspot.com",
  messagingSenderId: "1034707269720",
  appId: "1:1034707269720:web:c369a91c6bbdcf36f7f22d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;