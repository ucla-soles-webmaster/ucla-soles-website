import React, { Component } from 'react';

import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import Footer from '../../components/Footer';

import coverPhoto from '../../coverImages/planesOpL.png';
import rightsun from '../../coverImages/rightsun.png'
import leftsun from '../../coverImages/leftsun.png';
import sun from './suny.png';

import jrOp from './jrOp.png';
import jrCol from './jrCol.png';
import cienciasOp from './CienciasOp.png';
import cienciasCol from './CienciasCol.png';
import tutoringOp from './TutoringOp.png';
import tutoringCol from './TutoringCol.png';
import eitOp from './eitOp.png';
import eitCol from './eitCol.png';

import studynightOp from '../../coverImages/studynightOp.png';
import studynightCol from '../../coverImages/studynightCol.png';
import lunarOp from './lunarOp.png';
import lunarCol from './lunarCol.png';
import ExpEduOp from './ExpEduOp.png';
import ExpEduCol from './ExpEduCol.png';

import natConOp from './NatConOp.png';
import natConCol from './NatConCol.png';
import RLDCOp from './RLDCOp.png';
import RLDCCol from './RLDCCol.png';
import IndWorkOp from './IndWorkOp.png';
import IndWorkCol from './IndWorkCol.png';

import mentorSHPEOp from './mentorSHPEOp.png';
import mentorSHPECol from './mentorSHPECol.png';
import socialOp from './social1Op.png';
import socialCol from './social1Col.png';

import './initiativeStyle.css'


class Initiatives extends Component {

    // Add constructor here when necessary
    constructor() {
        super();
        this.state = {
          hovered: false,
        };
    }

