import FlatList from 'flatlist-react';
import React, { Component } from 'react';

import { AuthUserContext, withAuthorization } from '../Session';

import { withFirebase } from '../Firebase';
import './admin.css';

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      userList: [],
      userIDList: [],
      isAdmin: false,
      firestore: this.props.firebase.getFirestore(),
      userEmail: this.props.firebase.auth.currentUser.email,
      Industry: [],
      IndustryID: [],
      user: {},
    };

  }

  componentDidMount() {
      // Used to get a list of all the users
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

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  changeAdmin = (idx, user) => {
    var that = this;  // must have this for the setState inside lamda
    this.props.firebase.getFirestore().collection("users")
      .doc(that.state.userIDList[idx])  // can have multiple .where calls
      .update({
        admin: !user["admin"]
      })
      that.setState({userList:[], userIDList:[]})
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

  HasAccess = (idx, user) => {
    var that = this;  // must have this for the setState inside lamda
    console.log(that.state.IndustryID);
    this.props.firebase.getFirestore().collection("users")
      .doc(that.state.IndustryID[0])  // can have multiple .where calls
      .update({
        has_access: !user["has_access"]
      })
      that.setState({Industry:[], IndustryID:[]})
      this.props.firebase.getFirestore().collection("users")
      .where("career", "==", "industry")
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              var userData = doc.data();
              var userID = doc.id;
              that.setState({ Industry: [...that.state.Industry, userData] });
              that.setState({ IndustryID: [...that.state.IndustryID, userID] });
          });    
      });
  }

  renderUser = (user, idx) => {
    return (
      <div class="adminUserCell">

        {/* User name */}
        <div class="adminUserName">
          { user["first_name"] } { user["last_name"] }
        </div>

        {/* Actions */}
        

          {/* Admin */}
          <button onClick={() => this.changeAdmin(idx, user)} type="button" class="adminAction">
              { user["admin"] === true ?
                  <div class="adminButton">
                    remove Admin
                  </div>
                :
                  <div class="adminButton">
                    make Admin
                  </div>
              }
          </button>
          

       

      </div>
    );
  }

  renderIndustry = (user, idx) => {
    return (
      <div>
        <div>
          { user["first_name"] } { user["last_name"] }
        </div>

                <button onClick={() => this.HasAccess(idx, user)} type="button" >
                { user["has_access"] === true ?
                    <div>
                      No Access
                    </div>
                  :
                    <div>
                      Has Access
                    </div>
                }
            </button>
            </div>
    );
  }

  render() {
    const { userList, loading, Industry, IndustryID } = this.state;

    return (
      <div>
        <h1>Admin</h1>

        {/* Ignore for now */}
        {loading && <div>Loading ...</div>}
      
        <div class="adminUsersList">
        { this.state.user["admin"] === true ?
          <FlatList
          list={userList}
          renderItem={this.renderUser}
          />
                :
                  <div>
                    <p>No Access</p>
                  </div>
          }
        </div>
        <div>
        { this.state.user["admin"] === true ?
          <p> INDUSTRY REPRESENTATIVES </p>
                :
                  <div>
                    <p>No Access</p>
                  </div>
          }
        </div>
        <div>
        { this.state.user["admin"] === true ?
          <FlatList
          list={Industry}
          renderItem={this.renderIndustry}
          />
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
