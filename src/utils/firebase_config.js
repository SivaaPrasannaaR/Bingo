import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyBQVCFYd6sLXBi_YGQKvciqlgv068AXWkQ',
  authDomain: 'myexpensetracker-a46f2.firebaseapp.com',
  databaseURL: 'https://myexpensetracker-a46f2-default-rtdb.firebaseio.com',
  projectId: 'myexpensetracker-a46f2',
  storageBucket: 'myexpensetracker-a46f2.appspot.com',
  messagingSenderId: '148066784519',
  appId: '1:148066784519:web:4c57d74e4cefe96bc261a2',
  measurementId: 'G-NDVY21ECTC',
})

export const auth = getAuth(firebaseConfig)
export const db = getFirestore(firebaseConfig)
