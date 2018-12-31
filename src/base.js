import Rebase from 're-base';
import firebase from 'firebase' ;

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCViYe90y5rmDpHG0TPP-gFBDdzaMjS6Zc",
  authDomain: "catch-of-the-day-nkhil.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-nkhil.firebaseio.com",
  // projectId: "catch-of-the-day-nkhil",
  // storageBucket: "catch-of-the-day-nkhil.appspot.com",
  // messagingSenderId: "737638122397"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;