import router from "./router";
import {createApp} from "vue";
import { initializeApp } from "firebase/app";
import App from './App.vue'

const firebaseConfig = {
    apiKey: "AIzaSyBB5i7SmgbhBrIWi-gp0bOs4pIqBG1MRsI",
    authDomain: "vjtdl-vf.firebaseapp.com",
    projectId: "vjtdl-vf",
    storageBucket: "vjtdl-vf.appspot.com",
    messagingSenderId: "321907261687",
    appId: "1:321907261687:web:ee940e3ba15a84f49193f2"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')