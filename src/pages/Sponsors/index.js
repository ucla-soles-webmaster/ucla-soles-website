import React, { Component } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';


///////////////////////////////////////////////////////////////
/* Sponsor Logo Photo Imports */

//import Boeing from '../../Photos/SponsorLogos/boeing.jpg'
//import Facebook from '../../Photos/SponsorLogos/facebook.jpeg'
import Lockheed from '../../Photos/SponsorLogos/lockheed-martin.png'
import Northrup from '../../Photos/SponsorLogos/northrop-grumman.jpg'
import SCEdison from '../../Photos/SponsorLogos/socaledison.gif'
//import Granite from '../../Photos/SponsorLogos/granite.jpeg'
//import Qualtrics from '../../Photos/SponsorLogos/qualtrics.jpeg'
//import Qualcomm from '../../Photos/SponsorLogos/qualcomm.png'
//import VMware from '../../Photos/SponsorLogos/vmware.png'
//import Medtronic from '../../Photos/SponsorLogos/medtronic.jpeg'
//import Raytheon from '../../Photos/SponsorLogos/raytheon.jpeg'
//import LADWP from '../../Photos/SponsorLogos/ladwp.png'
import Cruise from '../../Photos/SponsorLogos/cruiseLogo.png'
import Illumina from '../../Photos/SponsorLogos/illuminaLogo.png'
import sponsorshipP from '../../Photos/SponsorLogos/sponsorshippacketsoles24-25.pdf'

//import Chevron from '../../Photos/SponsorLogos/chevron.png'
//import Twitter from '../../Photos/SponsorLogos/twitter.jpg'
//import Accenture from '../../Photos/SponsorLogos/accenture.jpg'
//import Google from '../../Photos/SponsorLogos/google.jpg'
/*import Oracle from '../../Photos/SponsorLogos/oracle.png'*/


///////////////////////////////////////////////////////////////
/* Accent Photo Imports */

import gold_bar from '../../Photos/Icons/gold.jpg'
import silver_bar from '../../Photos/Icons/silver.jpg'
import bronze_bar from '../../Photos/Icons/bronze.jpg'
import sun from '../../Photos/Icons/sun.png'

import '../../../src/pages/Sponsors/sponserStyle.css';


class Sponsors extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          gold: false,
          silver: false,
          bronze: false
        }
    }
    
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <Navigation transparentNav={false}/>
            
                {/* Page Header */}
                <div className="navgap">
                    <body1 className = "sponsorPage">
                    <div className = "titleFont1">
                    <div style = {{width: '80%', margin: 'auto'}}>                                
                        <img className = "BoardPageSun" src= {sun} alt="Yellow Sun"></img>
                    </div>
                    <div className = "staffMembersBoard">
                        We Love Our Sponsors!
                    </div>
                </div>

                {/* Why we need Sponsors */}
                <div className = "titleFont3Sponsor">
                    SOLES|SHPE at UCLA relies on its industry partners and corporate relations to help elevate their efforts in empowering the Latinx engineering community
                    at UCLA. Through generous contributions of monetary donations, technical supplies, and company merch, SOLES can help eliminate thr financial instability
                    for its members and give back to the community that supports it. <br/><br/>
                    
                    In addition to uplifting community outreach efforts, professional and academic development, and recruitment initiatives, SOLES looks for Sponsorship to 
                    expand on its SOLES Scholarship Fund to help those most impacted by the current world circumstances (an initiative recently developed that only utilizes 
                    fundrasing until corporate support is obtained). <br/><br/>

                    See a list of our current sponsors at the bottom.
                </div>

                {/* Becoming a Sponsor */}
                <div className = "titleFont1">                                
                    <hr ClassName = "BoardIntroBar" style = {{width: '80%'}}></hr>
                    <div style = {{width: '80%', margin: 'auto'}}>
                        <img className = "BoardPageSun" src= {sun} alt="Yellow Sun" ></img>
                    </div>
                    <div className = "staffMembersBoard">
                        Become a Sponsor Today
                    </div>
                </div>
                <div className = "titleFont1">
                    <div className = "titleFont3Sponsor">
                        <p>We’d like to extend a special thanks to our corporate sponsors. Take a look at our <a href={sponsorshipP} target="_blank">SOLES Sponsorship Packet</a> to learn more! <br/> <b>If you would like to become a sponsor, send an email to our External Vice President at uclasoles.evp@gmail.com!</b></p>
                    </div>
                    <a href={sponsorshipP} className="btn btn-primary btn-lg active" style={{textDecoration: 'none', padding: '8px', borderRadius: '8px', backgroundColor: '#717171', color: 'white', fontFamily: 'Poppins', fontSize: '1.5vw', border: '0px', cursor: 'pointer', display: 'inline-block', marginLeft: '4vw'}} rel="noopener noreferrer" target="_blank">
                        FY24-25 SOLES Sponsorship Packet
                    </a>
                </div>
                    


                
                {/* Sponsorship Disclaimer */}
                <div className = "titleFont1">  
                    <div className = "titleFont3Sponsor">
                    Note: Sponsorship is also available for individual events and programs (i.e. National and Regional Conferences, outreach workshops, and other events).  
                    We also greatly appreciate any materials that can be used for giveaways, goody bags, or prizes.  T-shirts, sweatshirts, or hats with company printed
                     logos are very much appreciated as well.  Some companies offer special services such as graphics and printing.  These services may also be donated for
                      the printing of materials throughout the year.  Note these services will also include complementary recognition in all such contributed products.
                     </div>                              
                    <hr ClassName = "BoardIntroBar" style = {{width: '80%'}}></hr>
                    <div style = {{width: '80%', margin: 'auto'}}>
                        <img className = "BoardPageSun" src= {sun} alt="Yellow Sun" ></img>
                    </div>
                    <div className = "staffMembersBoard">
                        2022-2023 Sponsors
                    </div>
                </div>
                </body1>



                {/* Sponsors Grid */}
                <body1 className = "eBoardPage">

                    {/* Gold Level Sponsors */}
                    {/* Northrup */}
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "SponsorPageImages" src={Northrup} alt="Northrop Grumman Logo"></img>
                            <div className = "setFontSizeName">Northoup Grumman</div>
                            <div className = "setFontSizeLevel">Gold Level Sponsor</div>
                        </figure>
                    </div>

                    {/* Silver Level Sponsors */}
                    {/*Illumina */}
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "SponsorPageImages" src={Illumina} alt="Illumina Logo"></img>
                            <div className = "setFontSizeName">Illumina</div>
                            <div className = "setFontSizeLevel">Silver Level Sponsor</div>
                        </figure>
                    </div>

                    {/* Bronze Level Sponsors */}

                    {/* Lockheed */}
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "SponsorPageImages" src={Lockheed} alt="Lockheed Martin Logo"></img>
                            <div className = "setFontSizeName">Lockheed Martin</div>
                            <div className = "setFontSizeLevel">Bronze Level Sponsor</div>
                        </figure>
                    </div>

                    {/* SoCal Edison */}
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "SponsorPageImages" src={SCEdison} alt="SoCal Edison Logo"></img>
                            <div className = "setFontSizeName">SoCal Edison</div>
                            <div className = "setFontSizeLevel">Bronze Level Sponsor</div>
                        </figure>
                    </div>

                    {/* Cruise*/}
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "SponsorPageImages" src={Cruise} alt="Crusie Logo"></img>
                            <div className = "setFontSizeName">Cruise</div>
                            <div className = "setFontSizeLevel">Bronze Level Sponsor</div>
                        </figure>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                
                </body1>
                </div>  
                <br/>
                <br/>
                <br/>
                <br/>
                <Footer/>
                
            </div>
        )
    }

}

export default Sponsors;


/*
                //Sponsorship Options (Flip Cards) 
                <div className="sponsorCards" style={{marginLeft: '18.5%'}}>

                    
                    <div className="card">
                    <div className = "sponsorLevels">
                            Bronze Level 
                            <br/> 
                            ($1500)
                        </div>
                        <img className ="SponsorBronzeImages" src={bronze_bar} alt="Bronze Level" ></img>
                    </div>

                    
                    <div className="card">
                        <div className = "sponsorLevels">
                            Silver Level 
                            <br/> 
                            ($2500)
                        </div>
                        <img className = "SponsorSilverImages" src={silver_bar} alt="Silver Level" ></img>
                    </div>
                    
                    
                    <div className="card">
                        <div className = "sponsorLevels">
                            Gold Level 
                            <br/> 
                            ($3500+)
                        </div>
                        <img className = "SponsorGoldImages" src={gold_bar} alt="Gold Level" ></img>
                    </div>

                    <h1>Individual suns are available for $300 each</h1>
                </div>
*/