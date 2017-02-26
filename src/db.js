import * as firebase from 'firebase';

// Initialize Firebase and log in
const config = {
  apiKey: "AIzaSyAERhm4hw0QCBBXS_-IL2pcxvv-ZUqrdMk",
  authDomain: "contact-form-91ea2.firebaseapp.com",
  databaseURL: "https://contact-form-91ea2.firebaseio.com",
  storageBucket: "contact-form-91ea2.appspot.com",
  messagingSenderId: "862668692236"
};

const firebaseContact = firebase.initializeApp(config);

firebase.auth().signInAnonymously().catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
});

// Sender
export default function(data) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      firebaseContact
        .database()
        .ref('contact')
        .child('idee')
        .push(data);
    }
  });
}
