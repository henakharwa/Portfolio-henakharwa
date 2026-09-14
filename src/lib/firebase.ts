// Firebase is used only for the contact form (writes a document to the
// "messages" collection in Firestore). See PORTFOLIO_SETUP.md for how to
// create a free Firebase project and fill in the VITE_FIREBASE_* values in
// your .env file.
//
// The app intentionally still works with no Firebase config: isFirebaseConfigured
// is false and the contact form shows a setup notice instead of crashing.

import { initializeApp, getApps, type FirebaseOptions } from 'firebase/app'
import { getFirestore, type Firestore } from 'firebase/firestore'

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

export const isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId)

let db: Firestore | null = null

if (isFirebaseConfigured) {
  const app = getApps()[0] ?? initializeApp(firebaseConfig)
  db = getFirestore(app)
}

export { db }
