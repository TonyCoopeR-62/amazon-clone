import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA0ihfu11HGy40-PBaGfByJ5T_IFeBBKCM",
  authDomain: "fir-9bbc9.firebaseapp.com",
  databaseURL: "https://fir-9bbc9.firebaseio.com",
  projectId: "fir-9bbc9",
  storageBucket: "fir-9bbc9.appspot.com",
  messagingSenderId: "765188106688",
  appId: "1:765188106688:web:2228356fd0f2b386494025",
  measurementId: "G-GFH3C2E9X9"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {
  db,
  auth,
}
