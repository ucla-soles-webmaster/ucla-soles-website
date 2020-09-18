import FlatList from 'flatlist-react';
import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import './admin.css';

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      userList: [],
      userIDList: [],
    };

  }

  componentDidMount() {
      // Used to get a list of all the users

      var that = this;
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

  render() {
    const { userList, loading } = this.state;

    return (
      <div>
        <h1>Admin</h1>

        {/* Ignore for now */}
        {loading && <div>Loading ...</div>}
      
        <div class="adminUsersList">
          <FlatList
            list={userList}
            renderItem={this.renderUser}
          />
        </div>
      </div>
    );
  }
}


export default withFirebase(AdminPage);