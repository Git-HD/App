import firebase from 'firebase';
export const firebaseConfig = {
    apiKey: "AIzaSyA9l9YqFdpixiZV3jMsPpHHahGdtkYwrqs",
    authDomain: "pelagic-bastion-232419.firebaseapp.com",
    databaseURL: "https://pelagic-bastion-232419.firebaseio.com",
    projectId: "pelagic-bastion-232419",
    storageBucket: "pelagic-bastion-232419.appspot.com",
    messagingSenderId: "757257647361",
    appId: "1:757257647361:web:a174522815f777f6"
}
const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;