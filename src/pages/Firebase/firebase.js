import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore'


var config = {
    apiKey: "AIzaSyDD4ngWxZnLgn9sVO0TMlUw0iyCxs1ACJc",
    authDomain: "soles-website-dev.firebaseapp.com",
    databaseURL: "https://soles-website-dev.firebaseio.com",
    projectId: "soles-website-dev",
    storageBucket: "soles-website-dev.appspot.com",
    messagingSenderId: "556961484501",
    appId: "1:556961484501:web:c7b0bb678f64d130611c5c"
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
