import React, { Component } from 'react';

import FlatList from 'flatlist-react';

import { withAuthorization } from '../../pages/Session';

import './leaderboardStyle.css';


class STARLeaderboard extends Component {
    
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
        .where("career", "==", "student")  // can have multiple .where calls
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                var userData = doc.data();
                that.setState({ userList: [...that.state.userList, userData] });
            });    
        });

        // Sort the userList by STAR Points

    }

    renderUser = (user, idx) => {
        return (
            <div className={ this.state.userEmail === user["email"] ? "STARleaderboardRowEvenUSER" : idx % 2 === 0 ? "STARleaderboardRowEven" : "STARleaderboardRowOdd"   }>
                
                {/* User's name */}
                <div className="userLeaderboardName">
                    {user["first_name"]} {user["last_name"]}
                </div>

                {/* User's STAR Points */}
                <div className="userPoints">
                    {user["starpoints"]}
                </div>

            </div>
        );
    }


    render() {

        this.state.userList.sort(compareGreaterSTARPoints); // Sort users by > STAR Points

        return (
            <div className="STARleaderboard">
                <p style={{textAlign: "center"}}>
                    STAR Point Leaderboard
                </p>
                <FlatList
                    list={this.state.userList}
                    renderItem={this.renderUser}
                />
            </div>
        );
    }

    
}


const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(STARLeaderboard);


function compareGreaterSTARPoints(a, b) {
    if (a["starpoints"] > b["starpoints"] ) {
      return -1;
    }
    if (a["starpoints"] < b["starpoints"]) {
      return 1;
    }
    
    if ( a["first_name"].localeCompare(b["first_name"]) !== 1 ) {
        return -1;
    }

    // a must be equal to b
    return 0;
  }