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

/* Treasurer */ import Marisa from '../../NewBoard/Sebastian.png'
/* Secretary */ import Emanuell from '../../NewBoard/Nicole.png'
/* Activities */ import Andrew from '../../NewBoard/Andrew.png'

/* Ciencias */ import Bri from '../../NewBoard/Lali.png'
/* LeaderSHPE Jr */ import Jennifer from '../../NewBoard/Sam.png'
/* Tech */ import Sarah from '../../NewBoard/Oscar.png'
/* Tech */ import Oscar from '../../Photos/EBoard/Oscar22_23.png'

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
            {//Done
                name: "Emanuel Zavalza",
                major: "3rd Year | Computer Engineering",
                image: Emanuel,
                role: "President",
                memory: "My favorite SOLES memory is the bonfire my first year because its where I first felt welcomed when starting at UCLA",
                email: "     uclasoles.president@gmail.com"
            },
            {
                name: "Kami Kunes",
                major: "3rd Year | Electrical Engineering",
                image: Kami,
                role: "External Vice President",
                memory: "Nothing trumps the time when Andrew, Marisa, and I splashed the seniors while kayaking at the transition retreat. Though they didn't look like they enjoyed getting soaked, we sure did.",
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
                memory: "My favorite SOLES memory is going to SHPE nationals in Arizona my freshman year!",
                email: "              uclasoles.pdc@gmail.com"
            },
            {
                name: "Jasmine Raya",
                major: "5th Year | Mechanical Engineering",
                image: Raya,
                role: "Academic Chair",
                memory: "",
                email: "uclasoles.academicchair@gmail.com"
            },
            {
                name: "Ben Delgado",
                major: "1st Year Transfer | Electrical Engineering",
                image: Ben,
                role: "Transfer Representative",
                memory: "My favorite SOLES memory was the Summer Bonfire. It was awesome to meet my engineering peers in a non-classroom setting and form friendships that are gonna last beyond our time at UCLA!! It was also really funny when we were all struggling trying to cook our hot dogs on a stick over the bonfire",
                email: "   uclasoles.transferrep@gmail.com"
            },
            {
                name: "Marisa Duran",
                major: "3rd Year | Computer Science",
                image: Marisa,
                role: "Treasurer",
                memory: "My favorite SOLES memory is going to SOLES prom and spending time with everyone and eating tacos :)",
                email: "     uclasoles.treasurer@gmail.com"
            },
            {
                name: "Emanuel Zavalza",
                major: "2nd Year | Computer Science",
                image: Emanuell,
                role: "Secretary",
                memory: "My favorite SOLES memory is the bonfire my first year because its where I first felt welcomed when starting at UCLA",
                email: "              uclasoles@gmail.com"
            },
            {
                name: "Andrew Rojas",
                major: "3nd Year | Mechanical Engineering",
                image: Andrew,
                role: "Activities Director",
                memory: "My favorite SOLES memory is going up to Big Bear for the board retreat and kayaking",
                email: "              uclasoles@gmail.com"
            },
            {
                name: "Brianna Ceja",
                major: "2nd Year | Civil Engineering",
                image: Bri,
                role: "Ciencias Director",
                memory: "My favorite SOLES memory is SOLES Olympics!",
                email: "uclasoles.cienciasdirector@gmail.com"
            },
            {
                name: "Jennifer Juarez",
                major: "2nd Year | Civil Engineering",
                image: Jennifer,
                role: "LeaderSHPE Jr Director",
                memory: "My favorite SOLES memory is freshmen weekend. I got to meet the incoming freshmen as they shadowed our day. We went ice blocking, had a beach day, played volleyball...so much fun!",
                email: "uclasoles.leadershpejr@gmail.com"
            },
            {
                name: "Sarah Mauricio",
                major: "4th Year | Computer Science",
                image: Sarah,
                role: "Technical Chair",
                memory: "My favorite SOLES memory was the beach bonfire we had at the beginning of last year. It was great to see everyone in person after being online for so long!",
                email: "uclasoles.technicalchair@gmail.com"
            },
            {
                name: "Oscar Orantes",
                major: "2nd Year | Eletrical Engineering",
                image: Oscar,
                role: "Technical Chair",
                memory: "",
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