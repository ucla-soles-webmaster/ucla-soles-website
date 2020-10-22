
import FlatList from 'flatlist-react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'

import { withAuthorization } from '../Session';

import './admin.css';

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      userList: [],
      userIDList: [],
      mentorshipUserList: [],
      isAdmin: false,
      firestore: this.props.firebase.getFirestore(),
      userEmail: this.props.firebase.auth.currentUser.email,
      Industry: [],
      IndustryID: [],
      user: {},
      gold: '',
      silver: '',
      bronze: '',
      new_code_gold:'',
      new_code_silver:'',
      new_code_bronze:'',
      testsToCheck: []
    };

  }

  componentDidMount() {

      this.setState({ userList: []});
      this.setState({ mentorshipUserList: []});
      this.setState({ Industry: []});
      this.setState({ IndustryID: []});
      this.setState({ testsToCheck:[]})
      
      window.scrollTo(0, 0)
      

      // Used to get a list of all the users
      var that = this;
      that.props.firebase.getFirestore().collection("users")
      .where("email", "==", this.state.userEmail)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          that.setState({ user: doc.data() })
        });   
      });

      // Tests to check in / award star points

      that.props.firebase.getFirestore().collection("testsToCheck")
      .where("checked", "==", false)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          var test_name = doc.id;
          var test_meta_data = doc.data()
          that.setState({ testsToCheck: [...that.state.testsToCheck, [test_meta_data, test_name] ] })
        });   
      });

    //Industry Stuff ///////////////
    that.props.firebase.getFirestore().collection("users")
    .where("career", "==", "industry")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        var userData = doc.data();
        var userID = doc.id;
        that.setState({ Industry: [...that.state.Industry, userData] });
        that.setState({ IndustryID: [...that.state.IndustryID, userID] });
      });
    });

    // Industry Codes
    that.props.firebase.getFirestore().collection("misc").doc("company_code")
      .get()
      .then(function(doc) {
        if (doc.exists) {
          var codes = doc.data();
          that.setState({ gold: codes['gold_code'] })
          that.setState({ silver: codes['silver_code'] })
          that.setState({ bronze: codes['bronze_code'] })
        } else {
            // doc.data() will be undefined in this case
            console.log("Can't get company codes!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });


    // User Lists stuff
      this.props.firebase.getFirestore().collection("users")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                var userData = doc.data();
                var userID = doc.id;
                that.setState({ userList: [...that.state.userList, [userData, userID] ] });
            });    
        });

    // MentorSHPE
        this.props.firebase.getFirestore().collection("users")
        .where("join_mentorship", "==", true)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                var userData = doc.data();
                var userID = doc.id;
                that.setState({ mentorshipUserList: [...that.state.mentorshipUserList, [userData, userID]  ] });
            });    
        });

        console.log(this.state.userList)
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  changeAdmin = (user) => {
    this.props.firebase.getFirestore().collection("users")
      .doc(user[1])  // can have multiple .where calls
      .update({
        admin: !user[0]["admin"]
      })

    this.componentDidMount()
  }

  

/*
  ****
    Page Access Restriction
  ****
*/
  HasAccess = (idx, user) => {
    var that = this;  // must have this for the setState inside lamda
    console.log(that.state.IndustryID);
    this.props.firebase.getFirestore().collection("users")
      .doc(that.state.IndustryID[0])  // can have multiple .where calls
      .update({
        has_access: !user["has_access"]
      })
      this.componentDidMount()
  }

  submitTest = (idx, user) => {
    var that = this;  // must have this for the setState inside lamda


    // Give starpoints to mentorship team
    if(user[0]["has_familia"] === true && user[0]["familia"] !== undefined) {
      var mentorTeamName = user[0]["familia"]
      var dbReference = that.props.firebase.getFirestore().collection('teams').doc(mentorTeamName);
          console.log(that.state.updatePoints);
          var points = that.props.firebase.getFirestore().collection('teams').doc(mentorTeamName);
          points.get().then(function(doc){
            var currPoints = doc.data();
            var add = parseInt(currPoints["starpoints"]) + parseInt('7');
            dbReference.update({starpoints: add});
            alert('Successfully added ' + parseInt('7') + ' points to ' + mentorTeamName +  '!')
          });
    }

    this.props.firebase.getFirestore().collection("testsToCheck")
      .doc(user[1])  // can have multiple .where calls
      .update({
        checked: !user[0]["checked"]
      })
      this.componentDidMount()

    
  }



