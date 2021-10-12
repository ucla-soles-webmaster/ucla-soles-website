import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
 
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import './signInStyle.css'


// Actual Page. Contains SignIn Component
const SignInPage = () => (
  <div className="graa">
    <Navigation transparentNav={false} />

    {/* Do development all within this div */}
    <div className="navgap" style={{minHeight: "100vh"}}>
      <h1 className="hsignin">Sign In</h1>
      <SignInForm />
      <div className="signinlinks">
        <SignUpLink />
        <PasswordForgetLink />
      </div>
    </div>  
    <Footer />
  </div>
);
 
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

// SignIn Component
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      email: '',
      password: '',
      error: null,
    };
    
  }
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }
 
  onSubmit = event => {
    const { email, password } = this.state;
 
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.ACCOUNT);
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
    const { email, password, error } = this.state;
 
    const isInvalid = password === '' || email === '';
 
    return (
      <fieldset className="FormGroupPC">
        <form onSubmit={this.onSubmit}>
          <div className="FormRowPC">
            <input
              name="email"
              value={email}
              className="FormRowInput"
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="FormRowPC">
            <input
              name="password"
              value={password}
              className="FormRowInput"
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
          </div>
          <button disabled={isInvalid} type="submit" className="buttonRESET">
            Sign In
          </button>
          {error && <p className="disclaimer2" style={{textAlign: 'center', margin: '0', padding: '0', paddingTop: '10px', paddingBottom: '10px'}}>{error.message}</p>}
        </form>
      </fieldset>
    );
  }
}
 
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
 
export default SignInPage;
 
export { SignInForm };