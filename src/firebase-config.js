import { initializeApp } from "firebase/app";
import {  getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAmMglF3LaGkiPnDmvln1e32tKBkZixR3M",
    authDomain: "fir-tutorial-f5df1.firebaseapp.com",
    projectId: "fir-tutorial-f5df1",
    storageBucket: "fir-tutorial-f5df1.appspot.com",
    messagingSenderId: "675671170860",
    appId: "1:675671170860:web:9d1027e35c2753f3d19689",
    measurementId: "G-VTBQFS82R5"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  export default db;