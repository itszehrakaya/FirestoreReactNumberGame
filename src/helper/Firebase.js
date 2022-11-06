import { initializeApp } from "firebase/app";
import { collection, getFirestore, doc }from 'firebase/firestore';
   
const firebaseConfig = {
    apiKey: "********************",
    authDomain:"********************",
    projectId:"********************",
    storageBucket: "*******************",
    messagingSenderId: "********************",
    appId: "********************",
    measurementId: "*******************"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const roomColRef = collection(db, "rooms")
const roomDocRef = doc(roomColRef);
export { db ,roomColRef, roomDocRef}

