import React, { Component } from 'react';
 
import Navigation from '../../components/Navigation';
import AccountNav from '../../components/AccountNav';
import Footer from '../../components/Footer';
import STARLeaderboard from '../../components/STARLeaderboard';
import PasswordChangeForm from '../PasswordChange';
import FlatList from 'flatlist-react';

import { AuthUserContext, withAuthorization } from '../Session';

import './accountStyle.css'



class AccountPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: {},
      userList: [],
      userIDList: [],
      firestore: this.props.firebase.getFirestore(),
      userEmail: this.props.firebase.auth.currentUser.email,
      mentorTeam: "",
      points: 0,
    }
  }

  componentWillMount() {
    var that = this;  // must have this for the setState inside lamda
    this.props.firebase.getFirestore().collection("users")
      .where("email", "==", this.state.userEmail)  // can have multiple .where calls
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
          that.setState({ user: doc.data() })
        });
      })

      var that = this;
      that.props.firebase.getFirestore().collection("users")
      .where("email", "==", this.state.userEmail)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
          that.setState({ user: doc.data() })
        });   
    });

      this.props.firebase.getFirestore().collection("users")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                var userData = doc.data();
                var userID = doc.id;
                that.setState({ userList: [...that.state.userList, userData] });
                that.setState({ userIDList: [...that.state.userIDList, userID] });
            });    
        });
  }

  updateTeam (name){
    if(name!= null)
      this.setState({mentorTeam: name});
  }

  changeTeam = (fName, lName, index) => {
    if(index == null)
      return;
    console.log(index);
    var document = index;
    var dbReference = this.props.firebase.getFirestore().collection('users').doc(document);
    console.log(this.state.mentorTeam);
    dbReference.update({mentorTeam: this.state.mentorTeam})

    var name = fName+ " " + lName;
    dbReference = this.props.firebase.getFirestore().collection('teams').doc(this.state.mentorTeam).collection('teamMembers').doc(name).set({});

  }

  updatePoints(points){
    if(points!= 0)
      this.state.updatePoints = points;
  }

  changePoints(index, mentorTeamName){
    var that = this;
    
      
    
      if(mentorTeamName != null){
        var dbReference = that.props.firebase.getFirestore().collection('teams').doc(mentorTeamName);
        console.log(that.state.updatePoints);
        var points = that.props.firebase.getFirestore().collection('teams').doc(mentorTeamName);
        points.get().then(function(doc){
          var currPoints = doc.data();
          var add = parseInt(currPoints["starpoints"]) + parseInt(that.state.updatePoints);
          dbReference.update({starpoints: add});
        });
        
      }
  
    
    
  }

  renderUser = (user, idx) => {
    return (
      <div class="adminUserCell">

        {/* User name */}
        <div class="adminUserName">
          { user["first_name"] } { user["last_name"] }
        </div>    

        <input type = "text" placeholder="Team Name" id="mentorTeamName" onChange={e=> this.updateTeam(e.target.value)}/>
       
        <input type ="submit" className = "btn btn-info" value = "Change Team" onClick={()=>this.changeTeam(user["first_name"], user["last_name"],this.state.userIDList[idx])}></input>
      
        <input type = "number" placeholder="Points" id="points" onChange={e=> this.updatePoints(e.target.value)}/>
        {console.log(this.state.updatePoints)}
        <input type ="submit" className = "btn btn-info" value = "Add Points" onClick={()=>this.changePoints(this.state.userIDList[idx], user["mentorTeam"])}></input>

      </div>
    );
  }

  

  render() {
    return (
      <div className="graa">
        <Navigation transparentNav={false} />
        <div className="navgapA" style={{minHeight: "100vh"}}>
          <AccountNav />

          <AuthUserContext.Consumer>
            {authUser => (
              <div>
                <h1 className="haccount">{this.state.user["first_name"]}'s Profile</h1>
              </div>
            )}
          </AuthUserContext.Consumer>

          <STARLeaderboard />

          <AuthUserContext.Consumer>
            {authUser => (
              <div>
                {/* <PasswordForgetForm /> */}
                <PasswordChangeForm />
              </div>
            )}
          </AuthUserContext.Consumer>

          <div class="adminUsersList">
            { this.state.user["admin"] === true ?
              <FlatList
              list={this.state.userList}
              renderItem={this.renderUser}
              />
                    :
                      <div>
                        <p>No Access</p>
                      </div>
              }
            </div>



        </div>
        <br/>
        <br/>
        <Footer />
      </div>
    );
  }

}
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);