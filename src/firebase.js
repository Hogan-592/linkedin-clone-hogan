import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC4Xwm1agUA3siIU6focILJBobGmOHWd6c",
    authDomain: "linkedin-clone-hogan.firebaseapp.com",
    projectId: "linkedin-clone-hogan",
    storageBucket: "linkedin-clone-hogan.appspot.com",
    messagingSenderId: "522080083001",
    appId: "1:522080083001:web:59d758ac8a7b5cff86c1e8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
//   This line of code connects everything
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
