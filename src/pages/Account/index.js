///////////////////////////////////////////////////////////////
/* Component / ReactJS Library Imports */

import React, { Component } from 'react';
import Navigation from '../../components/Navigation';
import AccountNav from '../../components/AccountNav';
import Footer from '../../components/Footer';
import PasswordChangeForm from '../PasswordChange';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import { AuthUserContext, withAuthorization } from '../Session';



///////////////////////////////////////////////////////////////
/* CSS Imports */

import './Account.css'




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

    window.scrollTo(0, 0)
    
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
              var userData = doc.data();
              var userID = doc.id;
              that.setState({ userList: [...that.state.userList, userData] });
              that.setState({ userIDList: [...that.state.userIDList, userID] });
          });    
      });
  }


  updateTeam (name){
    if(name !== null)
      this.setState({mentorTeam: name});
  }


  changeTeam = (fName, lName, index) => {
    if(index === null)
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
    if (points!== 0)
    this.setState({updatePoints: points});
  }


  changePoints(index, mentorTeamName){
    var that = this;
  
    if (mentorTeamName != null) {
      var dbReference = that.props.firebase.getFirestore().collection('teams').doc(mentorTeamName);
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
      <div className="graa" style={{fontFamily:'Poppins'}}>
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

          {/*Link to admin dashboard */}
          { this.state.user["admin"] === true
              ?
                <Link to={ROUTES.ADMIN} style={{textDecoration: 'none'}}>
                  <div className="adminPageLink">
                    ADMIN PAGE
                  </div>
                </Link>
              :
                <div/>
          }

          {/*
            User Specific Functionality (based on career level)
          */}
          { this.state.user["career"] === 'student'
              ?
                <div>

                  {/*                
                  {// MentorSHPE leaderboard }
                  <STARLeaderboard />
                  <br/>
                  {// MentorSHPE points breakdown }
                  <p style={{fontSize: '2vw', color: 'gray', marginTop:'2%', marginBottom:'-3%', fontWeight:'300', textAlign:'center'}}>
                      MENTORSHPE POINTS BREAKDOWN
                  </p>
                  <ul className="ulTB" style={{width:'30%',marginLeft:'30%',marginRight:'30%'}}>
                      <li className="liTB" >
                          <b>{">"}20 points</b> - Winning a MentorSHPE comp-social event, more details
                          at the next social.
                      </li>
                      <li className="liTB" >
                          <b>20 points</b> - Volunteering at a SOLES event (Outreach, etc.)
                      </li>
                      <li className="liTB" >
                          <b>10 points</b> - Going to a SOLES GM, committee meeting,
                          or technical project meeting.
                      </li>
                      <li className="liTB" >
                          <b>7 points</b> - Submitting a test to the Test Bank
                      </li>
                  </ul>
                  */}
                </div>
              :
                // Industry
                this.state.user["career"] === 'industry'
                  ?
                    // Industry members with access (hasn't been revoked)
                    this.state.user["has_access"] === true 
                      ?
                        // Industry (GOLD/SILVER) for resumes
                        ( this.state.user["sponsor_level"] === 'gold' || this.state.user["sponsor_level"] === 'silver')
                          ?
                            // Resume Drive
                            <div style={{marginRight:'10%', marginLeft:'10%', textAlign: 'center'}}>
                              <br/>
                              <p style={{fontSize: '2.3vw', color: 'gray', marginTop: '-2.2%', marginBottom: '1%', fontWeight:'300'}}>
                                Student Resume Drive
                              </p>
                              Our resume drive is an up-to-date ZIP file of all SOLES members who decided to submit their resumes.
                              The SOLES Web Dev team is currently working on making the resume drive better organized for your benefit.
                              <br/>
                              Download <a href="https://firebasestorage.googleapis.com/v0/b/soles-website-dev.appspot.com/o/resumes%2Fresume_drive_zip%2FSOLES_Resume_Book_2020.zip?alt=media&token=0223b071-b533-4695-8b41-9a80734ffebb">here.</a>
                            </div>
                          :
                            // BRONZE sponsors
                            <div style={{marginRight:'10%', marginLeft:'10%', textAlign: 'center', fontStyle: 'italic'}}>
                              We apologize, there is no account functionality avaliable for Bronze sponsors at this time.
                            </div>
                      :
                        <div>
                          Your access for the year has revoked. Please sponsor SOLES again this year to gain access.
                        </div>
                // Alumni (no account stuff yet)
                    :
                      <div>
                         
                      </div>
                    
          }
          <br/>
          <AuthUserContext.Consumer>
            {authUser => (
              <div>
                {/* <PasswordForgetForm /> */}
                <PasswordChangeForm />
              </div>
            )}
          </AuthUserContext.Consumer>



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

