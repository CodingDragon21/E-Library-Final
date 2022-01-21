import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {   
        apiKey: "AIzaSyCK183gCLmtMdUX-pLR1j1kxBCuoMWwIvY",
        authDomain: "e-library-class.firebaseapp.com",
        projectId: "e-library-class",
        storageBucket: "e-library-class.appspot.com",
        messagingSenderId: "1068661136980",
        appId: "1:1068661136980:web:8be848218d62e0bb6197c1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
