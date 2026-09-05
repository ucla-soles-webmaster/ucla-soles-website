///////////////////////////////////////////////////////////////
/* Component / ReactJS Library Imports */

import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import EBoardCoverPhoto from './EBoardCoverPhoto';
import coverPhoto from '../../Photos/board_pictures/complete_board.jpg';

///////////////////////////////////////////////////////////////
/* Individual Officer Photo Imports */

/* President */ import Samantha from '../../Photos/board_pictures/samantha_lopez.jpg'
/* EVP */ import Erick from '../../Photos/board_pictures/erick_rosas.jpg' 
/* IVP */ import Andrew from '../../Photos/board_pictures/andrew_rubio.jpg'

/* PDC */ import Mark from '../../Photos/board_pictures/mark_diaz.jpg'
/* Transfer */ import Kevin from '../../Photos/board_pictures/kevin_alvarez.jpg'
/* Media & Merch */ import Joaquin from '../../Photos/board_pictures/joaquin_chun.jpg'

/* Treasurer */ import Lorenzo from '../../Photos/board_pictures/lorenzo_cova.jpg'
/* Secretary */ import Victoria from '../../Photos/board_pictures/victoria_lopez.jpg'
/* SHPETina Director */ import Alexa from '../../Photos/board_pictures/alexa_medina.JPG'
/* Activities */ import Jeremy from '../../Photos/board_pictures/jeremy_dimas.jpg'

/* Ciencias */ import Judas from '../../Photos/board_pictures/judas_lopez.jpg'
/* LeaderSHPE Jr */ import Evelyn from '../../Photos/board_pictures/evelyn_garza.jpg'
/* Tech */ import Christian from '../../Photos/board_pictures/christian_giron.jpg'

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
                name: "Samantha Lopez",
                major: "4th Year | Electrical Engineering",
                image: Samantha,
                role: "President",
                memory: "",
                email: "     uclasoles.president@gmail.com"
            },
            {
                name: "Andrew Rubio",
                major: "4th Year | Computer Science & Engineering",
                image: Andrew,
                role: "Internal Vice President",
                memory: "",
                email: "          uclasoles.ivp@gmail.com"
            },
            {
                name: "Erick Rosas Gonzalez",
                major: "4th Year | Computer Science",
                image: Erick,
                role: "External Vice President",
                memory: "",
                email: "          uclasoles.evp@gmail.com"
            },
            {
                name: "Mark Diaz",
                major: "4th Year | Computer Engineering",
                image: Mark,
                role: "Professional Development Chair",
                memory: "",
                email: "              uclasoles.pdc@gmail.com"
            },
            {
                name: "Joaquin Chun",
                major: "3rd Year | Computer Science",
                image: Joaquin,
                role: "Media & Merch Chair",
                memory: "",
                email: "uclasoles.mmc@gmail.com"
            },
            {
                name: "Kevin Alvarez",
                major: "2nd Year Transfer | Computer Engineering",
                image: Kevin,
                role: "Transfer Representative",
                memory: "",
                email: "   uclasoles.trep@gmail.com"
            },
            {
                name: "Lorenzo Cova",
                major: "3rd Year | Mechanical Engineering",
                image: Lorenzo,
                role: "Treasurer",
                memory: "",
                email: "     uclasoles.treasurer@gmail.com"
            },
            {
                name: "Victoria Lopez",
                major: "",
                image: Victoria,
                role: "Secretary",
                memory: "",
                email: "              uclasoles@gmail.com"
            },
            {
                name: "Jeremy Dimas",
                major: "4th Year | Computer Science & Engineering",
                image: Jeremy,
                role: "Activities Director",
                memory: "",
                email: "              uclasoles.activities@gmail.com"
            },
            {
                name: "Judas Lopez",
                major: "3rd Year | Computer Science & Engineering",
                image: Judas,
                role: "Ciencias Director",
                memory: "",
                email: "uclasoles.cienciasdirector@gmail.com"
            },
            {
                name: "Evelyn Garza",
                major: "2nd Year | Civil Engineering",
                image: Evelyn,
                role: "LeaderSHPE Jr Director",
                memory: "",
                email: "uclasoles.leadershpejr@gmail.com"
            },
            {
                name: "Alexa Medina",
                major: "",
                image: Alexa,
                role: "SHPETina Director",
                memory: "",
                email: ""
            },
            {
                name: "Christian Giron-Michel",
                major: "3rd Year | Electrical Engineering",
                image: Christian,
                role: "Technical Chair",
                memory: "",
                email: "uclasoles.technicalchair@gmail.com"
            }
            
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