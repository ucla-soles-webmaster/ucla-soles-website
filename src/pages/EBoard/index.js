import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../eBoard.css';
import Andy from '../../boardImages/andy.jpg'
import Trevor from '../../boardImages/trevor.jpg'
import Jasmine from '../../boardImages/dragonfruit.jpg'

import Mayra from '../../boardImages/mayra.jpg'
import Robert from '../../boardImages/lemon.jpg'
import Michael from '../../boardImages/michael.jpg'

import Aidan from '../../boardImages/aiden.jpg'
import Mat from '../../boardImages/mat.jpg'
import Eric from '../../boardImages/eric.jpeg'

import Fabrizio from '../../boardImages/fabrizio.jpg'
import Josh from '../../boardImages/strawberry.jpg'
import Kelly from '../../boardImages/tomato.jpg'

import Sherry from '../../boardImages/sherry.jpg'
import Anabella from '../../boardImages/anabella.jpg'
import Cathy from '../../boardImages/cathy.jpg'

import Juan from '../../boardImages/juan.jpg'

import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import coverPhoto from '../../coverImages/huddle.jpg';


class EBoard extends Component {

    // Add constructor here when necessary

    
      

    render() {
        return (
            <div>
                <Navigation transparentNav={true} />
                <PagePhoto imageSource={coverPhoto} title={"Executive Board"}></PagePhoto>
            <body1 className = "eBoardPage">                 

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Andy} alt="Andy Muraltalla" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Andy Muraltalla</div>
                            <div className = "majorFontLong">4th Year Aerospace Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is the SOLES White Elephant party back in December of my 2nd Year, where I got to share some quality Christmas spirit with members of all class levels.</div>
                            <div className = "emailFont">uclasoles.president@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Andy Muraltalla</div>
                    <div className = "setFontSizePosition">President</div>
                </div>

                

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Trevor} alt="Trevor Gomez" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Trevor Gomez</div>
                            <div className = "majorFontLong">3rd Year Mechanical Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is hanging out at the tailgates freshman year with the SOLES fam.</div>
                            <div className = "emailFontShort">uclasoles.evp@gmail.com</div>     
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Trevor Gomez</div>
                    <div className = "setFontSizePosition">External Vice President</div>
                </div>

                

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Jasmine} alt="Jasmine Raya" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Jasmine Raya</div>
                            <div className = "majorFont">3rd Year * * Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is...</div>
                            <div className = "emailFontShort">uclasoles.ivp@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Jasmine Raya</div>
                    <div className = "setFontSizePosition">Internal Vice President</div>
                </div>

                

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Michael} alt="Michael Munguia" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Michael Munguia</div>
                            <div className = "majorFont">*th Year * * Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is going to the SOLES tailgates and watching the football games.</div>
                            <div className = "emailFont">uclasoles.transferrep@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Michael Munguia</div>
                    <div className = "setFontSizePosition">Transfer Representative</div>
                </div>


                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Mayra} alt="Mayra Lara" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Mayra Lara</div>
                            <div className = "majorFont">2nd Year Civil Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is the October mentorSHPE event my freshman year; I got to bond with my mentor by carving a pumpkin together and also got to meet a lot of other SOLES members, both my year and older.</div>
                            <div className = "emailFont">uclasoles.treasurer@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Mayra Lara</div>
                    <div className = "setFontSizePosition">Treasurer</div>
                </div>

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Robert} alt="Robert Valencia" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Robert Valencia</div>
                            <div className = "majorFontLong">3rd Year Mechanical Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is...</div>
                            <div className = "emailFontShort">uclasoles@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Robert Valencia</div>
                    <div className = "setFontSizePosition">Secretary</div>
                </div>

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Aidan} alt="Aidan Hasegawa" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Aidan Hasegawa</div>
                            <div className = "majorFont">*rd Year * * Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is selling churros out on Bruin Walk.</div>
                            <div className = "emailFont">uclasoles.tutoring@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Aidan Hasegawa</div>
                    <div className = "setFontSizePosition">Tutoring Director</div>
                </div>

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Mat} alt="Matthew Ruiz" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Matthew Ruiz</div>
                            <div className = "majorFont">2nd Year Computer Science</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is making the last minute decision freshman year to go to the SHPE conference and spending the weekend getting to know all the SOLES people.</div>
                            <div className = "emailFontLong">uclasoles.academicchair@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Matthew Ruiz</div>
                    <div className = "setFontSizePosition">Academic Chair</div>
                </div>

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Eric} alt="Eric Saavedra Garcia" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Eric Saavedra Garcia</div>
                            <div className = "majorFontLong">2nd Year Mechanical Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is when we invited Hispanic Caltech professor Mauro Rodriguez to speak for a general meeting. Mauro did an amazing job 
                                                                    to empower and educate members that made it out to the meeting and I hope I can hear another presentation of his soon.</div>
                            <div className = "emailFont">uclasoles.activities@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Eric Saavedra Garcia</div>
                    <div className = "setFontSizePosition">Activities Chair</div>
                </div>

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Fabrizio} alt="Fabrizio Castañeda" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Fabrizio Castañeda</div>
                            <div className = "majorFontLong">2nd Year Computer Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is when I attended the LeaderSHPE Jr. Retreat, and I got to play the fictional role of the owner of Rick's Steakhouse in an event planning workshop. 
                                    It warmed my heart to see the kids having fun and gain confidence in their negotiating abilities. Also, we found out that the school we visited is where they filmed All American! What a day that was!</div>
                            <div className = "emailFontLong">uclasoles.cienciasdirector@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Fabrizio Castañeda</div>
                    <div className = "setFontSizePosition">Ciencias Director</div>
                </div>

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Josh} alt="Joshua Diaz" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Joshua Diaz</div>
                            <div className = "majorFontLong">4th Year Aerospace Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is...</div>
                            <div className = "emailFontLong">uclasoles.technicalchair@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Joshua Diaz</div>
                    <div className = "setFontSizePosition">Technical Chair</div>
                </div>

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Kelly} alt="Kelly Espino" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Kelly Espino</div>
                            <div className = "majorFont">2nd Year Civil Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is...</div>
                            <div className = "emailFont">uclasoles.leadershpe@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Kelly Espino</div>
                    <div className = "setFontSizePosition">LeaderSHPE Jr. Director</div>
                </div>

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Juan} alt="Juan Banchs" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Juan Banchs</div>
                            <div className = "majorFont">*nd Year * Engineering</div>
                            <div className = "backSideTextSmall">(I've been very little at SOLES, but) My favorite SOLES memory is the free chicken nuggets at the last Winter quarter meeting!</div>
                            <div className = "emailFont">*@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Juan Banchs</div>
                    <div className = "setFontSizePosition">Intern</div>
                </div>

                
                    <div className = "titleFont">                                
                                    If you are interested in joining one of our board 
                                    member’s committee or learning more about their position, please do not 
                                    hesitate to contact them, via GroupMe, email, social media, etc.
                        <div className = "staffMembersBoard">
                                    
                                    Our Wonderful CEED Staff
                                    </div>
                    </div>

                    
                
                
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Sherry} alt="Sherry Hormozi"></img>
                        <div className = "setFontSizeName">Sherry Hormozi</div>
                        <div className = "setFontSizePosition">Undergraduate Counselor</div>
                        <div className = "setFontSizeStaffEmail">sherry@seas.ucla.edu</div>
                    </figure>
                </div>

                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Cathy} alt="Catherine Douglas"></img>
                        <div className = "setFontSizeName">Catherine Douglas</div>
                        <div className = "setFontSizePosition">Intermin CEED SEAS Board Advisor</div>
                        <div className = "setFontSizeStaffEmail">cathyd@seas.ucla.edu</div>
                    </figure>
                </div>

                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Anabella} alt="Anabella Gonzalez"></img>
                        <div className = "setFontSizeName">Anabella Gonzalez</div>
                        <div className = "setFontSizeStaffEmail">Office Manager</div>
                        <div className = "setFontSizeStaffEmail">anabella@seas.ucla.edu</div>

                    </figure>
                </div>
            
            </body1>

            

                <br/>
                <br/>
                <br/>
                <br/>

            </div>
            
        );
        
    }

}



export default EBoard;