import React, { Component } from 'react';

import FlatList from 'flatlist-react';

import Navigation from '../../components/Navigation';
import AccountNav from '../../components/AccountNav';
import Footer from '../../components/Footer';

import { withAuthorization } from '../Session';

import './alumnet.css';



class AlumNet extends Component {

    // Add constructor here when necessary
    constructor(props) {
        super(props);
        
        this.state = {
            userList: [],
            userEmail: this.props.firebase.auth.currentUser.email,
        }

    }

    componentWillMount() {
        
        // Get all users from a user collection
        var that = this;
        this.props.firebase.getFirestore().collection("users")
        .where("career", "==", "alumni")  // can have multiple .where calls
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                var userData = doc.data();
                that.setState({ userList: [...that.state.userList, userData] });
            });    
        });

    }

    renderUser = (user, idx) => {
        return (
            <div className={ this.state.userEmail === user["email"] ? "STARleaderboardRowEvenUSER" : idx % 2 === 0 ? "STARleaderboardRowEven" : "STARleaderboardRowOdd"   }>
                
                {/* User's name */}
                <div className="userLeaderboardName">
                    {user["first_name"]} {user["last_name"]}
                    <br/>
                    <p className="alumnetbio"> 
                        {user["bio"]}
                    </p>
                </div>

            </div>
        );
    }


    render() {
        return (
            <div className="graa"> 
                <Navigation transparentNav={false} />
                <div className="navgapA" style={{minHeight: "100vh"}}>
                    <AccountNav />

                    <h1 className="haccount">
                        Alumni Network
                    </h1>
                    

                    <div className="alumnilist">
                        <p style={{textAlign: "center"}}>
                            Alumni List
                        </p>
                        {console.log(this.state.userList)}
                        <FlatList
                            list={this.state.userList}
                            renderItem={this.renderUser}
                        />
                    </div>

                </div>
                <Footer />
            </div>
        )
    }

}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AlumNet);