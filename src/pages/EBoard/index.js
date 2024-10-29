///////////////////////////////////////////////////////////////
/* Component / ReactJS Library Imports */

import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import coverPhoto from '../../Photos/EBoard/group24.jpg';

///////////////////////////////////////////////////////////////
/* Individual Officer Photo Imports */

/* President */ import Emanuel from '../../Photos/EBoard/Emanuel24.png'
/* EVP */ import Nicole from '../../Photos/EBoard/Nicole24.png' 
/* IVP */ import Sam from '../../Photos/EBoard/Sam24.png'

/* PDC */ import Oscar from '../../Photos/EBoard/Oscar24.png'
/* Transfer */ import Adrian from '../../Photos/EBoard/Adrian24.png'
/* Media & Merch */ import Sarah from '../../Photos/EBoard/Sarah24.png'

/* Treasurer */ import Andrew from '../../Photos/EBoard/Andrew24.png'
/* Secretary */ import Citlali from '../../Photos/EBoard/Citlali24.png'
/* Activities */ import Erick from '../../Photos/EBoard/Erick24.png'

/* Ciencias */ import Gabe from '../../Photos/EBoard/Gabe24.png'
/* LeaderSHPE Jr */ import Arnie from '../../Photos/EBoard/Arnie24.png'
/* Tech */ import Diana from '../../Photos/EBoard/Diana24.png'

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
                major: "4th Year | Computer Engineering",
                image: Emanuel,
                role: "President",
                memory: "My favorite SOLES memory is the bonfire my first year because its where I first felt welcomed when starting at UCLA",
                email: "     uclasoles.president@gmail.com"
            },
            {
                name: "Samantha Lopez",
                major: "3rd Year | Electrical Engineering",
                image: Sam,
                role: "Internal Vice President",
                memory: "My favorite memory was the beat 'sc tailgate it was so much fun getting to hang out with everyone . Also really loved the mentorshpe familia hangouts last year!",
                email: "          uclasoles.ivp@gmail.com"
            },
            {
                name: "Nicole Nunez-Sainz",
                major: "3rd Year | Computer Science",
                image: Nicole,
                role: "External Vice President",
                memory: "",
                email: "          uclasoles.evp@gmail.com"
            },
            {
                name: "Oscar Orantes",
                major: "4th Year | Electrical Engineering",
                image: Oscar,
                role: "Professional Development Chair",
                memory: "My favorite SOLES memory was my first ever SOLES GM, it was a warm welcome to UCLA. I got to meet many new people and form lifelong relationships, that mean the world to me today. Seeing complete strangers act like family and treat me like family changed me but eating burnt hotdogs at my first bonfire was cool too.",
                email: "              uclasoles.pdc@gmail.com"
            },
            {
                name: "Sarah Soto",
                major: "2nd Year | Civil Engineering",
                image: Sarah,
                role: "Media & Merch Chair",
                memory: "",
                email: "uclasoles.mmc@gmail.com"
            },
            {
                name: "Adrian Garcia",
                major: "2nd Year Transfer | Electrical Engineering",
                image: Adrian,
                role: "Transfer Representative",
                memory: "",
                email: "   uclasoles.trep@gmail.com"
            },
            {
                name: "Andrew Rubio",
                major: "3rd Year | Computer Science & Engineering",
                image: Andrew,
                role: "Treasurer",
                memory: "",
                email: "     uclasoles.treasurer@gmail.com"
            },
            {
                name: "Citlali Rodriguez",
                major: "3rd Year | Civil Engineering",
                image: Citlali,
                role: "Secretary",
                memory: "My favorite SOLES memories has to be our white elephant MentorSHPE event. Seeing everyone's competitive side come out over silly $10 gifts was super fun and got everyone to really bond. I went from a box of fancy chocolates and a cute little mug to a bundle of tape with a happy face on it. The memory of that night brings me joy though, so that bundle of tape is now used as a decoration for my desk.",
                email: "              uclasoles@gmail.com"
            },
            {
                name: "Erick Rosas",
                major: "3rd Year | Computer Science",
                image: Erick,
                role: "Activities Director",
                memory: "Favorite memory is being a soles intern. I got to bond with upper class men.",
                email: "              uclasoles.activities@gmail.com"
            },
            {
                name: "Gabriel Centeno",
                major: "2nd Year | Materials Engineering",
                image: Gabe,
                role: "Ciencias Director",
                memory: "",
                email: "uclasoles.cienciasdirector@gmail.com"
            },
            {
                name: "Arnie Orozco",
                major: "2nd Year | Mechanical Engineering",
                image: Arnie,
                role: "LeaderSHPE Jr Director",
                memory: "",
                email: "uclasoles.leadershpejr@gmail.com"
            },
            {
                name: "Diana Estrada",
                major: "4th Year | Computer Science",
                image: Diana,
                role: "Technical Chair",
                memory: "My favorite SOLES memory was the SHPE conference last year, I enjoyed traveling to a new state with everyone in SOLES.",
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