import React, { Component } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';


///////////////////////////////////////////////////////////////
/* Sponsor Logo Photo Imports */


import PPG from '../../Photos/SponsorLogos/ppg.png'
import Visa from '../../Photos/SponsorLogos/visa.png'
import CDMSmith from '../../Photos/SponsorLogos/cdm_smith.png'
import Apple from '../../Photos/SponsorLogos/apple.png'
import CoStar from '../../Photos/SponsorLogos/costar_group.png'
import CapitalGroup from '../../Photos/SponsorLogos/capital_group.jpg'
import SCE from '../../Photos/SponsorLogos/so_cal_edison.png'
import Boeing from '../../Photos/SponsorLogos/boeing.png'
import Amazon from '../../Photos/SponsorLogos/amazon.png'
import FinconsGroup from '../../Photos/SponsorLogos/fincons_group.png'
import Medtronic from '../../Photos/SponsorLogos/medtronic.png'
import Google from '../../Photos/SponsorLogos/google.png'
import HDR from '../../Photos/SponsorLogos/hdr.png'
import MathWorks from '../../Photos/SponsorLogos/mathworks.png'
import SpaceX from '../../Photos/SponsorLogos/space_x.png'
import sponsorshipP from '../../Photos/SponsorLogos/soles_sponsorship_packet_2025-2026.pdf'




///////////////////////////////////////////////////////////////
/* Accent Photo Imports */

// import gold_bar from '../../Photos/Icons/gold.jpg'
// import silver_bar from '../../Photos/Icons/silver.jpg'
// import bronze_bar from '../../Photos/Icons/bronze.jpg'
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
                    at UCLA. Through generous contributions of monetary donations, technical supplies, and company merch, SOLES can help eliminate financial instability
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
                        <p>We’d like to extend a special thanks to our corporate sponsors. Take a look at our <a href={sponsorshipP} target="_blank" rel="noopener noreferrer">SOLES Sponsorship Packet</a> to learn more! <br/> <b>If you would like to become a sponsor, send an email to our External Vice President at uclasoles.evp@gmail.com!</b></p>
                    </div>
                    <a href={sponsorshipP} className="btn btn-primary btn-lg active" style={{textDecoration: 'none', padding: '8px', borderRadius: '8px', backgroundColor: '#717171', color: 'white', fontFamily: 'Poppins', fontSize: '1.5vw', border: '0px', cursor: 'pointer', display: 'inline-block', marginLeft: '4vw'}} rel="noopener noreferrer" target="_blank">
                        FY25-26 SOLES Sponsorship Packet
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
                </div>
                    


                
                {/* Current Sponsors */}
                <div className = "titleFont1">
                    <hr ClassName = "BoardIntroBar" style = {{width: '80%'}}></hr>
                    <div style = {{width: '80%', margin: 'auto'}}>
                        <img className = "BoardPageSun" src= {sun} alt="Yellow Sun" ></img>
                    </div>
                    <div className = "staffMembersBoard">
                        Our Sponsors
                    </div>
                </div>

                {/* Gold Tier */}
                <div className="sponsor-tier-container">
                    <div className="sponsor-tier-header">
                        <h2 className="sponsor-tier-title">Gold Sponsors</h2>
                    </div>
                    <div className="sponsor-grid gold-grid">
                        <a href="https://www.ppg.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={PPG} alt="PPG Industries" className="sponsor-logo" />
                        </a>
                        <a href="https://www.sce.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={SCE} alt="Southern California Edison" className="sponsor-logo" />
                        </a>
                        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={Amazon} alt="Amazon" className="sponsor-logo" />
                        </a>
                        <a href="https://www.capitalgroup.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={CapitalGroup} alt="Capital Group" className="sponsor-logo" />
                        </a>
                    </div>
                </div>

                {/* Silver Tier */}
                <div className="sponsor-tier-container">
                    <div className="sponsor-tier-header">
                        <h2 className="sponsor-tier-title">Silver Sponsors</h2>
                    </div>
                    <div className="sponsor-grid silver-grid">
                        <a href="https://www.boeing.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={Boeing} alt="Boeing" className="sponsor-logo" />
                        </a>
                        <a href="https://www.mathworks.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={MathWorks} alt="MathWorks" className="sponsor-logo mathworks-logo" />
                        </a>
                    </div>
                </div>

                {/* Bronze Tier */}
                <div className="sponsor-tier-container">
                    <div className="sponsor-tier-header">
                        <h2 className="sponsor-tier-title">Bronze Sponsors</h2>
                    </div>
                    <div className="sponsor-grid bronze-grid">
                        <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={Visa} alt="Visa" className="sponsor-logo" />
                        </a>
                        <a href="https://www.cdmsmith.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={CDMSmith} alt="CDM Smith" className="sponsor-logo" />
                        </a>
                        <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={Apple} alt="Apple" className="sponsor-logo" />
                        </a>
                        <a href="https://www.costargroup.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={CoStar} alt="CoStar Group" className="sponsor-logo" />
                        </a>
                        <a href="https://www.finconsgroup.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={FinconsGroup} alt="Fincons Group" className="sponsor-logo" />
                        </a>
                        <a href="https://www.medtronic.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={Medtronic} alt="Medtronic" className="sponsor-logo" />
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={Google} alt="Google" className="sponsor-logo" />
                        </a>
                        <a href="https://www.hdrinc.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={HDR} alt="HDR" className="sponsor-logo" />
                        </a>
                        <a href="https://www.spacex.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={SpaceX} alt="SpaceX" className="sponsor-logo" />
                        </a>
                    </div>
                </div>



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