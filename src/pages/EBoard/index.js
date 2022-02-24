///////////////////////////////////////////////////////////////
/* Component / ReactJS Library Imports */

import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import coverPhoto from '../../photos/Covers/EBoard.jpg';



///////////////////////////////////////////////////////////////
/* Individual Officer Photo Imports */

/* President */ import Kelly from '../../photos/EBoard/Kelly.jpg'
/* EVP */ import Mayra from '../../photos/EBoard/Mayra.jpg'
/* IVP */ import Aidan from '../../photos/EBoard/Aidan.jpg'

/* Treasurer */ import Kami from '../../photos/EBoard/Kami.jpg'
/* Secretary */ import Fabrizio from '../../photos/EBoard/Fabrizio.jpg'
/* Transfer */ import Kent from '../../photos/EBoard/Kent.jpg'

/* Tutoring */ import Marisa from '../../photos/EBoard/Marisa.jpg'
/* Academic */import Mat from '../../photos/EBoard/Mat.jpg'
/* Activities */ import Robert from '../../photos/EBoard/Robert.jpg'

/* Ciencias */ import Itzhary from '../../photos/EBoard/Itzhary.jpg'
/* Tech */ import Trevor from '../../photos/EBoard/Trevor.jpg'
/* LeaderSHPE Jr */ import Benito from '../../photos/EBoard/Benito.jpg'

/* Intern 1 */ import Juan from '../../photos/EBoard/Juan.jpg'

/* CEED Staff */
import Sherry from '../../photos/EBoard/CEED/sherry.jpg'
import Anabella from '../../photos/EBoard/CEED/anabella.jpg'
import Cathy from '../../photos/EBoard/CEED/cathy.jpg'



///////////////////////////////////////////////////////////////
/* CSS Imports */

import './EBoard.css';



///////////////////////////////////////////////////////////////
/* Accent Photo Imports */

import rightsun from '../../photos/Icons/rightsun.png'
import leftsun from '../../photos/Icons/leftsun.png';
import sun from '../../photos/Icons/sun.png'




class EBoard extends Component {

    // Add constructor here when necessary
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    

