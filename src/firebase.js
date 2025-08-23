// src/firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Replace these values with your Firebase project settings
const firebaseConfig = {
    apiKey: "AIzaSyB4Z6UvR4xcp96KkaJ0JE8lMN4ySY-pkGs",
    authDomain: "hrmanagement-32049.firebaseapp.com",
    projectId: "hrmanagement-32049",
    storageBucket: "hrmanagement-32049.firebasestorage.app",
    messagingSenderId: "191674465507",
    appId: "1:191674465507:web:bbd0e4c14290349905d9d6",
    measurementId: "G-C5HKD04SQH"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Export Firestore DB
export const db = getFirestore(app)
