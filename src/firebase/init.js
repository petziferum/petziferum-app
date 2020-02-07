import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDmg53knKxrYOFMWUM2h0jUI8etJyuT_vw",
    authDomain: "petziferum-85609.firebaseapp.com",
    databaseURL: "https://petziferum-85609.firebaseio.com",
    projectId: "petziferum-85609",
    storageBucket: "petziferum-85609.appspot.com",
    messagingSenderId: "539624071543",
    appId: "1:539624071543:web:d2d37d61cd9511c036c172",
    measurementId: "G-P0VN2DVENQ"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()