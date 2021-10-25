import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import firebase from 'firebase'

/* code from our Firebase console */
var firebaseConfig = {
    apiKey: "AIzaSyDogrE49NV3trk_lItcvx0cDxclo65WDes",
    authDomain: "website-ecom-ff223.firebaseapp.com",
    databaseURL: "https://website-ecom-ff223-default-rtdb.firebaseio.com",
    projectId: "website-ecom-ff223",
    storageBucket: "website-ecom-ff223.appspot.com",
    messagingSenderId: "144186283636",
    appId: "1:144186283636:web:209c1d02bf3170d59f6321",
    measurementId: "G-6G4DB0H9WM"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')