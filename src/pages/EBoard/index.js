///////////////////////////////////////////////////////////////
/* Component / ReactJS Library Imports */

import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import coverPhoto from '../../Photos/Covers/EBoard22_23.JPG';

///////////////////////////////////////////////////////////////
/* Individual Officer Photo Imports */

/* President */ import Emanuel from '../../NewBoard/Emanuel.png'
/* EVP */ import Kami from '../../NewBoard/Marisa.png' 
/* IVP */ import Itzhary from '../../NewBoard/Bri.png'

/* PDC */ import Mat from '../../NewBoard/Mauricio.png'
/* Academic */ import Raya from '../../NewBoard/Erick.png'
/* Transfer */ import Ben from '../../NewBoard/Victor.png'


/* Treasurer */ import Sebastian from '../../NewBoard/Sebastian.png'
/* Treasurer */ import Marisa from '../../NewBoard/Marisa.png'
/* Secretary */ import Nicole from '../../NewBoard/Nicole.png'
/* Activities */ import Andrew from '../../NewBoard/Andrew.png'

/* Transfer */ import Lali from '../../NewBoard/Lali.png'
/* Ciencias */ import Bri from '../../NewBoard/Bri.png'
/* LeaderSHPE Jr */ import Sam from '../../NewBoard/Sam.png'
/* Tech */ import Sarah from '../../NewBoard/Oscar.png'
/* Tech */ import Oscar from '../../NewBoard/Oscar.png'

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
                name: "Emanuel Zavalza",
                major: "3rd Year | Computer Engineering",
                image: Emanuel,
                role: "President",
                memory: "My favorite SOLES memory is the bonfire my first year because its where I first felt welcomed when starting at UCLA",
                memory: "My favorite SOLES memory is the bonfire my first year because its where I first felt welcomed when starting at UCLA",
                email: "     uclasoles.president@gmail.com"
            },
            {
                name: "Brianna Ceja",
                major: "3rd Year | Civil Engineering",
                image: Bri,
                role: "Internal Vice President",
                memory: "My favorite SOLES memory is SOLES Olympics!",
                email: "          uclasoles.evp@gmail.com"
            },
            {
                name: "Marisa Duran",
                major: "4rd Year | Computer Science",
                image: Marisa,
                role: "External Vice President",
                memory: "My favorite SOLES memory was the Xmas party because I enjoyed spending time with cool people and it made it feel like a home away from home.",
                email: "          uclasoles.ivp@gmail.com"
            },
            {
                name: "Mauricio Deguchi",
                major: "4th Year | Mechanical Engineering",
                image: Mat,
                role: "Professional Development Chair",
                memory: "Going to the SOLES retreat and getting closer with all the new and continuing board members.",
                email: "              uclasoles.pdc@gmail.com"
            },
            {
                name: "Erick Rosas",
                major: "2nd Year | Computer Science ",
                image: Raya,
                role: "Academic Chair",
                memory: "Favorite memory is being a soles intern. I got to bond with upper class men.",
                email: "uclasoles.academicchair@gmail.com"
            },
            {
                name: "Victor M. Lopez Cortes",
                major: "2st Year Transfer | Electrical Engineering",
                image: Ben,
                role: "Transfer Representative",
                memory: "My fave memory would be when Andrew and I had to bust a mission to the store during the Big Bear Retreat at like 10pm to get super glue to fix the foosball table.",
                email: "   uclasoles.transferrep@gmail.com"
            },
            {
                name: "Sebastian Cervantes",
                major: "3rd Year | Electrical Engineering",
                image: Sebastian,
                role: "Treasurer",
                memory: "Playing pool and beating Kami bc I thought I was gonna lose. But the whole big bear retreat was a highlight.",
                email: "     uclasoles.treasurer@gmail.com"
            },
            {
                name: "Nicole Nunez-Sainz",
                major: "2nd Year | Computer Science",
                image: Nicole,
                role: "Secretary",
                memory: "",
                email: "              uclasoles@gmail.com"
            },
            {
                name: "Andrew Rojas",
                major: "4nd Year | Mechanical Engineering",
                image: Andrew,
                role: "Activities Director",
                memory: "My favorite SOLES memory is going up to Big Bear for the board retreat and kayaking",
                email: "              uclasoles@gmail.com"
            },
            {
                name: "Citlali Rodriguez",
                major: "2nd Year | Civil Engineering",
                image: Lali,
                role: "Ciencias Director",
                memory: "My favorite SOLES memories has to be our white elephant MentorSHPE event. Seeing everyone's competitive side come out over silly $10 gifts was super fun and got everyone to really bond. I went from a box of fancy chocolates and a cute little mug to a bundle of tape with a happy face on it. The memory of that night brings me joy though, so that bundle of tape is now used as a decoration for my desk. ",
                email: "uclasoles.cienciasdirector@gmail.com"
            },
            {
                name: "Samantha Lopez",
                major: "2nd Year | Civil Engineering",
                image: Sam,
                role: "LeaderSHPE Jr Director",
                memory: "My favorite memory was the beat 'sc tailgate it was so much fun getting to hang out with everyone . Also really loved the mentorshpe familia hangouts last year!",
                email: "uclasoles.leadershpejr@gmail.com"
            },
            {
                name: "Oscar Orantes",
                major: "3rd Year | Eletrical Engineering",
                image: Oscar,
                role: "Technical Chair",
                memory: "My favorite SOLES memory was my first ever SOLES GM, it was a warm welcome to UCLA. I got to meet many new people and form lifelong relationships, that mean the world to me today. Seeing complete strangers act like family and treat me like family changed me but eating burnt hotdogs at my first bonfire was cool too.",
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