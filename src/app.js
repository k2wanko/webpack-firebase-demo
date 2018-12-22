import firebase from 'firebase/app'
import 'firebase/auth'
import FirebaseConfig from './firebase-config.json'

console.log('config', FirebaseConfig)

firebase.initializeApp(FirebaseConfig)

document.addEventListener('DOMContentLoaded', function () {
  try {
    let app = firebase.app()
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function')
    document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')} in ${FirebaseConfig.authDomain}`
  } catch (e) {
    console.error(e)
    document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.'
  }
})
