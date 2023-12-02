import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmbkkEvbCat-G-NClPxdvcGN_QnjKncj8",
  authDomain: "linkedin-clone-82041.firebaseapp.com",
  projectId: "linkedin-clone-82041",
  storageBucket: "linkedin-clone-82041.appspot.com",
  messagingSenderId: "537544605439",
  appId: "1:537544605439:web:180de6d9beecf2e010d6ca",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  provider,
  onAuthStateChanged,
  signOut,
  storage,
  uploadBytesResumable,
  getDownloadURL,
  ref,
  db,
  collection,
  addDoc,
  query,
  where,
  getDocs,
};
