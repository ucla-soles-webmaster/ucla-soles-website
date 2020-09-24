import React, { Component } from 'react';
//import firebase from '../Firebase'

import Navigation from '../../components/Navigation';
import StaticCoverPhoto from '../../components/StaticCoverPhoto';
import Footer from '../../components/Footer';
//import ucla from './ucla.jpg'

import './landingStyle.css'
import coverPhoto from '../../coverImages/landingImageMain.jpg';
import rightsun from '../../coverImages/rightsun.png'
import leftsun from '../../coverImages/leftsun.png';

class Landing extends Component {

    render() {
        return (
            <div>


                {/* Actual Landing Page */}
                <div id="landingactual">
                    <Navigation transparentNav={true} />
                    <StaticCoverPhoto imageSource={coverPhoto}></StaticCoverPhoto>

                    <br/>
                    <hr className="introBar" /> 
                    <div className="introbox">
                        <p className="initIntro">
                            Our initiatives combine to form the heart of SOLES.Our initiatives combine to form the heart of SOLES.
                            Our initiatives combine to form the heart of SOLES.Our initiatives combine to form the heart of SOLES.
                            Our initiatives combine to form the heart of SOLES.Our initiatives combine to form the heart of SOLES.
                            Our initiatives combine to form the heart of SOLES.Our initiatives combine to form the heart of SOLES.
                            Our initiatives combine to form the heart of SOLES.
                        </p>
                        <img id="rightsun" src={rightsun} alt="Right SOLES Sun" />
                        <img id="leftsun" src={leftsun} alt="Left SOLES Sun" />
                    </div>
                    <hr className="introBar" /> 

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
                <Footer/>
            </div>
        );
    }
}

export default Landing;