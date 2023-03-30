///////////////////////////////////////////////////////////////
/* Component / ReactJS Library Imports */

import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import StaticCoverPhoto from '../../components/StaticCoverPhoto';
import Footer from '../../components/Footer';
import Calendar from '../../components/Calendar';



///////////////////////////////////////////////////////////////
/* CSS Imports */

import 'react-vertical-timeline-component/style.min.css';
import './landingStyle.css'



///////////////////////////////////////////////////////////////
/* Accent Photo Imports */

import presidentPhoto from '../../Photos/EBoard/Kelly22_23.png'
import presidentSig from '../../Photos/PresidentsMsg/signature.png'
import coverPhoto from '../../Photos/Covers/Landing.jpeg';
import rightsun from '../../Photos/Icons/rightsun.png'
import leftsun from '../../Photos/Icons/leftsun.png';




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

                    <div className="awardsBox">
                        <p>Our exemplary commitment to SHPE's core values: Familia, Service, Education, and Resilience have earned us the <b>2022 SHPE Regional and National Chapter Awards</b>!</p>
                    </div>

                    <hr className="introBar" /> 
                    <div className="introbox" style={{textAlign: 'center'}}>
                            <div className="introMessage">
                                Who We Are
                            <div className="introSubMessage">
                                The Society of Latinx Engineers and Scientists at UCLA (SOLES) is a student 
                                organization in the Henry Samueli School of Engineering and Applied Science,
                                and is a student chapter of the Society of Hispanic Professional Engineers (SHPE).
                                We center around empowering Latinx students in engineering and science both at the UCLA and at nearby K-12 schools. Learn more <Link to={ROUTES.ABOUT}>here.</Link>
                            </div>
                        </div>
                        <img id="rightsunLanding" src={rightsun} alt="Right SOLES Sun" />
                        <img id="leftsunLanding" src={leftsun} alt="Left SOLES Sun" />
                    </div>
                    <hr className="introBar" /> 

                    <br/>

                    <div className="introbox" style={{textAlign: 'left'}}>
                        <div id="MessageFromCalendar">
                            <div className="calendarMessage">
                                    SOLES Calendar
                                <div className="calendarSubMessage">
                                    Click to learn more about an upcoming event!
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Calendar Imported from Calendar folder*/}
                    <Calendar/>

                    <br/>
                    {/* Message from our president message*/}
                    <div className="MessageFromPresident">

                        {/* Picture */}
                        <div className="presidentPhoto">
                            <img 
                                src= {presidentPhoto} 
                                alt="SOLES President" 
                                style={{width:'100%'}}
                            ></img>
                        </div>

                        {/* Message*/}
                        <div className="presidentMessage">
                            <div className="presidentTitle">
                                A MESSAGE FROM OUR PRESIDENT<br/>
                            </div>
                            {/* */}
                            <div className="presidentSubMessage">
                                Saludos a todos, and welcome to our SOLES Familia, the recognized SHPE Regional and National Chapter of the Year! 
                                <div style={{marginBottom: '0.6em', display: 'block'}} />
                                SOLES|SHPE at UCLA prides itself in being an organization that seeks to elevate its members to excel in all aspects of their lives.  We celebrate 
                                the unique qualities and experiences Latinx individuals contribute in engineering, empowering our members to have confidence in their abilities, 
                                regardless of individual circumstances.  We hold four chapter pillars: academic development, professional development, community outreach, and 
                                recruitment/retention, which we align with our goals and mission in all of our endeavors.  Please use this site as a resource to explore how we
                                reach our goals and how our members benefit from our interdisciplinary academic resources, community building events, community outreach initiatives, 
                                and wide-spread industry partnerships!  With these tools and the connections they bring, we hope to pave the way for a future in which all Latinx/Hispanic 
                                students are empowered, both at UCLA and in the greater Los Angeles community, to pursue a STEM degree and achieve high standards.
                                <div style={{marginBottom: '0.6em', display: 'block'}} />
                                Returning to my presidency, I plan to propel SOLES to new heights in all aspects of our missions and set new bars and expectations for generations to come.  
                                My hard working board and I all see the potential for SOLES to grow within our community, professionally, and with SHPE at large; meanwhile, continuing to foster 
                                our SOLECITOS FAMILIA feeling.  SOLES has been my home away from home, where I have been able to explore more of my own potential and passions, inspire myself to 
                                prosper as a Latina in STEM, and lean on those who understand me as we grow together.  I wish to provide this feeling and more to each individual.  I aim to inspire 
                                them to have pride in their cultural backgrounds and use it as a tool for their success.  I hope one day you may look back and appreciate what SOLES meant for each of you.  
                                Born of two Mexican immigrants, diversity and inclusion are values I have held since I was a little girl, and I continue to believe everyone should have the opportunity to 
                                explore his/her interests and grow as an individual no matter his/her background.  I plan to be a President who firmly stands for SOLES and all of its members, meanwhile 
                                serving as an example of leadership and compassion when spreading love to her growing familia and community. 
                                <div style={{marginBottom: '0.6em', display: 'block'}} />
                                With great excitement for the future, y mucho amor,
                                <div style={{marginBottom: '0.9em', display: 'block'}} />
                                <div style={{fontSize: '1.2em', lineHeight:'1.5em', color: 'gray', marginBottom: '0.3em'}}>
                                    Kelly Espino
                                </div>
                                <img 
                                    src= {presidentSig} 
                                    alt="President Signature" 
                                    style={{width:'12em'}}
                                ></img>
                                <div className="presidentContactInfo"><p>President 2022-2023<br/>
                                    <a href="mailto: uclasoles.president@gmail.com" target="_blank" rel="noopener noreferrer">uclasoles.president@gmail.com</a><br/>
                                    Civil Engineering B.S.<br/>
                                    UCLA Class of 2023 
                                </p>
                                </div>
                            </div>
                        </div>

                    </div>


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