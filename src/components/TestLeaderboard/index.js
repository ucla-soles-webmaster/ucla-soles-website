import React, { Component } from 'react';

import FlatList from 'flatlist-react';

import { withAuthorization } from '../../pages/Session';



class TestLeaderboard extends Component {
    
    // Add constructor here when necessary
    constructor(props) {
        super(props);
        
        this.state = {
            submittersList: [],
        }

    }

    componentDidMount() {
        
        // Get all users from test submitters
        var that = this;
        this.props.firebase.getFirestore().collection("misc").doc("test_submitters").collection("test_submitters")
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // Make a pair of team name and their respective starpoints
                    that.setState({ submittersList: [...that.state.submittersList, [doc.id,doc.data()["submissions"]]] });
                    
                });    
        });

    }

    renderUser = (user, idx) => {
        return (
            <div className= {   idx % 2 === 0 ? "STARleaderboardRowEven" : "STARleaderboardRowOdd"   }>
                
                {/* Familia's name */}
                <div className="userLeaderboardName">
                    {user[0]}
                </div>

                {/* Familia`'s STAR Points */}
                <div className="userPoints">
                    {user[1]} 
                </div>

            </div>
        );
    }


    render() {

        // Sort teams by starpoints
        var teamsLocal = this.state.submittersList;
        teamsLocal.sort(compareGreaterSTARPoints)
        
        return (
            <div className="STARleaderboard">
                <p style={{textAlign: "center"}}>
                    Test Submission Leaderboard
                </p>
                <FlatList
                    list={teamsLocal}
                    renderItem={this.renderUser}
                />
            </div>
        );
    }

    
}


const condition = authUser => true;
 
export default withAuthorization(condition)(TestLeaderboard);


function compareGreaterSTARPoints(a, b) {
    if (a[1] > b[1] ) {
      return -1;
    }
    if (a[1] < b[1]) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }