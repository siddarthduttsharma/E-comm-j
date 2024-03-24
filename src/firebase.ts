import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmpuWT-FLGX39mh8uRzcMCVn47IBXK7LQ",
  authDomain: "e-commerce-66d8a-a38ed.firebaseapp.com",
  projectId: "e-commerce-66d8a",
  storageBucket: "e-commerce-66d8a.appspot.com",
  messagingSenderId: "218915870959",
  appId: "1:218915870959:web:1936b17762a160aeaae31a",
  measurementId: "G-GPVX4SPFW5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
