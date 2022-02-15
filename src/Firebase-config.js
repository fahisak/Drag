import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    // apiKey: "AIzaSyBG_9s2JJDUeBLtMenyPtIBsVLupa8vRB8",
    // authDomain: "fir-tutorial-ad573.firebaseapp.com",
    // projectId: "fir-tutorial-ad573",
    // storageBucket: "fir-tutorial-ad573.appspot.com",
    // messagingSenderId: "459866772432",
    // appId: "1:459866772432:web:b029523d67a8c9f1981fd5",
    // measurementId: "G-2R62T7YE0E",

    apiKey: "AIzaSyBgLnlxBhYc_cYzTGK2IevKrGqmu6_0Adc",
    authDomain: "task-48c77.firebaseapp.com",
    projectId: "task-48c77",
    storageBucket: "task-48c77.appspot.com",
    messagingSenderId: "846677001919",
    appId: "1:846677001919:web:812f69495a9044e63de80a",
    measurementId: "G-N6671ZK78P"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);