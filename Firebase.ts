import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyAYFwLOLQqnx30XqA6cL8rbFFKtyTxa0ls',
    authDomain: 'fir-auth-2a909.firebaseapp.com',
    projectId: 'fir-auth-2a909'
};


if (getApps().length === 0) {
    initializeApp(firebaseConfig);
}

export { getFirestore, addDoc, collection, getDocs, setDoc, doc }