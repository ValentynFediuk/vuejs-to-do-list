import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBB5i7SmgbhBrIWi-gp0bOs4pIqBG1MRsI",
    authDomain: "vjtdl-vf.firebaseapp.com",
    projectId: "vjtdl-vf",
    storageBucket: "vjtdl-vf.appspot.com",
    messagingSenderId: "321907261687",
    appId: "1:321907261687:web:ee940e3ba15a84f49193f2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')