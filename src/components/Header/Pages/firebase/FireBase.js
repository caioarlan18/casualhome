import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyC_PQAGYLLRWZkzRlb5esk17-rYiSxLw10",
    authDomain: "casualhome-266c5.firebaseapp.com",
    projectId: "casualhome-266c5",
    storageBucket: "casualhome-266c5.appspot.com",
    messagingSenderId: "738771469166",
    appId: "1:738771469166:web:8b6875a90dd5e22a1a777f",
    measurementId: "G-T8LDGS02NN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();



export { db, storage }