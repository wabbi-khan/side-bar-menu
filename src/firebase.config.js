import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyBIBwx98GV9jn8nTQaaNyJtKgA9WZIBZ_8",
    authDomain: "restaurantapp-f7cb5.firebaseapp.com",
    databaseURL: "https://restaurantapp-f7cb5-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-f7cb5",
    storageBucket: "restaurantapp-f7cb5.appspot.com",
    messagingSenderId: "508617332771",
    appId: "1:508617332771:web:c9564b2833d3fef1c23996"
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)
export { app, firestore, storage }