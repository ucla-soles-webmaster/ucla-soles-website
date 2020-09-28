import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import firebase from '../Firebase'

import Navigation from '../../components/Navigation';
import StaticCoverPhoto from '../../components/StaticCoverPhoto';
import Footer from '../../components/Footer';
import * as ROUTES from '../../constants/routes'
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
                    <div className="introbox" style={{textAlign: 'center'}}>
                        <p className="initIntro" style={{textAlign: 'center', marginRight: '18.5%', marginLeft: '18.5%', fontSize:'1.1vw',fontWeight:'10'}}>
                            
                            <p style={{fontSize: '2.3vw', color: 'gray', marginTop: '-2.2%', marginBottom: '1%', fontWeight:'300'}}>
                                Who We Are
                            </p>
                            
                                The Society of Latino Engineers and Scientists at UCLA (SOLES) is a student 
                                organization in the Henry Samueli School of Engineering and Applied Science,
                                and is a student chapter of SHPE. We center around empowering Latinos 
                                in engineering and science both at the UCLA and at nearby K-12 schools. Learn more <Link to={ROUTES.ABOUT}>here.</Link>
                            
                        </p>
                        <img id="rightsunLanding" src={rightsun} alt="Right SOLES Sun" />
                        <img id="leftsunLanding" src={leftsun} alt="Left SOLES Sun" />
                    </div>
                    <hr className="introBar" /> 

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    fdfasdf
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