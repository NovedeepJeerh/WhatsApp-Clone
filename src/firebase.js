import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDolk6FevGSA4F6yqUV65oTk-PzfDtKCME",
    authDomain: "whatapp-clone-64641.firebaseapp.com",
    projectId: "whatapp-clone-64641",
    storageBucket: "whatapp-clone-64641.appspot.com",
    messagingSenderId: "544267241394",
    appId: "1:544267241394:web:b73a92f567dd73bd3a46ab"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;