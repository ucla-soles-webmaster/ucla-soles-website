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
import Mat from '../../boardImages/avocado.jpg'
import Eric from '../../boardImages/pear.jpg'

import Fabrezio from '../../boardImages/pomegranate.jpg'
import Josh from '../../boardImages/strawberry.jpg'
import Kelly from '../../boardImages/tomato.jpg'

import Sherry from '../../boardImages/peach.jpg'
import Anabella from '../../boardImages/orange.jpg'
import Cathy from '../../boardImages/kiwi.jpg'

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
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Andy} alt="Andy Muraltalla"></img>
                        <div className = "setFontSizeName">Andy Muraltalla</div>
                        <div className = "setFontSizePosition">President</div>
                    </figure>
                </div>

                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Trevor} alt="Trevor Gomez"></img>
                        <div className = "setFontSizeName">Trevor Gomez</div>
                        <div className = "setFontSizePosition">External Vice President</div>
                    </figure>
                </div>

                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Jasmine} alt="Jasmine Raya"></img>
                        <div className = "setFontSizeName">Jasmine Raya</div>
                        <div className = "setFontSizePosition">Internal Vice President</div>
                    </figure>
                </div>

                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Michael} alt="Michael Munguia"></img>
                        <div className = "setFontSizeName">Michael Munguia</div>
                        <div className = "setFontSizePosition">Transfer Representative</div>
                    </figure>
                </div>

                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Mayra} alt="Mayra Lara"></img>
                        <div className = "setFontSizeName">Mayra Lara</div>
                        <div className = "setFontSizePosition">Treasurer</div>
                    </figure>
                </div>

                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Robert} alt="Robert Valencia"></img>
                        <div className = "setFontSizeName">Robert Valencia</div>
                        <div className = "setFontSizePosition">Secretary</div>
                    </figure>
                </div>

                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Aidan} alt="Aidan Hasegawa"></img>
                        <div className = "setFontSizeName">Aidan Hasegawa</div>
                        <div className = "setFontSizePosition">Tutoring Director</div>
                    </figure>
                </div>

                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Mat} alt="Matthew Ruiz"></img>
                        <div className = "setFontSizeName">Matthew Ruiz</div>
                        <div className = "setFontSizePosition">Academic Chair</div>
                    </figure>
                </div>

                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Eric} alt="Eric Saavedra Garcia"></img>
                        <div className = "setFontSizeName">Eric Saavedra Garcia</div>
                        <div className = "setFontSizePosition">Activities Director</div>
                    </figure>
                </div>

                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Fabrezio} alt="Fabrezio Castaneda"></img>
                        <div className = "setFontSizeName">Fabrezio Castaneda</div>
                        <div className = "setFontSizePosition">Ciencias Director</div>
                    </figure>
                </div>

                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Josh} alt="Joshua Diaz"></img>
                        <div className = "setFontSizeName">Joshua Diaz</div>
                        <div className = "setFontSizePosition">Technical Chair</div>
                    </figure>
                </div>

                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Kelly} alt="Kelly Espino"></img>
                        <div className = "setFontSizeName">Kelly Espino</div>
                        <div className = "setFontSizePosition">LeaderSHPE Jr. Director</div>
                    </figure>
                </div>

                

                <div className = "eBoardPerson">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BoardPageImages" src= {Andy} alt="Andy Muraltalla" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Andy Muraltalla</div>
                            <div className = "backSideTextSmall">4th Year Aerospace Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is...</div>
                            <div className = "backSideTextSmall">uclasoles.president@gmail.com</div>    
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
                            <div className = "backSideTextSmall">3rd Year Mechanical Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is...</div>
                            <div className = "backSideTextSmall">uclasoles.evp@gmail.com</div>     
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
                            <div className = "backSideTextSmall">3rd Year * * Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is...</div>
                            <div className = "backSideTextSmall">uclasoles.ivp@gmail.com</div>    
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
                            <div className = "backSideTextSmall">*th Year * * Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is...</div>
                            <div className = "backSideTextSmall">uclasoles.transferrep@gmail.com</div>    
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
                            <div className = "backSideTextSmall">2nd Year Civil Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is...</div>
                            <div className = "backSideTextSmall">uclasoles.treasurer@gmail.com</div>    
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
                            <div className = "backSideTextSmall">3rd Year Mechanical Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is...</div>
                            <div className = "backSideTextSmall">uclasoles@gmail.com</div>    
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
                            <div className = "backSideTextSmall">*rd Year * * Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is...</div>
                            <div className = "backSideTextSmall">uclasoles.tutoring@gmail.com</div>    
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
                            <div className = "backSideTextSmall">2nd Year Computer Science</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is...</div>
                            <div className = "backSideTextSmall">uclasoles.academicchair@gmail.com</div>    
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
                            <div className = "backSideTextSmall">2nd Year * * Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is...</div>
                            <div className = "backSideTextSmall">uclasoles.activities@gmail.com</div>    
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
                            <img className = "BoardPageImages" src= {Fabrezio} alt="Fabrezio Castaneda" ></img>
                        </div>
                        <div class="flip-card-back">
                            <div className = "backSideText">Fabrezio Castaneda</div>
                            <div className = "backSideTextSmall">2nd Year Computer Engineering*</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is...</div>
                            <div className = "backSideTextSmall">uclasoles.cienciasdirector@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Fabrezio Castaneda</div>
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
                            <div className = "backSideTextSmall">4th Year Aerospace Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is...</div>
                            <div className = "backSideTextSmall">uclasoles.technicalchair@gmail.com</div>    
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
                            <div className = "backSideTextSmall">2nd Year Civil Engineering</div>
                            <div className = "backSideTextSmall">My favorite SOLES memory is...</div>
                            <div className = "backSideTextSmall">uclasoles.leadershpe@gmail.com</div>    
                        </div>
                    </div>
                    </div>
                    <div className = "setFontSizeName">Kelly Espino</div>
                    <div className = "setFontSizePosition">LeaderSHPE Jr. Director</div>
                </div>

                

                <div className = "titleFont">                                
                                If you are interested in joining one of our board 
                                member’s committee or learning more about their position, please do not 
                                hesitate to contact them, via GroupMe, email, social media, etc.
                </div>

                

                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Sherry} alt="Sherry Hormozi"></img>
                        <div className = "setFontSizeName">Sherry Hormozi</div>
                        <div className = "setFontSizePosition">Undergraduate Counselor</div>
                    </figure>
                </div>

                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Cathy} alt="Catherine Douglas"></img>
                        <div className = "setFontSizeName">Catherine Douglas</div>
                        <div className = "setFontSizePosition">Associate Director, Precollege Programs</div>
                    </figure>
                </div>

                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "BoardPageImages" src={Anabella} alt="Anabella Gonzalez"></img>
                        <div className = "setFontSizeName">Anabella Gonzalez</div>
                        <div className = "setFontSizePosition">Office Manager</div>
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