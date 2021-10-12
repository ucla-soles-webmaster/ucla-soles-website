import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import firebase from '../Firebase'

import Navigation from '../../components/Navigation';
import StaticCoverPhoto from '../../components/StaticCoverPhoto';
import Footer from '../../components/Footer';
import * as ROUTES from '../../constants/routes'
import Andy from '../../boardImages/kelly_prez.jpeg'
import AndySig from '../../boardImages/sig_kelly.png'
//import ucla from './ucla.jpg'

import './landingStyle.css'
import coverPhoto from '../../coverImages/royce.jpeg';
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
                            
                                The Society of Latinx Engineers and Scientists at UCLA (SOLES) is a student 
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
                            <div style={{fontSize:'1.8em', fontFamily:'Poppins', color:'gray', marginBottom:'0.5em'}}>
                                A MESSAGE FROM OUR PRESIDENT<br/>
                            </div>
                        
                            <div style={{fontSize: '0.8em', fontFamily: 'Poppins', lineHeight:'1.4em', color: '#001d3a'}}>
                                Saludos a todos, and welcome to our SOLES Familia. 
                                <div style={{marginBottom: '0.6em', display: 'block'}} />
                                SOLES|SHPE at UCLA prides itself in being an organization that seeks to elevate its members to excel in all aspects of their lives. 
                                We celebrate the unique qualities and experiences Latinx individuals contribute in engineering, empowering our members to have confidence 
                                in their abilities, regardless of individual circumstances. We hold four chapter pillars of academic development, professional development, 
                                community outreach, and recruitment/retention, which we align with our goals and mission in all of our endeavors.  Please use this site as a
                                resource to explore how we reach our goals and how our members benefit from our interdisciplinary academic resources, community building events,
                                community outreach initiatives, and wide-spread industry partnerships! With these tools and the connections they bring, we hope to pave the way for 
                                a future in which all Latinx/Hispanic students are empowered, both at UCLA and in the greater Los Angeles community, to pursue a STEM degree and 
                                achieve high standards.
                                <div style={{marginBottom: '0.6em', display: 'block'}} />
                                Returning to an in person world after these difficult times, SOLES’s main goal is to rekindle the sense of Familia throughout our membership, 
                                providing them with all the support and resources we can possibly give. My hard working board and I, all see the potential for SOLES to grow 
                                with new ideas and opportunities. SOLES has been my home away from home, where I have been able to explore more of my own potential and passions, 
                                inspire myself to prosper as a Latina in STEM, and lean on those who understand me. I wish to provide this feeling and more, to each individual, 
                                so they may one day look back and appreciate what SOLES meant for them. Diversity and Inclusion are values I have held since I was a little girl. 
                                I believe everyone should have the opportunity to explore their interests and grow as an individual no matter their backgrounds. I plan to be the 
                                President who firmly stands for SOLES and all of its members, meanwhile also providing all the love and support she can give for her growing family. 
                                <div style={{marginBottom: '0.6em', display: 'block'}} />
                                With great excitement for the future, y mucho amor,
                                <div style={{marginBottom: '0.9em', display: 'block'}} />
                                <div style={{fontSize: '1.2em', fontFamily: 'Poppins', lineHeight:'1.5em', color: 'gray', marginBottom: '0.3em'}}>
                                    Kelly Espino
                                </div>
                                <img 
                                    src= {AndySig} 
                                    alt="President Signature" 
                                    style={{width:'6em'}}
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