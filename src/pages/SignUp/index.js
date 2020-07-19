import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
);


const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };                                                                                                                                                                                  
    }

    onSubmit = event => {
        const { username, email, passwordOne } = this.state;
        
        var firestore = this.props.firebase.getFirestore();
        var changeView = false;


        this.props.firebase.doCreateUserWithEmailAndPassword(email, passwordOne);
        // const docRef = firestore.collection("users").doc("XYEx3ATt5lXqWFAJiCuOCJvt5Rv1");
        
        firestore.collection('users').add({
            name: username,
            email: email
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            changeView = true;
            //this.props.history.push(ROUTES.HOME);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

            /*
            .then(authUser => {
                // Create a user in Firebase realtime database
                return this.props.firebase.firestore().collection("users").doc("XYEx3ATt5lXqWFAJiCuOCJvt5Rv1").set({
                    name: username


            .then(authUser => {
                this.setState({ ...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
            */
           this.props.history.push(ROUTES.HOME);
        if (changeView === true) {
            this.props.history.push(ROUTES.HOME);
        }

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit}>

                {/* Items needed for sign up */}

                <Form.Group controlId="formSignUpCareer">
                  <ButtonGroup aria-label="Career">
                    <Button name="career" value="UGRAD" variant="secondary" size="sm"  onClick={this.onChange} type="button">Undergraduate</Button>
                    <Button name="career" value="GRAD" variant="secondary" size="sm" onClick={this.onChange} type="button">Graduate</Button>
                    <Button name="career" value="ALUM" variant="secondary" size="sm" onClick={this.onChange} type="button">Alumni</Button>
                    <Button name="career" value="IND" variant="secondary" size="sm" onClick={this.onChange} type="button">Industry</Button>
                  </ButtonGroup>
                </Form.Group>

                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
                <br/>
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <br/>
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <br/>
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <br/>


        <button disabled={isInvalid} type="submit">
            Sign Up
        </button>
 
        {error && <p>{error.message}</p>}
            </form>
        )
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
)

const SignUpForm = compose(
    withRouter,
    withFirebase,
  )(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };