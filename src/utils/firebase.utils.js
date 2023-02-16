// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { doc, setDoc, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC3nDsfyYMlLYchmF9TpARhIvBxZY2tBIc",
    authDomain: "portfolio-df092.firebaseapp.com",
    projectId: "portfolio-df092",
    storageBucket: "portfolio-df092.appspot.com",
    messagingSenderId: "1028895162315",
    appId: "1:1028895162315:web:8f436481b3a82e05d5804e",
    measurementId: "G-KELXTNNDD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

export const contactMessage = async (email, name, subject, message) => {
    const contactRef = doc(db, 'contacts', name)
    try {
        await setDoc(contactRef, {
            name: name,
            email: email,
            subject: subject,
            message: message
        })
    } catch (error) {
        console.log('error', error.message)
    }
}