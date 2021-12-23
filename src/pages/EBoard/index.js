import React, { Component } from 'react';
import Footer from '../../components/Footer';

import '../../eBoard.css';
import rightsun from '../../coverImages/rightsun.png'
import leftsun from '../../coverImages/leftsun.png';

import Andy from '../../boardImages/andy2.jpeg'
import Trevor from '../../boardImages/trevor1.JPG'
import Jasmine from '../../boardImages/raya.jpeg'

import Mayra from '../../boardImages/mayra1.JPG'
import Robert from '../../boardImages/robert.jpeg'
import Michael from '../../boardImages/michael1.JPG'

import Aidan from '../../boardImages/aiden1.jpeg'
import Mat from '../../boardImages/mat1.JPG'
import Eric from '../../boardImages/eric1.JPG'

import Fabrizio from '../../boardImages/fabrizio.JPG'
import Josh from '../../boardImages/josh.jpeg'
import Kelly from '../../boardImages/kelly1.jpeg'

import Sherry from '../../boardImages/sherry.jpg'
import Anabella from '../../boardImages/anabella.jpg'
import Cathy from '../../boardImages/cathy.jpg'

import blank from '../../boardImages/blank.JPG'

import Juan from '../../boardImages/juan1.PNG'

import Sun from '../../boardImages/sun.png'

import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import coverPhoto from '../../coverImages/huddleOpL.png';


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
            <body1 className = "eBoardPage">              
                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
<<<<<<< HEAD
                            <img className = "BoardPageImages" src= {Kelly} alt="Kelly Espino" ></img>
=======
                            <img className = "BoardPageImages" src= {Andy} alt="Andy Muratalla" ></img>
>>>>>>> 5da061c8238df44acfcdc1987a2449eb644ccddd
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Kelly Espino</div>
                            <div className = "majorFontLong">3rd Year | Civil Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is going to the LeaderSHPE Jr. Retreat. Seeing all of our hard work turn into such a fruitful experience for both the volunteers and attendees was absolutely incredible. Being able to make an impact on these young lives and give them a reason to smile, is the reason I wanted to continue it.</div>
                            <div className = "emailFont">uclasoles.president@gmail.com</div>    
                        </div>
                    </div>
                    </div>
<<<<<<< HEAD
                    <div className = "setFontSizeName">Kelly Espino</div>
=======
                    <div className = "setFontSizeName">Andy Muratalla</div>
>>>>>>> 5da061c8238df44acfcdc1987a2449eb644ccddd
                    <div className = "setFontSizePosition">President</div>
                </div>

                

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Mayra} alt="Mayra Lara" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Mayra Lara</div>
                            <div className = "majorFontLong">3rd Year | Civil Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is the October mentorSHPE event my freshman year; I got to bond with my mentor by carving a pumpkin together and also got to meet a lot of other SOLES members, both my year and older.</div>
                            <div className = "emailFontShort">uclasoles.evp@gmail.com</div>     
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Mayra Lara</div>
                    <div className = "setFontSizePosition">External Vice President</div>
                </div>

                

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Aidan} alt="Aidan Hasegawa" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Aidan Hasegawa</div>
                            <div className = "majorFontLong">4rd Year | Civil Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is selling churros out on Bruin Walk.</div>
                            <div className = "emailFontShort">uclasoles.ivp@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Aidan Hasegawa</div>
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
                            <div className = "majorFontLong">5th Year | Mechanical Engineering</div>
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
                            <img className = "BoardPageImages" src= {blank} alt="Kami Kunes" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Kami Kunes</div>
                            <div className = "majorFont">2nd Year | Electrical Engineering</div>
                            <div className = "backSideTextSmall"></div>
                            <div className = "emailFont">uclasoles.treasurer@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Kami Kunes</div>
                    <div className = "setFontSizePosition">Treasurer</div>
                </div>

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Fabrizio} alt="Fabrizio Castañeda" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Fabrizio Castañeda</div>
                            <div className = "majorFontLong">3rd Year | Computer Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is when I attended the LeaderSHPE Jr. Retreat, and I got to play the fictional role of the owner of Rick's Steakhouse in an event planning workshop. 
                                    It warmed my heart to see the kids having fun and gain confidence in their negotiating abilities. Also, we found out that the school we visited is where they filmed All American! What a day that was!</div>
                            <div className = "emailFontShort">uclasoles@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Fabrizio Castañeda</div>
                    <div className = "setFontSizePosition">Secretary</div>
                </div>

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {blank} alt="Marisa Duran" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Marisa Duran</div>
                            <div className = "majorFont">2nd Year | Computer Science</div>
                            <div className = "backSideTextSmall"></div>
                            <div className = "emailFont">uclasoles.tutoring@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Marisa Duran</div>
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
                            <div className = "majorFont">2nd Year | Computer Science</div>
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
                            <img className = "BoardPageImages" src= {Robert} alt="Robert Valencia" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Robert Valencia</div>
                            <div className = "majorFontLong">4nd Year | Mechanical Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is the 2019 Leadership Jr. Retreat. It was such a fun and rewarding experience to spend a day with 
                            students interested in STEM that have a similar background as I do.</div>
                            <div className = "emailFont">uclasoles.activities@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Robert Valencia</div>
                    <div className = "setFontSizePosition">Activities Chair</div>
                </div>

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {blank} alt="Itzhary Tamayo" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Itzhary Tamayo</div>
                            <div className = "majorFontLong">3rd Year | Civil Engineering</div>
                            <div className = "backSideTextSmall"></div>
                            <div className = "emailFontLong">uclasoles.cienciasdirector@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Itzhary Tamayo</div>
                    <div className = "setFontSizePosition">Ciencias Director</div>
                </div>

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Trevor} alt="Trevor Gomez" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Trevor Gomez</div>
                            <div className = "majorFontLong">4th Year | Mechanical Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is hanging out at the tailgates freshman year with the SOLES fam.</div>
                            <div className = "emailFontLong">uclasoles.technicalchair@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Trevor Gomez</div>
                    <div className = "setFontSizePosition">Technical Chair</div>
                </div>

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {blank} alt="Benito Garduno" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Benito Garduno</div>
                            <div className = "majorFont">2nd Year | Civil Engineering</div>
                            <div className = "backSideTextSmall"></div>
                            <div className = "emailFont">uclasoles.leadershpe@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Benito Garduno</div>
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
                            <div className = "majorFontLong">4th Year | Mechanical Engineering</div>
                            <div className = "backSideTextSmall">(I've been very little at SOLES, but) My favorite SOLES memory is the free chicken nuggets at the last Winter quarter meeting!</div>
                            <div className = "emailFont">uclasoles.intern@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Juan Banchs</div>
                    <div className = "setFontSizePosition">Intern</div>
                </div>

                
                <div className = "titleFont1">                                
                         <div className = "titleFont2">
                                    Elections for SOLES Executive Board positions occur annually during Spring Quarter. 
                                    All members are encouraged to run for positions!
                        </div>
                        <hr ClassName = "BoardIntroBar" ></hr>
                        <img className = "BoardPageSun" src= {Sun} alt="Yellow Sun" ></img>
                        <br/>
                        <div className = "staffMembersBoard">
                                    CEED Advisors
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
                <Footer/>
            </div>
            
        );
        
    }

}



export default EBoard;