import React, { Component } from 'react';

import Navigation from '../../components/Navigation';
import AccountNav from '../../components/AccountNav';
import Footer from '../../components/Footer';

import { withAuthorization } from '../Session';

import '../Account/accountStyle.css';
import './merchStyle.css';
import sun from '../../coverImages/sunblue.png';


class Merch extends Component {

    // Add constructor here when necessary

    render() {
        return (
            <div className="graa"> 
                <Navigation transparentNav={false} />
                <div className="navgapA">
                    <AccountNav />

                    <h1 className="haccount">
                        SOLES Merch Collection
                    </h1>
                    <div className="hubbox">
                        <img src={sun} id="leftsuntb" alt="Left SOLES Sun" />
                        <p className="introMerch">
                            Coming soon.
                        </p>
                        <img src={sun} id="rightsuntb" alt="Right SOLES Sun" />
                    </div>

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

export default withAuthorization(condition)(Merch);