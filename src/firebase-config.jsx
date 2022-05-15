import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDmjdOT1GbF6Ri-eNXRYMxwbJWJG3qNS0s",
    authDomain: "prosperabouar-b9a50.firebaseapp.com",
    projectId: "prosperabouar-b9a50",
    storageBucket: "prosperabouar-b9a50.appspot.com",
    messagingSenderId: "316363026924",
    appId: "1:316363026924:web:2955ca34c00faf691310c9",
    measurementId: "G-BG8REL81CZ"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);