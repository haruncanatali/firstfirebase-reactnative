import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDU6U82-O8gmtWTSwQDR4H7Flc3V2MFhEY",
  authDomain: "rn-first-adf30.firebaseapp.com",
  projectId: "rn-first-adf30",
  storageBucket: "rn-first-adf30.appspot.com",
  messagingSenderId: "926176760379",
  appId: "1:926176760379:web:966895008dbe4a90c7021e"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth()

export {auth}

