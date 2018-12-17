import firebase from 'firebase/app'
import 'firebase/auth'
import FirebaseConfig from './firebase-config.json'

console.log('config', FirebaseConfig)

firebase.initializeApp(FirebaseConfig)

document.addEventListener('DOMContentLoaded', function () {
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
    let app = firebase.app()
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function')
    document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')} in ${FirebaseConfig.authDomain}`
  } catch (e) {
    console.error(e)
    document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.'
  }
})
