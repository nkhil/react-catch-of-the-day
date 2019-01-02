import Rebase from 're-base';
import firebase from 'firebase' ;

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCViYe90y5rmDpHG0TPP-gFBDdzaMjS6Zc",
  authDomain: "catch-of-the-day-nkhil.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-nkhil.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;