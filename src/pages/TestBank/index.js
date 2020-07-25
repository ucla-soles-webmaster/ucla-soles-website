import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../components/Navigation';
import AccountNav from '../../components/AccountNav';
import Footer from '../../components/Footer';

import { withAuthorization } from '../Session';
import * as ROUTES from '../../constants/routes'

import sun from '../../coverImages/sunblue.png';
import bank from '../../coverImages/bank.svg';
import view from '../../coverImages/view.svg';
import upload from '../../coverImages/upload.svg';

import '../Account/accountStyle.css';
import './hubStyle.css';


class TestBank extends Component {

    // Add constructor here when necessary
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
                <div className="navgapA">
                    <AccountNav />

                    <h1 className="haccount">
                        Test Bank Hub
                    </h1>

                    { this.state.user["career"] === "student"
                        ?   <div>

                                <div className="hubbox">
                                    <img src={sun} id="leftsuntb" alt="Left SOLES Sun" />
                                    <p className="hubintro">
                                        The SOLES Test Bank is home to a vast amount of past tests and study materials
                                        from some of UCLA's toughest engineering and science courses. We try to keep the 
                                        Test Bank as fresh and expansive as possbile, so our policy is as follows:
                                        <ul className="ulTB" >
                                            <li className="liTB" >
                                                You are given 1 free Test View Pass upon Sign Up
                                            </li>
                                            <li className="liTB" >
                                                1 test submission yields 1 Test View Pass
                                            </li>
                                            <li className="liTB" >
                                                Test submissions will be verified for authenticity prior 
                                                to you receiving Test View Passes
                                            </li>
                                            <li className="liTB" >
                                                Distribution of tests from the Test Bank is not allowed
                                            </li>
                                            <li className="liTB" >
                                                See the Submit a Test page for more info on test submissions
                                            </li>
                                        </ul>
                                    </p>
                                    <img src={sun} id="rightsuntb" alt="Right SOLES Sun" />
                                </div>

                                <div className="bankHUBsvgdiv">
                                    <hr/>
                                    <img src={bank} className="bankHUBsvg" alt="Bank" />
                                    <hr/>
                                </div>

                                <div className="choiceHUBsvgdiv">
                                    <Link className="itemHUB" to={ROUTES.TESTBANK_VIEW}>
                                        <img src={view} className="itemHUBsvg" alt="Left SOLES Sun" />
                                        <br/>
                                        View a Test
                                    </Link>
                                    <Link className="itemHUB" to={ROUTES.TESTBANK_SUBMIT}>
                                        <img src={upload} className="itemHUBsvg" alt="Left SOLES Sun" />
                                        <br/>
                                        Submit a Test
                                    </Link>
                                </div>

                            </div>
                        
                        :   <div>
                                <div className="hubbox">
                                    <img src={sun} id="leftsuntb" alt="Right SOLES Sun" />
                                    <p className="hubintro">
                                        The SOLES Test Bank is only authorized for student use.
                                    </p>
                                    <img src={sun} id="rightsuntb" alt="Left SOLES Sun" />
                                </div>
                            </div>
                    }

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </div>
                <Footer />
            </div>
        )
    }

}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(TestBank);