    render () {
        return (
            <div>
                <Navigation transparentNav={true} />
                <PagePhoto imageSource={coverPhoto} title={"Our Initiatives"}></PagePhoto>

                <br/><br/><br/>

                <hr className="introBar" /> 
                    <div className="introbox" style={{textAlign: 'center'}}>
                        <p className="initIntro" style={{textAlign: 'center', marginRight: '18.5%', marginLeft: '18.5%', fontSize:'1.1vw',fontWeight:'10'}}>
                            
                            <p style={{fontSize: '2.3vw', color: 'gray', marginTop: '-2.2%', marginBottom: '1%', fontWeight:'300'}}>
                                What We Pride In
                            </p>
                            
                            Our initiatives and events form the heart of SOLES. They help 
                            bring together our members, create opportunities for both K-12
                            and college students, and flourish memories and experiences our
                            members won't forget.
                            
                        </p>
                        <img id="rightsunLanding" src={rightsun} alt="Right SOLES Sun" />
                        <img id="leftsunLanding" src={leftsun} alt="Left SOLES Sun" />
                    </div>
                <hr className="introBar" />   

                <br/><br/>

                <img src={sun} className="minisun" alt="mini sun" />
                <h1 className="h1init">Outreach</h1>
                <div className="container3">
                    <div class="picture-grid">

                        <div className="grid-box">
                            <img 
                                id="imgA" 
                                src={eitCol} 
                                onMouseOver={e => (e.currentTarget.src = eitOp)}
                                onMouseLeave={e => (e.currentTarget.src = eitCol)}
                                alt="Engineers in Training" 
                            />
                            <p id="initTitle"><b>Engineers in Training (EIT)</b></p>
                            <p id="description">
                                Each year EIT attracts 250 high schoolers for a day<br/>
                                of engagement in STEM. Our goal is to inspire teens<br/>
                                from underrepresented groups via engineering<br/>
                                workshops, student panels, and UCLA campus tours.
                            </p>
                        </div>
                        <div className="grid-box">
                            <img 
                                id="imgA" 
                                src={jrCol} 
                                onMouseOver={e => (e.currentTarget.src = jrOp)}
                                onMouseLeave={e => (e.currentTarget.src = jrCol)}
                                alt="SHPE Jr Leadership Retreat" 
                            />
                            <p id="initTitle"><b>SHPE Jr Leadership Retreat</b></p>
                            <p id="description">
                                With 20+ SOLES volunteers, this free day-long<br/>
                                retreat aims at providing networking, career<br/>
                                building, and educational opportunities to more<br/>
                                than 60 SHPE Jrs in Region II.
                            </p>
                        </div>
                        <div className="grid-box">
                            <img 
                                id="imgA" 
                                src={cienciasCol} 
                                onMouseOver={e => (e.currentTarget.src = cienciasOp)}
                                onMouseLeave={e => (e.currentTarget.src = cienciasCol)}
                                alt="Dia de Ciencias" 
                            />
                            <p id="initTitle"><b>Noche de Ciencias</b></p>
                            <p id="description">
                                Noche de Ciencias brings together 75+ K-12<br/>
                                students to help identify potential career paths in<br/>
                                STEM. This year's theme is Space Exploration, and<br/>
                                will be experienced in a Dia and Noche de Ciencias.<br/>
                            </p>
                        </div>
                        <div className="grid-box">
                            <img 
                                id="imgA" 
                                src={tutoringCol} 
                                onMouseOver={e => (e.currentTarget.src = tutoringOp)}
                                onMouseLeave={e => (e.currentTarget.src = tutoringCol)}
                                alt="MESA Tutoring" 
                            />
                            <p id="initTitle"><b>MESA Tutoring</b></p>
                            <p id="description">
                                For SOLES, tutoring is all about giving back. By<br/>
                                parterning with the MESA program and local SHPE Jr<br/>
                                chapters, SOLES members are able to give back<br/>
                                biweekly by tutoring STEM subjects at high schools.
                            </p>
                        </div>

                    </div>
                </div>

                <img src={sun} className="minisun" alt="mini sun" />
                <h1 className="h1init">Academic Development</h1>
                <div className="container3">
                    <div class="picture-grid">

                        <div className="grid-box">
                                <img 
                                    id="imgA" 
                                    src={studynightCol}
                                    onMouseOver={e => (e.currentTarget.src = studynightOp)}
                                    onMouseLeave={e => (e.currentTarget.src = studynightCol)}
                                    alt="Study Nights on the Hill" />
                                <p id="initTitle"><b>Study Nights on the Hill</b></p>
                                <p id="description">
                                    Through the offering of a weekly study space, the<br/>
                                    SOLES community has united to form a close-knit<br/>
                                    academic fortress. Our weekly themed study nights<br/>
                                    come with snacks that no college student can reject.

                                </p>
                        </div>
                        <div className="grid-box">
                            <img 
                                id="imgA" 
                                src={lunarCol} 
                                onMouseOver={e => (e.currentTarget.src = lunarOp)}
                                onMouseLeave={e => (e.currentTarget.src = lunarCol)}
                                alt="SHPE Jr Leadership Retreat" 
                            />
                            <p id="initTitle"><b>Lunabotics</b></p>
                            <p id="description">
                                Lunabotics is our premier technical project centered<br/>
                                around building a model lunar mining rover capable<br/>
                                of exploring and excavating replica lunar surface<br/>
                                material for the NASA Robotic Mining Challenge.
                            </p>
                        </div>
                        <div className="grid-box">
                            <img 
                                id="imgA" 
                                src={ExpEduCol} 
                                onMouseOver={e => (e.currentTarget.src = ExpEduOp)}
                                onMouseLeave={e => (e.currentTarget.src = ExpEduCol)}
                                alt="Expand Your Education" 
                            />
                            <p id="initTitle"><b>Expand Your Education</b></p>
                            <p id="description">
                                At SOLES we recognize and adhere to our members'<br/>
                                goals. This new initiative is all about providing<br/>
                                post-graduate resources to those of our members<br/>
                                intersted in higher education rather than industry.
                            </p>
                        </div>

                    </div>
                </div>

                <img src={sun} className="minisun" alt="mini sun" />
                <h1 className="h1init">Professional Development</h1>
                <div className="container3">
                    <div class="picture-grid">

                        <div className="grid-box">
                                <img 
                                    id="imgA" 
                                    src={natConCol} 
                                    onMouseOver={e => (e.currentTarget.src = natConOp)}
                                    onMouseLeave={e => (e.currentTarget.src = natConCol)}
                                    alt="SHPE National Convention" />
                                <p id="initTitle"><b>SHPE National Convention</b></p>
                                <p id="description">
                                    Through fundraising and corporate sponsorship,<br/>
                                    SOLES was able to send 28 members to the SHPE<br/>
                                    National Convention this year for a weekend full<br/>
                                    of leadership and professional development.
                                </p>
                        </div>
                        <div className="grid-box">
                            <img 
                                id="imgA" 
                                src={RLDCCol} 
                                onMouseOver={e => (e.currentTarget.src = RLDCOp)}
                                onMouseLeave={e => (e.currentTarget.src = RLDCCol)}
                                alt="SHPE Jr Leadership Retreat" 
                            />
                            <p id="initTitle"><b>RLDC</b></p>
                            <p id="description">
                                SOLES is proud to host the 2021 SHPE Regional<br/>
                                Leadership Development Conference for Region II.<br/>
                                For our 500+ attendees, networking and workshop<br/>
                                events will promote diversity/inclusion in industry.


                            </p>
                        </div>
                        <div className="grid-box">
                            <img 
                                id="imgA"
                                src={IndWorkCol} 
                                onMouseOver={e => (e.currentTarget.src = IndWorkOp)}
                                onMouseLeave={e => (e.currentTarget.src = IndWorkCol)}
                                alt="Industry Workshops" 
                            />
                            <p id="initTitle"><b>Industry Workshops</b></p>
                            <p id="description">
                                Through cooperation with our partnered sponsors,<br/>
                                SOLES is able to host on-campus events such as<br/>
                                Interview Prep, Resume Workshops, and Corporate<br/>
                                Etiquette alongside tenured industry professionals.
                            </p>
                        </div>

                    </div>
                </div>

                <img src={sun} className="minisun" alt="mini sun" />
                <h1 className="h1init">Chapter Development</h1>
                <div className="container3">
                    <div class="picture-grid">

                        <div className="grid-box">
                            <img 
                                id="imgA" 
                                src={mentorSHPECol} 
                                onMouseOver={e => (e.currentTarget.src = mentorSHPEOp)}
                                onMouseLeave={e => (e.currentTarget.src = mentorSHPECol)}
                                alt="MentorSHPE"
                            />
                            <p id="initTitle"><b>MentorSHPE</b></p>
                            <p id="description">
                                At SOLES we strive to uplift each other academically,<br/>
                                professionally, and socially. Come join one of our<br/>
                                MentorSHPE familias and compete in this year's<br/>
                                MentorSHPE ChampionSHPE with friends.
                            </p>
                        </div>
                        <div className="grid-box">
                            <img 
                                id="imgA" 
                                src={socialCol} 
                                onMouseOver={e => (e.currentTarget.src = socialOp)}
                                onMouseLeave={e => (e.currentTarget.src = socialCol)}
                                alt="MentorSHPE"
                            />
                            <p id="initTitle"><b>Socials</b></p>
                            <p id="description">
                                Socials are an integral component of SOLES given<br/> 
                                our amount of growth and success in recent years.<br/>
                                Tailgates, bonfires, intramural sports, Super Smash<br/>
                                Bro tournies, "SWOLES", SOLES Chopped... you name it!
                            </p>
                        </div>

                    </div>
                </div>

                <Footer />
            </div>
        );
    }

}


export default Initiatives;
