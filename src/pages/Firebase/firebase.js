import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore'


var config = {
    apiKey: "AIzaSyC2rYB-eBdIXb7fHCZ8KbLrD8L5HfPq-uc",
    authDomain: "soles-website-dev-58009.firebaseapp.com",
    databaseURL: "https://soles-website-dev-58009-default-rtdb.firebaseio.com/",
    projectId: "soles-website-dev-58009",
    storageBucket: "soles-website-dev-58009.firebasestorage.app",
    messagingSenderId: "993878261407",
    appId: "1:993878261407:web:d50629d363e6d3d22b2caa",
    measurementId: "G-GNPR1V1BV8"
};
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

class Firebase {
    constructor() {
        firebase.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
        this.storage = firebase.storage();

    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email,password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);
    
    users = () => this.db.ref('users');

    getUserDict() {
        firebase.firestore().collection("users")
            .where("email", "==", firebase.auth().currentUser.email)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    console.log(doc.id, "==", doc.data());
                    return doc.data();
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            })
        return null;
    }

    getFirestore = () => firebase.firestore();

}

export default Firebase;
