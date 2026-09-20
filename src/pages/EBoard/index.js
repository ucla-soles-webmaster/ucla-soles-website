///////////////////////////////////////////////////////////////
/* Component / ReactJS Library Imports */

import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import EBoardCoverPhoto from './EBoardCoverPhoto';
import coverPhoto from '../../JudeBoard/group26.png'; 
///////////////////////////////////////////////////////////////
/* Individual Officer Photo Imports */

/* President */ import Judas from '../../JudeBoard/kingJude.JPG'
/* EVP */ import Alexa from '../../JudeBoard/alexa26.jpg'
/* IVP */ import Evelyn from '../../JudeBoard/ev26.JPG'

/* PDC */ import Arnie from '../../JudeBoard/arnie26.jpg'
/* Transfer */ import Adrian from '../../JudeBoard/adrian26.JPG'
/* Media & Merch */ import Isa from '../../JudeBoard/iceman26.JPG'

/* Treasurer */ import Nick from '../../JudeBoard/nick26.jpg'
/* Secretary */ import Gero from '../../JudeBoard/gero26.JPG'
/* Activities */ import Leslie from '../../JudeBoard/les26.JPG'

/* Ciencias */ import Alan from '../../JudeBoard/alan26.jpg'
/* LeaderSHPE Jr */ import Victoria from '../../JudeBoard/vic26.JPG'
/*SHPE+ina's */ import Heidi from '../../JudeBoard/heidi26.JPG'
/*Academic Development Chair*/ import Arlene from '../../JudeBoard/arlene26.JPG'

/* Racing Lead */ import Daniel from '../../JudeBoard/dani26.jpg'
/* AI Lead */ import Aaron from '../../JudeBoard/aaron26.JPG'
/* Web Dev Lead */ import Javier from '../../JudeBoard/jav26.JPG'

/* CEED Staff */
import Sherry from '../../Photos/EBoard/CEED/sherry.jpg'
import Anabella from '../../Photos/EBoard/CEED/anabella.jpg'
import Cathy from '../../Photos/EBoard/CEED/cathy.jpg'



///////////////////////////////////////////////////////////////
/* CSS Imports */

import './EBoard.css';



///////////////////////////////////////////////////////////////
/* Accent Photo Imports */

import rightsun from '../../Photos/Icons/rightsun.png'
import leftsun from '../../Photos/Icons/leftsun.png';
import sun from '../../Photos/Icons/sun.png'


class EBoard extends Component {

