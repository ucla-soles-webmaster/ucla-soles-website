import React, { Component } from 'react';

import Navigation from '../../components/Navigation';
import AccountNav from '../../components/AccountNav';
import Footer from '../../components/Footer';

import { withAuthorization } from '../Session';

import '../Account/accountStyle.css';
import './merchStyle.css';
import sun from '../../coverImages/sunblue.png';


class Merch extends Component {

    // Add constructor here when necessary
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            firestore: this.props.firebase.getFirestore(),
            userEmail: this.props.firebase.auth.currentUser.email,
            department: "",
            departmentClasses: [],
            class: "",
            addClass: "",
            currentCard: 0,
            censorName: false,
            censorWork: false,
            file_data: "",
          }
    }

        /*  This function is called once the component is made and ready to be 
        rendered on the screen. It's similar to the constructor. We do API
        calls and database calls in here initially for set up */
        componentWillMount() {
            var that = this;  // must have this for the setState inside lamda
    
            // Getting our user's data, so we can verify they are a student in render()
            this.props.firebase.getFirestore().collection("users")
              .where("email", "==", this.state.userEmail)  // can have multiple .where calls
              .get()
              .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                  that.setState({ user: doc.data() })
                });
              })        
        }
    
    turnStuff(e) {
        var that = this;
            var file = e.target.files;
            var reader = new FileReader();
            reader.readAsDataURL(file[0]);
            reader.onload=(e)=>{
                that.setState({file_data:e.target.result});
            }
    }
    clicker = event => {
        var storageRef = this.props.firebase.storage.ref();
        var mountainImagesRef = storageRef.child('tests/exampletest.png');

        var message = this.state.file_data;
        mountainImagesRef.putString(message, 'data_url').then(function(snapshot) {
        console.log('Uploaded a data_url string!');
});
    }

    render() {
        return (
            <div className="graa"> 
                <Navigation transparentNav={false}/>
                <div className="navgapA">
                    <AccountNav />
                    <div id="filesubmit" onSubmit = {this.onFormSubmit}>
                    <input type="file" id="file-select" onChange = {(e)=>this.turnStuff(e)} accept="image/*"/>
                    <button id = "submitter" onClick = {this.clicker}>Submit</button>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    {console.log(this.state.file_data)}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </div>
                <Footer />
            </div>
        )
    }

}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Merch);
