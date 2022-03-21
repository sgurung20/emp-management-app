import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//get your config from console.firebase.com
//For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyB3NU8_PpA8yS01O1N9voZc3folhrBX89A",
    authDomain: "empapp-95669.firebaseapp.com",
    projectId: "empapp-95669",
    storageBucket: "empapp-95669.appspot.com",
    messagingSenderId: "682668490741",
    appId: "1:682668490741:web:7c02c85aa8f497fee7aabc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(firebaseConfig);
const auth = firebaseApp.auth();

export { auth };
export default { db };