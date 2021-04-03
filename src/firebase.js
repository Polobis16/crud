import firebase from 'firebase/app'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBpQPqLojMTWJmT07PQ0xyB1FRo_ymEa9c",
    authDomain: "crud-a0dd6.firebaseapp.com",
    projectId: "crud-a0dd6",
    storageBucket: "crud-a0dd6.appspot.com",
    messagingSenderId: "595940348289",
    appId: "1:595940348289:web:cfd75f2b3ef7c853dc5880"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)