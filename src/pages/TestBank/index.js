import React, { Component } from 'react';

import Navigation from '../../components/Navigation';
import AccountNav from '../../components/AccountNav';
import Footer from '../../components/Footer';

import { withAuthorization } from '../Session';

import '../Account/accountStyle.css';


class TestBank extends Component {

    // Add constructor here when necessary

    render() {
        return (
            <div className="graa"> 
                <Navigation transparentNav={false} />
                <div className="navgapA">
                    <AccountNav />

                    test bank

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
        )
    }

}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(TestBank);