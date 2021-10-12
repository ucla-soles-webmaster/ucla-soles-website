import React, { Component } from 'react';

import FlatList from 'flatlist-react';

import { withAuthorization } from '../../pages/Session';

import './leaderboardStyle.css';


class STARLeaderboard extends Component {
    
    // Add constructor here when necessary
    constructor(props) {
        super(props);
        
        this.state = {
            teamsList: [],
            userEmail: this.props.firebase.auth.currentUser.email,
        }

    }

    componentDidMount() {
        
        // Get all users from a user collection
        var that = this;
        this.props.firebase.getFirestore().collection("teams")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // Make a pair of team name and their respective starpoints
                that.setState({ teamsList: [...that.state.teamsList, [doc.id,doc.data()["starpoints"]]] });
                
            });    
        });

    }

    renderUser = (team, idx) => {
        return (
            <div className= {   idx % 2 === 0 ? "STARleaderboardRowEven" : "STARleaderboardRowOdd"   }>
                
                {/* Familia's name */}
                <div className="userLeaderboardName">
                    {team[0]}
                </div>

                {/* Familia`'s STAR Points */}
                <div className="userPoints">
                    {team[1]} points
                </div>

            </div>
        );
    }


    render() {

        // Sort teams by starpoints
        var teamsLocal = this.state.teamsList;
        teamsLocal.sort(compareGreaterSTARPoints)
        
        return (
            <div className="STARleaderboard">
                <p style={{textAlign: "center"}}>
                    MentorSHPE ChampionSHPE Leaderboard
                </p>
                <FlatList
                    list={teamsLocal}
                    renderItem={this.renderUser}
                />
            </div>
        );
    }

    
}


const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(STARLeaderboard);


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