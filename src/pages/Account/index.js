import React, { Component } from 'react';
 
import Navigation from '../../components/Navigation';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';



class AccountPage extends Component {


  render() {
    return (
      <div>
        <Navigation transparentNav={false} />

        <div className="navgap">
          <AuthUserContext.Consumer>
            {authUser => (
              <div>
                <h1>Account: {authUser.email}</h1>
                <PasswordForgetForm />
                <PasswordChangeForm />
              </div>
            )}
          </AuthUserContext.Consumer>
        </div>
      </div>
    );
  }

}
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);