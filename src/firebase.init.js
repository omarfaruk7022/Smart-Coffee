import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB_0F7HeQ8Rdqi7mX_W-5PgJzCu6IY0dNI",
  authDomain: "smart-coffee-007.firebaseapp.com",
  projectId: "smart-coffee-007",
  storageBucket: "smart-coffee-007.appspot.com",
  messagingSenderId: "1046114343498",
  appId: "1:1046114343498:web:4ef17595af301aa1c664b3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;