import firebase from 'firebase/app'
import 'firebase/analytics'

import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'

export const firebaseConfig = {
  apiKey: 'AIzaSyDDksUvm-Q8pfcoIZRdBACtkGvdDEINRIo',
  authDomain: 'twitter-clone-c0b2e.firebaseapp.com',
  databaseURL: 'https://twitter-clone-c0b2e.firebaseio.com',
  projectId: 'twitter-clone-c0b2e',
  storageBucket: 'twitter-clone-c0b2e.appspot.com',
  messagingSenderId: '925011098243',
  appId: '1:925011098243:web:41b18d289d7a426c3ff9b6',
  measurementId: 'G-YR6QBCEXJP',
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

export default firebase