/*
  ****
    Rendering Users for FlatLists
  ****
*/

  renderUser = (user, idx) => {

    var adminString = '';
    user[0]["admin"] === true ? adminString = 'Is Admin' : adminString = 'not Admin';

    return (
      <div class="adminUserCell">

        {/* User name */}
        <div class="adminUserName">
          { user[0]["first_name"] } { user[0]["last_name"] }
        </div>

        {/* Actions */}
        <div class={adminString === 'Is Admin' ? "adminActionsADMIN" : "adminActions"}>

          {/* Admin */}
          {adminString} &nbsp;
          <button onClick={() => this.changeAdmin(user)} type="button" >
                Change
          </button>
        
        </div>
      </div>
    );
  }


  renderIndustry = (user, idx) => {

    var access = user["has_access"] === true ? 'Yes' : 'No'
    console.log(user["has_access"])
    
    return (
      <div class="adminUserCell">

        {/* User name */}
        <div class="adminUserName">
          { user["first_name"] } { user["last_name"] }
        </div>    

        Sponsor Level:&nbsp;<b>{user["sponsor_level"]}</b> &nbsp;
        <button onClick={() => this.HasAccess(idx, user)} type="button" >Has Access: {access} - CLICK TO CHANGE</button>

        &nbsp;&nbsp;&nbsp;Company:&nbsp;<b>{user["employer"]}</b>
        
      </div>

    );
  }


  renderMentorUser = (user, idx) => {
    var familia = user[0]["mentorTeam"] === '' ? 'ASSIGN' : user[0]["mentorTeam"];
    var role = user[0]['mentee'] === true ? 'mentee' : 'mentor';

    return (
      <div class="adminUserCell">

        {/* User name */}
        <div class="adminUserName">
          { user[0]["first_name"] } { user[0]["last_name"] }
        </div>    

        Famila:&nbsp;<b>{familia}</b> &nbsp;

        <input type = "number" placeholder="add points" id="points" onChange={e=> this.updatePoints(e.target.value)}/>
        <input disabled={familia==='ASSIGN'}type ="submit" className = "btn btn-info" value = "Add Points" onClick={()=>this.changePoints(user[1], user[0]["mentorTeam"])}></input>

        <input type = "text" placeholder="change team" id="mentorTeamName" onChange={e=> this.updateTeam(e.target.value)}/>
        <input type ="submit" className = "btn btn-info" value = "Change Team" onClick={()=>this.changeTeam(user[0]["first_name"], user[0]["last_name"],user[1])}></input>
        
        <b style={role === 'mentor'? {color: 'green'} : {color: 'black'}}>&nbsp;{role}</b>
        
        &nbsp;&nbsp;{user[0]["major"]}

      </div>
    );
    }

    renderCheckInTests = (test, idx) => {

      var cen_work = test[0]['censor_WORK'] === true ? 'Yes' : 'No';
      var cen_name = test[0]['censor_NAME'] === true ? 'Yes' : 'No';

      return (
        <div class="adminUserCell">
          {/* TestName */}
          <div class="adminUserName">
            { test[1] }
          </div>  

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          By: {test[0]['submitter']} &nbsp;
          Censor Name: <b>{cen_name}</b> &nbsp;
          Censor Work: <b>{cen_work}</b> &nbsp;

          <button onClick={() => this.submitTest(idx, test)} type="button" >VERIFY</button>

        </div>
      )

    }

/*
  ****
    Change industry codes
  ****
*/

    changeCodeGold(new_code) {
      this.props.firebase.getFirestore().collection("misc")
      .doc('company_code')  // can have multiple .where calls
      .update({
        gold_code: new_code
      })
      this.componentDidMount()
    }
    changeCodeSilver(new_code) {
      this.props.firebase.getFirestore().collection("misc")
      .doc('company_code')  // can have multiple .where calls
      .update({
        silver_code: new_code
      })
      this.componentDidMount()
    }
    changeCodeBronze(new_code) {
      this.props.firebase.getFirestore().collection("misc")
      .doc('company_code')  // can have multiple .where calls
      .update({
        bronze_code: new_code
      })
      this.componentDidMount()
    }




/*
  ****
    MentorSHPE functions
  ****
*/

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
      this.componentDidMount()
    }

    updatePoints(points){
      if(points!== 0)
        this.setState({updatePoints: points})
    }
  
    changePoints(index, mentorTeamName){
      var that = this;
      
        if(mentorTeamName !== null){
          var dbReference = that.props.firebase.getFirestore().collection('teams').doc(mentorTeamName);
          console.log(that.state.updatePoints);
          var points = that.props.firebase.getFirestore().collection('teams').doc(mentorTeamName);
          points.get().then(function(doc){
            var currPoints = doc.data();
            var add = parseInt(currPoints["starpoints"]) + parseInt(that.state.updatePoints);
            dbReference.update({starpoints: add});
            alert('Successfully added ' + parseInt(that.state.updatePoints) + ' points to ' + mentorTeamName +  '!')
          });
          
        }
    }

