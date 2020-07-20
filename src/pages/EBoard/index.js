import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../eBoard.css';
import Andy from '../../boardImages/apple.jpg'
import Trevor from '../../boardImages/banana.jpg'
import Jasmine from '../../boardImages/dragonfruit.jpg'

import Mayra from '../../boardImages/kiwi.jpg'
import Robert from '../../boardImages/lemon.jpg'
import Michael from '../../boardImages/orange.jpg'

import Aidan from '../../boardImages/peach.jpg'
import Mat from '../../boardImages/avocado.jpg'
import Eric from '../../boardImages/pear.jpg'

import Fabrezio from '../../boardImages/pomegranate.jpg'
import Josh from '../../boardImages/strawberry.jpg'
import Kelly from '../../boardImages/tomato.jpg'

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
                
                <div className="row"> <br></br>
                
                <div className="column">
                        <div class="flipCard"> 
                            <div className="card" onclick="this.classList.toggle('flipped')"> 
                                <div className="side front">
                                    <img className = "setBorder" src={Andy} alt="Andy Muraltalla"></img>
                                </div> 
                                <div className="side back">
                                    <div className = "h2">Andy Muraltalla</div>
                                    <div className = "h3">4th Year Aerospace Engineering</div>
                                    <div className = "h3">My favorite SOLES memory is...</div>
                                    <div className = "h3">uclasoles.president@gmail.com</div>    
                                </div> 
                            </div> 
                        </div> 
                        <div className = "h1">Andy Muraltalla</div>
                        <div className = "setFontSizePosition">President</div>
                    </div>

                    <div className="column" >
                    <div class="flipCard"> 
                            <div className="card" onclick="this.classList.toggle('flipped')"> 
                                <div className="side front">
                                    <img className = "setBorder" src={Trevor} alt="Trevor Gomez"></img>
                                </div> 
                                <div className="side back">
                                    <div className = "h2">Trevor Gomez</div>
                                    <div className = "h3">3rd Year Mechanical Engineering</div>
                                    <div className = "h3">My favorite SOLES memory is...</div>
                                    <div className = "h3">uclasoles.evp@gmail.com</div> 
                                </div> 
                            </div> 
                        </div> 
                        <div className = "h1">Trevor Gomez</div>
                        <div className = "setFontSizePosition">External Vice President</div>
                    </div>
                    
                    <div className="column">
                        <div class="flipCard"> 
                            <div className="card" onclick="this.classList.toggle('flipped')"> 
                                <div className="side front">
                                    <img className = "setBorder" src={Jasmine} alt="Jasmine Raya"></img>
                                </div> 
                                <div className="side back">
                                    <div className = "h2">Jasmine Raya</div>
                                    <div className = "h3">3rd Year * * Engineering</div>
                                    <div className = "h3">My favorite SOLES memory is...</div>
                                    <div className = "h3">uclasoles.ivp@gmail.com</div>
                                </div> 
                            </div> 
                        </div> 
                        <div className = "h1">Jasmine Raya</div>
                        <div className = "setFontSizePosition">Internal Vice President</div>
                    </div>
                </div>
                
                <div className="row"> <br></br>
                
                <div className="column">
                        <div class="flipCard"> 
                            <div className="card" onclick="this.classList.toggle('flipped')"> 
                                <div className="side front">
                                    <img className = "setBorder" src={Michael} alt="Michael Munguia"></img>
                                </div> 
                                <div className="side back">
                                    <div className = "h2">Michael Munguia</div>
                                    <div className = "h3">*th Year * * Engineering</div>
                                    <div className = "h3">My favorite SOLES memory is...</div>
                                    <div className = "h3">uclasoles.transferrep@gmail.com</div>    
                                </div> 
                            </div> 
                        </div> 
                        <div className = "h1">Michael Munguia</div>
                        <div className = "setFontSizePosition">Transfer Representative</div>
                    </div>

                    <div className="column" >
                    <div class="flipCard"> 
                            <div className="card" onclick="this.classList.toggle('flipped')"> 
                                <div className="side front">
                                    <img className = "setBorder" src={Mayra} alt="Mayra Lara"></img>
                                </div> 
                                <div className="side back">
                                    <div className = "h2">Mayra Lara</div>
                                    <div className = "h3">2nd Year Civil Engineering</div>
                                    <div className = "h3">My favorite SOLES memory is...</div>
                                    <div className = "h3">uclasoles.treasurer@gmail.com</div> 
                                </div> 
                            </div> 
                        </div> 
                        <div className = "h1">Mayra Lara</div>
                        <div className = "setFontSizePosition">Treasurer</div>
                    </div>
                    
                    <div className="column">
                        <div class="flipCard"> 
                            <div className="card" onclick="this.classList.toggle('flipped')"> 
                                <div className="side front">
                                    <img className = "setBorder" src={Robert} alt="Robert Valencia"></img>
                                </div> 
                                <div className="side back">
                                    <div className = "h2">Robert Valencia</div>
                                    <div className = "h3">3rd Year Mechanical Engineering</div>
                                    <div className = "h3">My favorite SOLES memory is...</div>
                                    <div className = "h3">uclasoles@gmail.com</div>
                                </div> 
                            </div> 
                        </div> 
                        <div className = "h1">Robert Valencia</div>
                        <div className = "setFontSizePosition">Secretary</div>
                    </div>
                </div>
                

                <div className="row"> <br></br>
                
                <div className="column">
                        <div class="flipCard"> 
                            <div className="card" onclick="this.classList.toggle('flipped')"> 
                                <div className="side front">
                                    <img className = "setBorder" src={Aidan} alt="Aidan Hasegawa"></img>
                                </div> 
                                <div className="side back">
                                    <div className = "h2">Aidan Hasegawa</div>
                                    <div className = "h3">*th Year * * Engineering</div>
                                    <div className = "h3">My favorite SOLES memory is...</div>
                                    <div className = "h3">uclasoles.tutoring@gmail.com</div>    
                                </div> 
                            </div> 
                        </div> 
                        <div className = "h1">Aidan Hasegawa</div>
                        <div className = "setFontSizePosition">Tutoring Director</div>
                    </div>

                    <div className="column" >
                    <div class="flipCard"> 
                            <div className="card" onclick="this.classList.toggle('flipped')"> 
                                <div className="side front">
                                    <img className = "setBorder" src={Mat} alt="Matthew Ruiz"></img>
                                </div> 
                                <div className="side back">
                                    <div className = "h2">Matthew Ruiz</div>
                                    <div className = "h3">2nd Year Computer Science</div>
                                    <div className = "h3">My favorite SOLES memory is...</div>
                                    <div className = "h3">uclasoles.academicchair@gmail.com</div> 
                                </div> 
                            </div> 
                        </div> 
                        <div className = "h1">Matthew Ruiz</div>
                        <div className = "setFontSizePosition">Academic Chair</div>
                    </div>
                    
                    <div className="column">
                        <div class="flipCard"> 
                            <div className="card" onclick="this.classList.toggle('flipped')"> 
                                <div className="side front">
                                    <img className = "setBorder" src={Eric} alt="Eric Saavedra Garcia"></img>
                                </div> 
                                <div className="side back">
                                    <div className = "h2">Eric Saavedra Garcia</div>
                                    <div className = "h3">2rd Year * * Engineering</div>
                                    <div className = "h3">My favorite SOLES memory is...</div>
                                    <div className = "h3">uclasoles.activities@gmail.com</div>
                                </div> 
                            </div> 
                        </div> 
                        <div className = "h1">Eric Saavedra Garcia</div>
                        <div className = "setFontSizePosition">Activities Director</div>
                    </div>
                </div>

                <div className="row"> <br></br>
                
                <div className="column">
                        <div class="flipCard"> 
                            <div className="card" onclick="this.classList.toggle('flipped')"> 
                                <div className="side front">
                                    <img className = "setBorder" src={Fabrezio} alt="Fabrezio Castaneda"></img>
                                </div> 
                                <div className="side back">
                                    <div className = "h2">Fabrezio Castaneda</div>
                                    <div className = "h3">2nd Year Computer Engineering*</div>
                                    <div className = "h3">My favorite SOLES memory is...</div>
                                    <div className = "h3">uclasoles.cienciasdirector@gmail.com</div>    
                                </div> 
                            </div> 
                        </div> 
                        <div className = "h1">Fabrezio Castaneda</div>
                        <div className = "setFontSizePosition">Ciencias Director</div>
                    </div>

                    <div className="column" >
                    <div class="flipCard"> 
                            <div className="card" onclick="this.classList.toggle('flipped')"> 
                                <div className="side front">
                                    <img className = "setBorder" src={Josh} alt="Joshua Diaz"></img>
                                </div> 
                                <div className="side back">
                                    <div className = "h2">Joshua Diaz</div>
                                    <div className = "h3">4th Year Aerospace Engineering</div>
                                    <div className = "h3">My favorite SOLES memory is...</div>
                                    <div className = "h3">uclasoles.technicalchair@gmail.com</div> 
                                </div> 
                            </div> 
                        </div> 
                        <div className = "h1">Joshua Diaz</div>
                        <div className = "setFontSizePosition">Technical Chair</div>
                    </div>
                    
                    <div className="column">
                        <div class="flipCard"> 
                            <div className="card" onclick="this.classList.toggle('flipped')"> 
                                <div className="side front">
                                    <img className = "setBorder" src={Kelly} alt="Kelly Espino"></img>
                                </div> 
                                <div className="side back">
                                    <div className = "h2">Kelly Espino</div>
                                    <div className = "h3">2nd Year Civil Engineering</div>
                                    <div className = "h3">My favorite SOLES memory is...</div>
                                    <div className = "h3">uclasoles.leadershpejr@gmail.com</div>
                                </div> 
                            </div> 
                        </div> 
                        <div className = "h1">Kelly Espino</div>
                        <div className = "setFontSizePosition">LeaderSHPE Jr. Director</div>
                    </div>
                </div>
                
        
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        );
    }

}



export default EBoard;