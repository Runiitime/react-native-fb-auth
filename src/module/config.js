import * as firebase from 'firebase'
const config = {
  apiKey: "AIzaSyAebraoR2TTZtaqazFWaGLo3Oea-FiKTfs",
  authDomain: "rnclauth.firebaseapp.com",
  databaseURL: "https://rnclauth.firebaseio.com",
  projectId: "rnclauth",
  storageBucket: "rnclauth.appspot.com",
  messagingSenderId: "192545036446",
  appId: "1:192545036446:web:824bf9682ce9595299038f",
  measurementId: "G-MKKTTZLFS7"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()