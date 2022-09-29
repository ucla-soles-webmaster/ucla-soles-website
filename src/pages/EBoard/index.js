///////////////////////////////////////////////////////////////
/* Component / ReactJS Library Imports */

import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import coverPhoto from '../../Photos/Covers/EBoard.jpg';



///////////////////////////////////////////////////////////////
/* Individual Officer Photo Imports */
import blank from '../../Photos/EBoard/blank.jpg'

/* President */ import Kelly from '../../Photos/EBoard/Kelly.jpg'
/* EVP */ import Kami from '../../Photos/EBoard/Kami.jpg' 
/* IVP */ import Itzhary from '../../Photos/EBoard/Itzhary.jpg'

/* PDC */ import Mat from '../../Photos/EBoard/Mat.jpg'
/* Academic */ 
/* Transfer */ 

/* Treasurer */ import Marisa from '../../Photos/EBoard/Marisa.jpg'
/* Secretary */ 
/* Activities */ 

/* Ciencias */
/* LeaderSHPE Jr */ 
/* Tech */ 

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
                name: "Kelly Espino",
                major: "4th Year | Civil Engineering",
                image: Kelly,
                role: "President",
                memory: "My favorite SOLES memory is going to the LeaderSHPE Jr. Retreat. Seeing all of our hard work turn into such a fruitful experience for both the volunteers and attendees was absolutely incredible. Being able to make an impact on these young lives and give them a reason to smile, is the reason I wanted to continue it.",
                email: "     uclasoles.president@gmail.com"
            },
            {
                name: "Kami Kunes",
                major: "3rd Year | Electrical Engineering",
                image: Kami,
                role: "External Vice President",
                memory: "My favorite SOLES memory was when we had our first in-person meeting and I got to hand out pizza.",
                email: "          uclasoles.evp@gmail.com"
            },
            {
                name: "Itzhary Tamayo",
                major: "4th Year | Civil Engineering",
                image: Itzhary,
                role: "Internal Vice President",
                memory: "My favorite SOLES memory was the Xmas party because I enjoyed spending time with cool people and it made it feel like a home away from home.",
                email: "          uclasoles.ivp@gmail.com"
            },
            {
                name: "Matthew Ruiz",
                major: "4th Year | Computer Science",
                image: Mat,
                role: "Professional Development Chair",
                memory: "My favorite SOLES memory is making the last minute decision freshman year to go to the SHPE conference and spending the weekend getting to know all the SOLES people.",
                email: "              uclasoles.pdc@gmail.com"
            },
            {
                name: "Jasmine Raya",
                major: "5th Year | Mechanical Engineering",
                image: blank,
                role: "Academic Chair",
                memory: "My favorite SOLES memory is...",
                email: "uclasoles.academicchair@gmail.com"
            },
            {
                name: "Angel",
                major: "2nd Year Transfer | Mechanical Engineering",
                image: blank,
                role: "Transfer Representative",
                memory: "My favorite SOLES memory is...",
                email: "   uclasoles.transferrep@gmail.com"
            },
            {
                name: "Marisa Duran",
                major: "3rd Year | Computer Science",
                image: Marisa,
                role: "Treasurer",
                memory: "My favorite SOLES memory is finally being able to meet everyone in person at the first general meeting after a year of zoom!",
                email: "     uclasoles.treasurer@gmail.com"
            },
            {
                name: "Emanuel Zavalza",
                major: "2nd Year | Computer Science",
                image: blank,
                role: "Secretary",
                memory: "My favorite SOLES memory is...",
                email: "              uclasoles@gmail.com"
            },
            {
                name: "Andrew Rojas",
                major: "2nd Year | Mechanical Engineering",
                image: blank,
                role: "Activities Director",
                memory: "My favorite SOLES memory is...",
                email: "              uclasoles@gmail.com"
            },
            {
                name: "Brianna Ceja",
                major: "2nd Year | Civil Engineering",
                image: blank,
                role: "Ciencias Director",
                memory: "My favorite SOLES memory is...",
                email: "uclasoles.cienciasdirector@gmail.com"
            },
            {
                name: "Sarah Mauricio",
                major: "4th Year | Computer Science",
                image: blank,
                role: "Technical Chair",
                memory: "My favorite SOLES memory is...",
                email: "uclasoles.technicalchair@gmail.com"
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
                <Navigation transparentNav={true} />
                <PagePhoto imageSource={coverPhoto} title={"Executive Board"}></PagePhoto>
                

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