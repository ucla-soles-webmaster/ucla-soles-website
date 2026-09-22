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

import presidentPhoto from '../../JudeBoard/kingJude.JPG'; 
import coverPhoto from '../../components/StaticCoverPhoto/royce2.jpeg';
import rightsun from '../../Photos/Icons/rightsun.png'
import leftsun from '../../Photos/Icons/leftsun.png';
import presSig from '../../JudeBoard/judeSig.png';



class Landing extends Component {
    componentDidMount() {
        window.scrollTo(0, 0) 
    }

    render() { 
        return (
            <div>
                {/* Actual Landing Page */}
                <div id="landingactual">
                    <Navigation transparentNav={false} />
                    <StaticCoverPhoto imageSource={coverPhoto} title="Society of Latinx Engineers and Scientists" subtitle="University of California, Los Angeles"></StaticCoverPhoto>

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
                                and is a student chapter of the Society of Hispanic Professional Engineers (<a href="https://shpe.org/" target="_blank" rel="noopener noreferrer">SHPE</a>).
                                We center around empowering Latinx students in engineering and science both at the UCLA and at nearby K-12 schools. Learn more <Link to={ROUTES.ABOUT}>here.</Link>
                            </div>
                        </div>
                        <img id="rightsunLanding" src={rightsun} alt="Right SOLES Sun" />
                        <img id="leftsunLanding" src={leftsun} alt="Left SOLES Sun" />
                    </div>
                    <hr className="introBar" /> 

                    <br/>

                    <div className="introbox" style={{textAlign: 'left'}}>
                        <div className="MessageFromCalendar">
                            <div className="calendarMessage">
                                    SOLES Calendar
                                <div className="calendarSubMessage">
                                    Click to learn more about an upcoming event!
                                </div>
                            </div>
                            <div>
                                <a href="https://calendar.google.com/calendar/ical/uclasoles%40gmail.com/public/basic.ics" className="btn btn-primary btn-lg active" style={{textDecoration: 'none', marginTop: '25px', padding: '8px', borderRadius: '8px', backgroundColor: '#3788d8', color: 'white', fontFamily: 'Poppins', fontSize: '1vw', border: '0px', cursor: 'pointer', display: 'inline-block'}} rel="noopener noreferrer" target="_blank">
                                    Import to Personal Calendar
                                </a>                                 
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
                                style={{width:'100%', border: '5px solid black' }}
                            ></img>
                        </div>

                        {/* Message*/}
                        <div className="presidentMessage">
                            <div className="presidentTitle">
                                A MESSAGE FROM OUR PRESIDENT<br/>
                            </div>
                            {/* */}
                            <div className="presidentSubMessage">
                            Bienvenidos and welcome to the SOLES familia!
                                <div style={{marginBottom: '0.9em', display: 'block'}} />
                                When I first came to UCLA, I was looking for a place where I could find community and learn how to navigate engineering. I found that in SOLES. What started as me going to a few events like beach days and resume workshops quickly became one of the most meaningful parts of my college experience. Through SOLES, I found mentors, lifelong friends, leadership opportunities, and a community that pushed me to grow both personally and professionally.  
                                <div style={{marginBottom: '0.6em', display: 'block'}} />
                                Over the past few years, I’ve had the opportunity to give back to that community as a member, intern, and later Director of Noche de Ciencias. Those experiences showed me how much of a difference it can make when students feel supported, valued, and connected to a community that believes in them. I’ve also seen that impact through our outreach, where a little encouragement can turn a student who is hesitant to participate into someone excited about building, experimenting, and seeing themselves in STEM.
                                <div style={{marginBottom: '0.6em', display: 'block'}} />
                                As President, my goal is to continue building the kind of community that made such a difference in my own life. Guided by our core pillars of academic development, professional development, community outreach, and recruitment and retention, I want every student who joins SOLES to feel like they belong here, whether they’re attending their first general meeting, preparing for an internship interview, traveling to SHPE Nationals, or just looking for people who understand what they’re going through.
                                <div style={{marginBottom: '0.6em', display: 'block'}} />
                                Most importantly, I want SOLES to remain a place where students can grow, take chances, make mistakes, celebrate successes, and build friendships that last long after graduation. I’m incredibly grateful for everyone who has helped make SOLES what it is today, and I’m excited to see what we can build together this year.
                                <div style={{marginBottom: '0.9em', display: 'block'}} />
                                Con gratitud,
                                <div style={{marginBottom: '1.2em', display: 'block'}} />
                                <div style={{fontSize: '1.2em', lineHeight:'1.5em', color: 'gray', marginBottom: '0.3em'}}>
                                    Judas Lopez
                                </div>
                                <img 
                                    src= {presSig} 
                                    alt="President Signature" 
                                    style={{width:'14em', height: '6em', objectFit: 'cover', objectPosition: '70% 10%'}}
                                ></img>
                                <div className="presidentContactInfo"><p>President 2025-2026<br/>
                                    <a href="mailto: uclasoles.president@gmail.com" target="_blank" rel="noopener noreferrer">uclasoles.president@gmail.com</a><br/>
                                    Electrical Engineering B.S.<br/>
                                    UCLA Class of 2026
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
                
                {/* <div id="startupdiv" >
            
                </div> */}
                <Footer/>
            </div>
        );
    }
            
}

export default Landing;