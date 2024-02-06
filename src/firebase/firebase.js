import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {

  apiKey: "AIzaSyBUKL-_qhPQgz0Mm-c5570rdd0PyrSGpiA",
  authDomain: "surreal-estate-5139d.firebaseapp.com",
  projectId: "surreal-estate-5139d",
  storageBucket: "surreal-estate-5139d.appspot.com",
  messagingSenderId: "562320951413",
  appId: "1:562320951413:web:3a345a9b3f1200f658d03c"
};


 const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);




