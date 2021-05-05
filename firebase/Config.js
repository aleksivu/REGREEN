import firebase from 'firebase';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAzpy3txHYwubUH3TrOhX62OeWzy_L0EX4",
    authDomain: "regreen-93753.firebaseapp.com",
    projectId: "regreen-93753",
    storageBucket: "regreen-93753.appspot.com",
    messagingSenderId: "748022062397",
    appId: "1:748022062397:web:111bdda020f447004b7954",
    databaseURL: "https://regreen-93753-default-rtdb.firebaseio.com/"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export { firebase };