import Rebase from 're-base';
import firebase from 'firebase';

const fireApp = firebase.initializeApp({
    apiKey: "AIzaSyD_Of-jR5MzWQmSl75BzBVvRwDXhz8hRZs",
    authDomain: "bookstore-75165.firebaseapp.com",
    databaseURL: "https://bookstore-75165.firebaseio.com",
    projectId: "bookstore-75165",
    storageBucket: "bookstore-75165.appspot.com",
    messagingSenderId: "249553111551"
});

const fbase = Rebase.createClass(fireApp.database());

export {fbase, fireApp};