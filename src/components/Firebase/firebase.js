import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


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

        var firestore = firebase.firestore();
        const docRef = firestore.collection("users").doc("XYEx3ATt5lXqWFAJiCuOCJvt5Rv1");

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });


        /*
        firestore.collection('users').add({
            name: 'um hello?'
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        */



        this.auth = app.auth();
        this.db = app.database();
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

    getFirestore = () => firebase.firestore();

}

export default Firebase;