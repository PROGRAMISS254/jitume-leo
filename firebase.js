// ==========================================
// JITUME LEO - FIREBASE CONFIGURATION
// ==========================================

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDH6IpUKjF9vyP8SplqZUkkUGUp6DNVmQA",
    authDomain: "jitume-leo.firebaseapp.com",
    projectId: "jitume-leo",
    storageBucket: "jitume-leo.firebasestorage.app",
    messagingSenderId: "214590713878",
    appId: "1:214590713878:web:26fae4fd25956b24738537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Make app available to other files
export { app };
