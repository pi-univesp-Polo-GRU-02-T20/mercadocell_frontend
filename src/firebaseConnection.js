import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCMHvX_ZCx7RkBKB-8J-2-oOP1iHzw1ndc",
    authDomain: "mercadocell-6d0db.firebaseapp.com",
    projectId: "mercadocell-6d0db",
    storageBucket: "mercadocell-6d0db.appspot.com",
    messagingSenderId: "20629046754",
    appId: "1:20629046754:web:9545b1d045e9456ccb25bb"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { db, auth };