/*
    RENDERING
*/

  render() {
    const { userList, loading, Industry } = this.state;
    this.state.userList.sort(sortNames);
    this.state.mentorshipUserList.sort(sortNamesMentorSHPE)

    return (
      <div>
        <h1>Admin</h1>

        {/* Ignore for now */}
        {loading && <div>Loading ...</div>}
        <Link to={ROUTES.ACCOUNT}>
            back to Account page
        </Link>
      
        <div class="adminUsersList">
          
        { this.state.user["admin"] === true 
          ?
            <div>
              <p>
                Functionality will be added on a continous basis. Contact Mat Ruiz (949)547-0987
                for immediate support or issues.
                <br/><br/>
                This page is only viewable to admins (EBoard and Web Team).
              </p>
              <br/>

          <h1>MentorSHPE (add points here)</h1>
              <p>
                These are only users enrolled with MentorSHPE for 2020-2021. Sorted by familia name.
              </p>
              <FlatList
                list={this.state.mentorshipUserList}
                renderItem={this.renderMentorUser}
              />
              <br/>

          <h1>All Users</h1>
              <p>
                Alphabetically sorted.
              </p>
              <FlatList
                list={userList}
                renderItem={this.renderUser}
              />
              <br/>

          <h1>Industry Reps</h1>
              <p>
                All industry reps that have made an account in the past{'->'}current.
              </p>
              <FlatList
                list={Industry}
                renderItem={this.renderIndustry}
              /> 
              {/*Company codes*/}
              <h3>Company Sign Up Codes</h3>
                Gold Code: &nbsp;<b>{this.state.gold}</b>&nbsp;&nbsp;
                <input type = "text" placeholder="new gold code" id="mentorTeamName" onChange={ e=> this.setState({new_code_gold: e.target.value}) }/>
                <input type ="submit" className = "btn btn-info" value = "CHANGE" onClick={()=>this.changeCodeGold(this.state.new_code_gold)}></input>
                <br/>

                Silver Code:     <b>{this.state.silver}</b>&nbsp;&nbsp;
                <input type = "text" placeholder="new silver code" id="mentorTeamName" onChange={ e=> this.setState({new_code_silver: e.target.value}) }/>
                <input type ="submit" className = "btn btn-info" value = "CHANGE" onClick={()=>this.changeCodeSilver(this.state.new_code_silver)}></input>
                <br/>

                Bronze Code:     <b>{this.state.bronze}</b>&nbsp;&nbsp;
                <input type = "text" placeholder="new bronze code" id="mentorTeamName" onChange={ e=> this.setState({new_code_bronze: e.target.value}) }/>
                <input type ="submit" className = "btn btn-info" value = "CHANGE" onClick={()=>this.changeCodeBronze(this.state.new_code_bronze)}></input>
              <br/>
              <br/>
              <br/>

              <h1>Tests to check in</h1>
                <FlatList
                  list={this.state.testsToCheck}
                  renderItem={this.renderCheckInTests}
                /> 
              <br/>
              <br/>
              <br/>

              <h1>Functionality to come</h1>
                <ul>
                  <li>
                    Option to create mentorship familia from here
                  </li>
                  <li>
                    View a list of members from each mentorship familia
                  </li>
                </ul>
            
              <br/>
              <br/>

            </div> 
          :
            <div>
              <p>No Access</p>
            </div>
          }
        </div>
      </div>
    );
  }
}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AdminPage);

function sortNames(a, b) {
  if (a[0]["first_name"] === undefined) { return }
  if (a[0]["first_name"].localeCompare(b[0]["first_name"]) === -1) {
    return -1;
  }
  if (a[0]["first_name"].localeCompare(b[0]["first_name"]) === 1) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

function sortNamesMentorSHPE(a, b) {
  if (a[0]["mentorTeam"] === undefined) { return }
  if (a[0]["mentorTeam"].localeCompare(b[0]["mentorTeam"]) === -1) {
    return -1;
  }
  if (a[0]["mentorTeam"].localeCompare(b[0]["mentorTeam"]) === 1) {
    return 1;
  }
  // a must be equal to b
  return 0;
}