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

  changeAdmin = () => {
    var that = this;
    console.log('yer')
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
          <button onClick={this.changeAdmin()} type="button" class="adminAction">
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