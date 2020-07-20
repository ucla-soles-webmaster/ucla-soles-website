import React, { Component } from 'react';
 
import Navigation from '../../components/Navigation';
import AccountNav from '../../components/AccountNav';
import Footer from '../../components/Footer';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

import { AuthUserContext, withAuthorization } from '../Session';

import './accountStyle.css'


class AccountPage extends Component {


  render() {
    return (
      <div className="graa">
        <Navigation transparentNav={false} />
        <div className="navgapA">
          <AccountNav />

          <AuthUserContext.Consumer>
            {authUser => (
              <div>
                <h1 className="haccount">Mat's Profile</h1>
              </div>
            )}
          </AuthUserContext.Consumer>



          <AuthUserContext.Consumer>
            {authUser => (
              <div>
                <PasswordForgetForm />
                <PasswordChangeForm />
              </div>
            )}
          </AuthUserContext.Consumer>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

        </div>
        <Footer />
      </div>
    );
  }

}
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);