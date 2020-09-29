import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import firebase from '../Firebase'

import Navigation from '../../components/Navigation';
import StaticCoverPhoto from '../../components/StaticCoverPhoto';
import Footer from '../../components/Footer';
import * as ROUTES from '../../constants/routes'
import Andy from '../../boardImages/president.jpg'
import AndySig from '../../boardImages/signature.png'
//import ucla from './ucla.jpg'

import './landingStyle.css'
import coverPhoto from '../../coverImages/landingImageMain.jpg';
import rightsun from '../../coverImages/rightsun.png'
import leftsun from '../../coverImages/leftsun.png';

class Landing extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

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
                                and is a student chapter of SHPE. We center around empowering Latinx students 
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
                    
                    {/* Message from our president message */}
                    <div id="MessageFromPresident" style={{marginLeft:'6.5%', marginRight:'6.5%'}}>

                        {/* Picture */}
                        <div className="presidentPhoto">
                            <img 
                                src= {Andy} 
                                alt="Andy Muraltalla" 
                                style={{width:'100%', height:'100%'}}
                            ></img>
                        </div>

                        {/* Message */}
                        <div className="presidentMessage">
                            <div style={{fontSize:'2vw', fontFamily:'Poppins', color:'gray', marginBottom:'0.4vw'}}>
                                A MESSAGE FROM OUR PRESIDENT<br/>
                            </div>
                        
                            <div style={{fontSize: '0.9vw', fontFamily: 'Poppins', lineHeight:'1.4vw', color: '#001d3a'}}>
                                Allow me to begin by welcoming you to our SOLES Familia.
                                <div style={{marginBottom: '0.6vw', display: 'block'}} />
                                SOLES|SHPE at UCLA prides itself in being an organization that seeks to elevate its members to
                                excel in all aspects of their lives. We celebrate the unique qualities and experiences Latinx
                                individuals contribute in engineering, empowering our members to have confidence in their
                                abilities, regardless of individual circumstances. As you explore this site, you will find proof of
                                our mission’s realization. Through extensive community outreach initiatives, interdisciplinary
                                academic resources, and wide-spread industry partnerships, SOLES cultivates a sense of self-
                                efficacy that greatly uplifts our Latinx undergraduate members at UCLA and the greater Los
                                Angeles community.
                                <div style={{marginBottom: '0.6vw', display: 'block'}} />
                                My vision is one in which SOLES
                                makes a lasting impact on its members, one in which they still remember 50 years down the line
                                and think “Yeah, SOLES was really something beautiful”. I seek to encourage inclusivity in the
                                workplace. I aim to advocate for intellectual diversity in the classroom. I plan to make SOLES a
                                family away from home, and I intend on being the President that is remembered for their
                                unwavering conviction.
                                <div style={{marginBottom: '0.6vw', display: 'block'}} />
                                Best wishes from my family to yours. Stay safe, happy, and healthy.
                                <div style={{marginBottom: '0.9vw', display: 'block'}} />
                                <div style={{fontSize: '1.1vw', fontFamily: 'Poppins', lineHeight:'1.5vw', color: 'gray', marginBottom: '0.3vw'}}>
                                    Andy Muratalla
                                </div>
                                <img 
                                    src= {AndySig} 
                                    alt="President Signature" 
                                    style={{width:'6vw'}}
                                ></img>
                            </div>
                        </div>

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