import firebase from 'firebase';

const firebaseApp = firebase.initialiseApp({
    apiKey: "apikey",
    authDomain: "todo-app-664c7.firebaseapp.com",
    projectId: "todo-app-664c7",
    storageBucket: "todo-app-664c7.appspot.com",
    messagingSenderId: "senderid",
    appId: "appid",
    measurementId: "msrid"
})

const db = firebaseApp.firestore()

export {db}