    // Add constructor here when necessary
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const boardMembers = [
            {
                name: "Judas Lopez",
                major: "4th Year | Computer Science & Engineering",
                image: Judas,
                role: "President",
                memory: "",
                email: "     uclasoles.president@gmail.com"
            },
            {
                name: "Alexa Medina Velazquez",
                major: "3rd Year | Civil & Environmental Engineering",
                image: Alexa,
                role: "Internal Vice President",
                memory: "",
                email: "          uclasoles.ivp@gmail.com"
            },
            {
                name: "Evelyn Garza",
                major: "3rd Year | Civil Engineering",
                image: Evelyn,
                role: "External Vice President",
                memory: "",
                email: "          uclasoles.evp@gmail.com"
            },
            {
                name: "Arnie Orozco Jr",
                major: "4th Year | Mechanical Engineering",
                image: Arnie,
                role: "Professional Development Chair",
                memory: "",
                email: "              uclasoles.pdc@gmail.com"
            },
            {
                name: "Isaias Ramirez",
                major: "2nd Year | Mechanical Engineering",
                image: Isa,
                role: "Media & Merch Chair",
                memory: "",
                email: "uclasoles.mmc@gmail.com"
            },
            {
                name: "Adrian Luna",
                major: "2nd Year Transfer | Mechanical Engineering",
                image: Adrian,
                role: "Transfer Representative",
                memory: "",
                email: "   uclasoles.trep@gmail.com"
            },
            {
                name: "Nicholas Equihua",
                major: "3rd Year | Electrical Engineering",
                image: Nick,
                role: "Treasurer",
                memory: "",
                email: "     uclasoles.treasurer@gmail.com"
            },
            {
                name: "Geronimo Avila Martinez",
                major: "3rd Year | Mechanical Engineering",
                image: Gero,
                role: "Secretary",
                memory: "",
                email: "              uclasoles@gmail.com"
            },
            {
                name: "Leslie Sosa",
                major: "4th Year | Civil & Environmental Engineering",
                image: Leslie,
                role: "Activities Director",
                memory: "",
                email: "              uclasoles.activities@gmail.com"
            },
            {
                name: "Alan Alfaro",
                major: "3rd Year | Mechanical Engineering",
                image: Alan,
                role: "Ciencias Director",
                memory: "",
                email: "uclasoles.cienciasdirector@gmail.com"
            },
            {
                name: "Victoria Lopez",
                major: "3rd Year | Civil Engineering",
                image: Victoria,
                role: "LeaderSHPE Jr Director",
                memory: "",
                email: "uclasoles.leadershpejr@gmail.com"
            },
            {
                name: "Heidi Benitez",
                major: "2nd Year | Mechanical Engineering",
                image: Heidi,
                role: "SHPE+ina's Director",
                memory: "",
                email: "uclasoles.technicalchair@gmail.com"
            }, 
            {
                name: "Arlene Cazares",
                major: "4th Year | Mechanical Engineering",
                image: Arlene,
                role: "Academic Development Chair",
                memory: "",
                email: "uclasoles.academicchair@gmail.com"
            }, 
            {
                name: "Daniel Murillo",
                major: "2nd Year Transfer | Mechanical Engineering",
                image: Daniel,
                role: "Racing Lead",
                memory: "",
                email: "uclasoles.technicalchair@gmail.com"
            }, 
            {
                name: "Aaron Cervantes",
                major: "2nd Year | Computer Science & Engineering",
                image: Aaron,
                role: "AI Lead",
                memory: "",
                email: "uclasoles.aichair@gmail.com"
            }, 
            {
                name: "Javier Castaneda",
                major: "4th Year | Computer Science & Linguistics",
                image: Javier,
                role: "Web Dev Lead",
                memory: "",
                email: "uclasoles.webmaster@gmail.com"
            }, 
        ];

        const listMembers = boardMembers.map((d) => 
            <div className = "eBoardPerson">
            <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img className = "BoardPageImages" src= {d.image} alt={d.name} ></img>
                </div>
                <div class="flip-card-back">
                    {/* Name */} <div className = "backSideText">{d.name}</div>
                    {/* Year | Major */} <div className = "majorFontLong">{d.major}</div>
                    <div className = "backSideTextSmall">{d.memory}</div>
                    <div className = "emailFont">{d.email}</div>    
                </div>
            </div>
            </div>
            <div className = "setFontSizeName">{d.name}</div>
            <div className = "setFontSizePosition">{d.role}</div>
        </div>
        )

        return (
            <div>
                <Navigation transparentNav={false} />
                <EBoardCoverPhoto imageSource={coverPhoto} title="Executive Board"></EBoardCoverPhoto>
                

                {/* Page Title Header */}
                <hr className="introBar" /> 
                    <div className="introbox" style={{textAlign: 'center'}}>
                        <div className="introMessage">
                                The Leaders of SOLES
                                <div className='introSubMessage'>
                                    These are the amazing individuals that help SOLES operate day to day! 
                                    Interested in working with or learning more about our
                                    Board members? Our Board will be more than happy! 
                                    Please feel free to reach out to them via their email.
                                </div>
                        </div>
                        <img id="rightsunLanding" src={rightsun} alt="Right SOLES Sun" />
                        <img id="leftsunLanding" src={leftsun} alt="Left SOLES Sun" />
                    </div>
                <hr className="introBar" />    
                <br/>
            


                {/* Photo Grid */}
                <body1 className = "eBoardPage">   
                    <div>
                        {listMembers}
                    </div>

                    {/* Elections Disclaimer and CEED Title */}  
                    <div className = "titleFont1"> 
                        <br/>
                        <div className="titleFont2">
                            Elections for SOLES Executive Board positions occur annually during Spring Quarter. 
                            All members are encouraged to run for positions!
                        </div>                               
                        <hr className = "BoardIntroBar" ></hr>
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