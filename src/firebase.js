// Firebase v9+ ile uyumlu şekilde import edilir.
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase config nesnesi
const firebaseConfig = {
  apiKey: 'AIzaSyCiY83tGf1DIH9d_oOEN9FT8dGZ6hEGzEE',
  authDomain: 'netflix-d5095.firebaseapp.com',
  projectId: 'netflix-d5095',
  storageBucket: 'netflix-d5095.appspot.com',
  messagingSenderId: '871943560093',
  appId: '1:871943560093:web:2470b19e3fc7d8c4bfed74',
};

// Firebase uygulamasını başlat
const firebaseApp = initializeApp(firebaseConfig);

// Firestore ve Auth servislerini al
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, db };
