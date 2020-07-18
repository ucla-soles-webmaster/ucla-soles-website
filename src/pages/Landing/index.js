import React, { Component } from 'react';
//import firebase from '../Firebase'

import Navigation from '../../components/Navigation';
import StaticCoverPhoto from '../../components/StaticCoverPhoto';
//import ucla from './ucla.jpg'
import './landingStyle.css'
import coverPhoto from '../../coverImages/landingImageMain.jpg';


class Landing extends Component {

    render() {
        return (
            <div>


                {/* Actual Landing Page */}
                <div id="landingactual">
                    <Navigation transparentNav={true} />
                    <StaticCoverPhoto imageSource={coverPhoto}></StaticCoverPhoto>

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
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>

                {/* Start up animation */}
                <div id="startupdiv" >
                    
                </div>
            </div>
        );
    }
}

export default Landing;