    render() {
        return (
            <div>
                <Navigation transparentNav={true} />
                <PagePhoto imageSource={coverPhoto} title={"Executive Board"}></PagePhoto>
                

                {/* Page Title Header */}
                <hr className="introBar" /> 
                    <div className="introbox" style={{textAlign: 'center'}}>
                        <p className="initIntro" style={{textAlign: 'center', marginRight: '18.5%', marginLeft: '18.5%', fontSize:'1.1vw',fontWeight:'10'}}>
                            <p style={{fontSize: '2.3vw', color: 'gray', marginTop: '-2.2%', marginBottom: '1%', fontWeight:'300'}}>
                                The Leaders of SOLES
                            </p>
                                These are the amazing individuals that help SOLES operate day to day! 
                                Interested in working with or learning more about our
                                Board members? Our Board will be more than happy! 
                                Please feel free to reach out to them via their email.
                        </p>
                        <img id="rightsunLanding" src={rightsun} alt="Right SOLES Sun" />
                        <img id="leftsunLanding" src={leftsun} alt="Left SOLES Sun" />
                    </div>
                <hr className="introBar" />    
                <br/>
            

                {/* Photo Grid */}
                <body1 className = "eBoardPage">   

                    {/* President */}           
                    <div className = "eBoardPerson">
                        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img className = "BoardPageImages" src= {Kelly} alt="Kelly Espino" ></img>
                            </div>
                            <div class="flip-card-back">
                                {/* Name */} <div className = "backSideText">Kelly Espino</div>
                                {/* Year | Major */} <div className = "majorFontLong">3rd Year | Civil Engineering</div>
                                <div className = "backSideTextSmall">My favorite SOLES memory is going to the LeaderSHPE Jr. Retreat. Seeing all of our hard work turn into such a fruitful experience for both the volunteers and attendees was absolutely incredible. Being able to make an impact on these young lives and give them a reason to smile, is the reason I wanted to continue it.</div>
                                <div className = "emailFont">uclasoles.president@gmail.com</div>    
                            </div>
                        </div>
                        </div>
                        <div className = "setFontSizeName">Kelly Espino</div>
                        <div className = "setFontSizePosition">President</div>
                    </div>

                    {/* EVP */}     
                    <div className = "eBoardPerson">
                        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img className = "BoardPageImages" src= {Mayra} alt="Mayra Lara" ></img>
                            </div>
                            <div class="flip-card-back">
                                {/* Name */} <div className = "backSideText">Mayra Lara</div>
                                {/* Year | Major */} <div className = "majorFontLong">3rd Year | Civil Engineering</div>
                                <div className = "backSideTextSmall">My favorite SOLES memory is the October mentorSHPE event my freshman year; I got to bond with my mentor by carving a pumpkin together and also got to meet a lot of other SOLES members, both my year and older.</div>
                                <div className = "emailFontShort">uclasoles.evp@gmail.com</div>     
                            </div>
                        </div>
                        </div>
                        <div className = "setFontSizeName">Mayra Lara</div>
                        <div className = "setFontSizePosition">External Vice President</div>
                    </div>

                    {/* IVP */}  
                    <div className = "eBoardPerson">
                        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img className = "BoardPageImages" src= {Aidan} alt="Aidan Hasegawa" ></img>
                            </div>
                            <div class="flip-card-back">
                                {/* Name */} <div className = "backSideText">Aidan Hasegawa</div>
                                {/* Year | Major */} <div className = "majorFontLong">4th Year | Civil Engineering</div>
                                {/* Fav SOLES Mem */} <div className = "backSideTextSmall">My favorite SOLES memory is selling churros out on Bruin Walk.</div>
                                <div className = "emailFontShort">uclasoles.ivp@gmail.com</div>    
                            </div>
                        </div>
                        </div>
                        <div className = "setFontSizeName">Aidan Hasegawa</div>
                        <div className = "setFontSizePosition">Internal Vice President</div>
                    </div>

                    {/* Transfer Rep */}  
                    <div className = "eBoardPerson">
                        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img className = "BoardPageImages" src= {Kent} alt="Kent Bourgoing" ></img>
                            </div>
                            <div class="flip-card-back">
                                {/* Name */} <div className = "backSideText">Kent Bourgoing</div>
                                {/* Year | Major */} <div className = "majorFontLong">4th Year | Chemical Engineering</div>
                                {/* Fav SOLES Mem */} <div className = "backSideTextSmall">My favorite SOLES memory was the 1st General Meeting of the quarter and playing games. Even though I still wasn’t part of the board.</div>
                                <div className = "emailFont">uclasoles.transferrep@gmail.com</div>    
                            </div>
                        </div>
                        </div>
                        <div className = "setFontSizeName">Kent Bourgoing</div>
                        <div className = "setFontSizePosition">Transfer Representative</div>
                    </div>

                    {/* Treasurer */}  
                    <div className = "eBoardPerson">
                        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img className = "BoardPageImages" src= {Kami} alt="Kami Kunes" ></img>
                            </div>
                            <div class="flip-card-back">
                                {/* Name */} <div className = "backSideText">Kami Kunes</div>
                                {/* Year | Major */} <div className = "majorFont">2nd Year | Electrical Engineering</div>
                                {/* Fav SOLES Mem */} <div className = "backSideTextSmall">My favorite SOLES memory was when we had our first in-person meeting and I got to hand out pizza.</div>
                                <div className = "emailFont">uclasoles.treasurer@gmail.com</div>    
                            </div>
                        </div>
                        </div>
                        <div className = "setFontSizeName">Kami Kunes</div>
                        <div className = "setFontSizePosition">Treasurer</div>
                    </div>

                    {/* Secretary */}  
                    <div className = "eBoardPerson">
                        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img className = "BoardPageImages" src= {Fabrizio} alt="Fabrizio Castañeda" ></img>
                            </div>
                            <div class="flip-card-back">
                                {/* Name */} <div className = "backSideText">Fabrizio Castañeda</div>
                                {/* Year | Major */} <div className = "majorFontLong">3rd Year | Computer Engineering</div>
                                {/* Fav SOLES Mem */} <div className = "backSideTextSmall">My favorite SOLES memory is when I attended the LeaderSHPE Jr. Retreat, and I got to play the fictional role of the owner of Rick's Steakhouse in an event planning workshop. 
                                        It warmed my heart to see the kids having fun and gain confidence in their negotiating abilities. Also, we found out that the school we visited is where they filmed All American! What a day that was!</div>
                                <div className = "emailFontShort">uclasoles@gmail.com</div>    
                            </div>
                        </div>
                        </div>
                        <div className = "setFontSizeName">Fabrizio Castañeda</div>
                        <div className = "setFontSizePosition">Secretary</div>
                    </div>

                    {/* Tutoring Director */}  
                    <div className = "eBoardPerson">
                        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img className = "BoardPageImages" src= {Marisa} alt="Marisa Duran" ></img>
                            </div>
                            <div class="flip-card-back">
                                {/* Name */} <div className = "backSideText">Marisa Duran</div>
                                {/* Year | Major */} <div className = "majorFont">2nd Year | Computer Science</div>
                                {/* Fav SOLES Mem */} <div className = "backSideTextSmall">My favorite SOLES memory is finally being able to meet everyone in person at the first general meeting after a year of zoom!</div>
                                <div className = "emailFont">uclasoles.tutoring@gmail.com</div>    
                            </div>
                        </div>
                        </div>
                        <div className = "setFontSizeName">Marisa Duran</div>
                        <div className = "setFontSizePosition">Tutoring Director</div>
                    </div>

                    {/* Academic Chair */}  
                    <div className = "eBoardPerson">
                        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img className = "BoardPageImages" src= {Mat} alt="Matthew Ruiz" ></img>
                            </div>
                            <div class="flip-card-back">
                                {/* Name */} <div className = "backSideText">Matthew Ruiz</div>
                                {/* Year | Major */} <div className = "majorFont">3rd Year | Computer Science</div>
                                {/* Fav SOLES Mem */} <div className = "backSideTextSmall">My favorite SOLES memory is making the last minute decision freshman year to go to the SHPE conference and spending the weekend getting to know all the SOLES people.</div>
                                <div className = "emailFontLong">uclasoles.academicchair@gmail.com</div>    
                            </div>
                        </div>
                        </div>
                        <div className = "setFontSizeName">Matthew Ruiz</div>
                        <div className = "setFontSizePosition">Academic Chair</div>
                    </div>

                    {/* Activities Director */}  
                    <div className = "eBoardPerson">
                        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img className = "BoardPageImages" src= {Robert} alt="Robert Valencia" ></img>
                            </div>
                            <div class="flip-card-back">
                                {/* Name */} <div className = "backSideText">Robert Valencia</div>
                                {/* Year | Major */} <div className = "majorFontLong">4th Year | Mechanical Engineering</div>
                                {/* Fav SOLES Mem */} <div className = "backSideTextSmall">My favorite SOLES memory is the 2019 Leadership Jr. Retreat. It was such a fun and rewarding experience to spend a day with 
                                students interested in STEM that have a similar background as I do.</div>
                                <div className = "emailFont">uclasoles.activities@gmail.com</div>    
                            </div>
                        </div>
                        </div>
                        <div className = "setFontSizeName">Robert Valencia</div>
                        <div className = "setFontSizePosition">Activities Chair</div>
                    </div>

                    {/* Ciencias Director */}  
                    <div className = "eBoardPerson">
                        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img className = "BoardPageImages" src= {Itzhary} alt="Itzhary Tamayo" ></img>
                            </div>
                            <div class="flip-card-back">
                                {/* Name */} <div className = "backSideText">Itzhary Tamayo</div>
                                {/* Year | Major */} <div className = "majorFontLong">3rd Year | Civil Engineering</div>
                                {/* Fav SOLES Mem */} <div className = "backSideTextSmall">My favorite SOLES memory was the Xmas party because I enjoyed spending time with cool people and it made it feel like a home away from home.</div>
                                <div className = "emailFontLong">uclasoles.cienciasdirector@gmail.com</div>    
                            </div>
                        </div>
                        </div>
                        <div className = "setFontSizeName">Itzhary Tamayo</div>
                        <div className = "setFontSizePosition">Ciencias Director</div>
                    </div>

                    {/* Technical Chair */}  
                    <div className = "eBoardPerson">
                        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img className = "BoardPageImages" src= {Trevor} alt="Trevor Gomez" ></img>
                            </div>
                            <div class="flip-card-back">
                                {/* Name */} <div className = "backSideText">Trevor Gomez</div>
                                {/* Year | Major */} <div className = "majorFontLong">4th Year | Mechanical Engineering</div>
                                {/* Fav SOLES Mem */} <div className = "backSideTextSmall">My favorite SOLES memory is hanging out at the tailgates freshman year with the SOLES fam.</div>
                                <div className = "emailFontLong">uclasoles.technicalchair@gmail.com</div>    
                            </div>
                        </div>
                        </div>
                        <div className = "setFontSizeName">Trevor Gomez</div>
                        <div className = "setFontSizePosition">Technical Chair</div>
                    </div>

                    {/* LeaderSHPE Junior */}  
                    <div className = "eBoardPerson">
                        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img className = "BoardPageImages" src= {Benito} alt="Benito Garduno" ></img>
                            </div>
                            <div class="flip-card-back">
                                {/* Name */} <div className = "backSideText">Benito Garduno</div>
                                {/* Year | Major */} <div className = "majorFont">2nd Year | Civil Engineering</div>
                                {/* Fav SOLES Mem */} <div className = "backSideTextSmall"></div>
                                <div className = "emailFont">uclasoles.leadershpe@gmail.com</div>    
                            </div>
                        </div>
                        </div>
                        <div className = "setFontSizeName">Benito Garduno</div>
                        <div className = "setFontSizePosition">LeaderSHPE Jr. Director</div>
                    </div>

                    {/* Intern 1 */}  
                    <div className = "eBoardPerson">
                        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img className = "BoardPageImages" src= {Juan} alt="Juan Banchs" ></img>
                            </div>
                            <div class="flip-card-back">
                                {/* Name */} <div className = "backSideText">Juan Banchs</div>
                                {/* Year | Major */} <div className = "majorFontLong">4th Year | Mechanical Engineering</div>
                                {/* Fav SOLES Mem */} <div className = "backSideTextSmall">(I've been very little at SOLES, but) My favorite SOLES memory is the free chicken nuggets at the last Winter quarter meeting!</div>
                                <div className = "emailFont">uclasoles.intern@gmail.com</div>    
                            </div>
                        </div>
                        </div>
                        <div className = "setFontSizeName">Juan Banchs</div>
                        <div className = "setFontSizePosition">Intern</div>
                    </div>


                    {/* Elections Disclaimer and CEED Title */}  
                    <div className = "titleFont1"> 
                        <br/>
                        <div className="titleFont2">
                            Elections for SOLES Executive Board positions occur annually during Spring Quarter. 
                            All members are encouraged to run for positions!
                        </div>                               
                        <hr ClassName = "BoardIntroBar" ></hr>
                        <img className = "BoardPageSun" src= {sun} alt="Yellow Sun" ></img>
                        <br/>
                        <div className = "staffMembersBoard">
                            CEED Advisors
                        </div>
                    </div>
                    


                    {/* CEED Staff Photo Grid */} 
                    {/* Sherry */} 
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "BoardPageImages" src={Sherry} alt="Sherry Hormozi"></img>
                            <div className = "setFontSizeName">Sherry Hormozi</div>
                            <div className = "setFontSizePosition">Undergraduate Counselor</div>
                            <div className = "setFontSizeStaffEmail">sherry@seas.ucla.edu</div>
                        </figure>
                    </div>

                    {/* Cathy */} 
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "BoardPageImages" src={Cathy} alt="Catherine Douglas"></img>
                            <div className = "setFontSizeName">Catherine Douglas</div>
                            <div className = "setFontSizePosition">CEED SEAS Board Advisor</div>
                            <div className = "setFontSizeStaffEmail">cathyd@seas.ucla.edu</div>
                        </figure>
                    </div>

                    {/* Anabella */} 
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "BoardPageImages" src={Anabella} alt="Anabella Gonzalez"></img>
                            <div className = "setFontSizeName">Anabella Gonzalez</div>
                            <div className = "setFontSizeStaffEmail">Office Manager</div>
                            <div className = "setFontSizeStaffEmail">anabella@seas.ucla.edu</div>
                        </figure>
                    </div>
                
                </body1> {/* End Photo Grid Section */} 


                <br/>
                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>
            
        );
        
    }

}



export default EBoard;