import React, { Component } from 'react';
 
import Navigation from '../../components/Navigation';
import AccountNav from '../../components/AccountNav';
import Footer from '../../components/Footer';
import STARLeaderboard from '../../components/STARLeaderboard';
import PasswordChangeForm from '../PasswordChange';

import { AuthUserContext, withAuthorization } from '../Session';

import './accountStyle.css'


class AccountPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: {},
      firestore: this.props.firebase.getFirestore(),
      userEmail: this.props.firebase.auth.currentUser.email,
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