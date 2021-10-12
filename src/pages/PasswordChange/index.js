import React, { Component } from 'react';
 
import { withFirebase } from '../Firebase';

import './passwordChange.css';
 
const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};
 
class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { passwordOne } = this.state;
 
    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const { passwordOne, passwordTwo, error } = this.state;
 
    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';
 
    return (
      <fieldset className="FormGroupPC">
        <form onSubmit={this.onSubmit}>
          <div className="FormRowPC">
            <input
              name="passwordOne"
              value={passwordOne}
              className="FormRowInput"
              onChange={this.onChange}
              type="password"
              placeholder="New Password"
            />
          </div>
          <div className="FormRowPC">
            <input
              name="passwordTwo"
              value={passwordTwo}
              className="FormRowInput"
              onChange={this.onChange}
              type="password"
              placeholder="Confirm New Password"
            />
          </div>
            <button disabled={isInvalid} type="submit" className="buttonRESET">
              Reset Password
            </button>
          {error && <p>{error.message}</p>}
        </form>
      </fieldset>
    );
  }
}
 
export default withFirebase(PasswordChangeForm);