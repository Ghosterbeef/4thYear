import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Loader from "@/components/Loader";

import firebase from "firebase/compat";
import 'firebase/auth'
import 'firebase/database'



firebase.initializeApp({
    apiKey: "AIzaSyAuWnCK1fG0rgZqVLAudWG6KfDO_sszULQ",
    authDomain: "thyear-3e949.firebaseapp.com",
    databaseURL: "https://thyear-3e949-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "thyear-3e949",
    storageBucket: "thyear-3e949.appspot.com",
    messagingSenderId: "955632743525",
    appId: "1:955632743525:web:468fdc830a35b01feb828c",
    measurementId: "G-5YT13E1SBS"
})

let app

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App).use(store).use(router).mount('#app')
    }
})

