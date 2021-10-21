import firebase from 'firebase';

const firebaseApp = firebase.initialiseApp({
    apiKey: "AIzaSyCg1yNxN2fJwURmEhhYhX9PwgMr8jdp2lY",
    authDomain: "todo-app-664c7.firebaseapp.com",
    projectId: "todo-app-664c7",
    storageBucket: "todo-app-664c7.appspot.com",
    messagingSenderId: "861448113760",
    appId: "1:861448113760:web:2f178eca90ae10ebda7d05",
    measurementId: "G-6RRQL18G6Q"
})

const db = firebaseApp.firestore()

export {db}