import React, { Component } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';


///////////////////////////////////////////////////////////////
/* Sponsor Logo Photo Imports */

import Boeing from '../../Photos/SponsorLogos/boeing.jpg'
import Chevron from '../../Photos/SponsorLogos/chevron.png'
import Facebook from '../../Photos/SponsorLogos/facebook.jpeg'
import Google from '../../Photos/SponsorLogos/google.jpg'
import Lockheed from '../../Photos/SponsorLogos/lockheed-martin.png'
import Northrup from '../../Photos/SponsorLogos/northrop-grumman.jpg'
import Accenture from '../../Photos/SponsorLogos/accenture.jpg'
import SCEdison from '../../Photos/SponsorLogos/socaledison.gif'
import Twitter from '../../Photos/SponsorLogos/twitter.jpg'
import Granite from '../../Photos/SponsorLogos/granite.jpeg'
import Qualtrics from '../../Photos/SponsorLogos/qualtrics.jpeg'
import Qualcomm from '../../Photos/SponsorLogos/qualcomm.png'
import Oracle from '../../Photos/SponsorLogos/oracle.png'
import VMware from '../../Photos/SponsorLogos/vmware.png'
import Medtronic from '../../Photos/SponsorLogos/medtronic.jpeg'
import Raytheon from '../../Photos/SponsorLogos/raytheon.jpeg'
import LADWP from '../../Photos/SponsorLogos/ladwp.png'



///////////////////////////////////////////////////////////////
/* Accent Photo Imports */

import gold_bar from '../../Photos/Icons/gold.jpg'
import silver_bar from '../../Photos/Icons/silver.jpg'
import bronze_bar from '../../Photos/Icons/bronze.jpg'
import sun from '../../Photos/Icons/sun.png'




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
                        We’d like to extend a special thanks to our corporate sponsors. If you would like to become a sponsor, send an email to our External Vice President at uclasoles.evp@gmail.com!
                    </div>
                </div>
                    
                    

                {/* Sponsorship Options (Flip Cards) */}
                <div style = {{width: '80%', alignItems: 'center', margin: 'auto'}}>
                    <div className = "eBoardPerson3">
                        
                        {/* Gold Level Option, Flip Card */}
                        <div class="flip-card2" 
                            onMouseEnter={() => this.setState({gold:true})}
                            onMouseLeave={() => this.setState({gold:false})}
                        >
                            <div class="flip-card2-inner">
                                <div class="flip-card2-front">
                                    <div className = {this.state.gold ? "sponsorLevelsNoColor" : "sponsorLevels"}>
                                        Gold Level ($2500+)
                                    </div>
                                    <img className = "SponsorGoldImages" src={gold_bar} alt="Gold Level"></img>
                                </div>
                                <div class="flip-card2-back">
                                    <div className = "titleFont5">
                                        Benefits: 
                                    </div>
                                    <ul className = "myList">
                                        <li className = "titleFont4">Access to student resumes</li>
                                        <li className = "titleFont4">Up to $500 contributed toward student scholarships, upon request</li>
                                        <li className = "titleFont4">One company information session or event for up to 3 representatives quarterly and seating at the end-of-year Senior Banquet</li>
                                        <li className = "titleFont4">Industry recognition on the SOLES website, newsletters, and highly-visible SOLES board in Boelter Hall at UCLA</li>
                                        <li className = "titleFont4">Publication of available job and internship openings in our weekly emails</li>
                                        <li className = "titleFont4">Publication and advertising throughout the school of engineering</li>
                                        <li className = "titleFont4">Recognition on our event shirts and logos branded on merchandise</li>
                                    </ul> 
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Silver Level Option, Flip Card */}
                    <div className = "eBoardPerson3">
                        <div class="flip-card3"
                            onMouseEnter={() => this.setState({silver:true})}
                            onMouseLeave={() => this.setState({silver:false})}
                        >
                            <div class="flip-card3-inner">
                                <div class="flip-card3-front">
                                    <div className = {this.state.silver ? "sponsorLevelsNoColor" : "sponsorLevels"}>
                                        Silver Level 
                                        <br/> 
                                        ($1001 - $2499)
                                    </div>
                                    <img className = "SponsorSilverImages" src={silver_bar} alt="Silver Level"></img>
                                </div>
                                <div class="flip-card3-back">
                                    <div className = "titleFont5">
                                        Benefits: 
                                    </div>
                                    <ul className = "myList">
                                        <li className = "titleFont4">Access to student resumes</li>
                                        <li className = "titleFont4">Up to $500 contributed toward student scholarships, upon request</li>
                                        <li className = "titleFont4">One company information session or event for up to 3 representatives</li>
                                        <li className = "titleFont4">Industry recognition on the SOLES website, newsletters, and highly-visible SOLES board in Boelter Hall at UCLA</li>
                                        <li className = "titleFont4">Publication of available job and internship openings in our weekly emails</li>
                                    </ul>  
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bronze Level Option, Flip Card */}
                    <div className = "eBoardPerson3">
                        <div class="flip-card4"
                            onMouseEnter={() => this.setState({bronze:true})}
                            onMouseLeave={() => this.setState({bronze:false})}
                        >
                            <div class="flip-card4-inner">
                                <div class="flip-card4-front">
                                    <div className = {this.state.bronze ? "sponsorLevelsNoColor" : "sponsorLevels"}>
                                        Bronze Level 
                                        <br/>
                                        ($1 - $1000)
                                    </div>
                                    <img className = "SponsorBronzeImages" src={bronze_bar} alt="Bronze Level"></img>
                                </div>
                                <div class="flip-card4-back">
                                    <div className = "titleFont5">
                                        Benefits: 
                                    </div>
                                    <ul className = "myList">
                                        <li className = "titleFont4">One company information session or event for up to 3 representatives</li>
                                        <li className = "titleFont4">Industry recognition on the SOLES website, newsletters, and highly-visible SOLES board in Boelter Hall at UCLA</li>
                                        <li className = "titleFont4">Publication of available job and internship openings in our weekly emails</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        2021-2022 Sponsors
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

                    {/* Lockheed */}
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "SponsorPageImages" src={Lockheed} alt="Lockheed Martin Logo"></img>
                            <div className = "setFontSizeName">Lockheed Martin</div>
                            <div className = "setFontSizeLevel">Gold Level Sponsor</div>
                        </figure>
                    </div>

                    {/* Qualcomm */}
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "SponsorPageImages" src={Qualcomm} alt="Qualcomm Logo"></img>
                            <div className = "setFontSizeName">Qualcomm</div>
                            <div className = "setFontSizeLevel">Gold Level Sponsor</div>
                        </figure>
                    </div>

                    {/* Granite Construction */}
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "SponsorPageImages" src={Granite} alt="Lockheed Martin Logo"></img>
                            <div className = "setFontSizeName">Granite Construction</div>
                            <div className = "setFontSizeLevel">Gold Level Sponsor</div>
                        </figure>
                    </div>

                    {/* Silver Level Sponsors */}
                    {/* Oracle */}
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "SponsorPageImages" src={Oracle} alt="Oracle Logo"></img>
                            <div className = "setFontSizeName">Oracle</div>
                            <div className = "setFontSizeLevel">Silver Level Sponsor</div>
                        </figure>
                    </div>

                    {/* Facebook */}
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "SponsorPageImages" src={Facebook} alt="Facebook Logo"></img>
                            <div className = "setFontSizeName">Facebook</div>
                            <div className = "setFontSizeLevel">Silver Level Sponsor</div>
                        </figure>
                    </div>

                    {/* Boeing */}
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "SponsorPageImages" src={Boeing} alt="Boeing Logo"></img>
                            <div className = "setFontSizeName">Boeing</div>
                            <div className = "setFontSizeLevel">Silver Level Sponsor</div>
                        </figure>
                    </div>

                    {/* SoCal Edison */}
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "SponsorPageImages" src={SCEdison} alt="SoCal Edison Logo"></img>
                            <div className = "setFontSizeName">SoCal Edison</div>
                            <div className = "setFontSizeLevel">Silver Level Sponsor</div>
                        </figure>
                    </div>

                    {/* Bronze Level Sponsors */}
                    {/* Qualtrics */}
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "SponsorPageImages" src={Qualtrics} alt="Qualtrics Logo"></img>
                            <div className = "setFontSizeName">Qualtrics</div>
                            <div className = "setFontSizeLevel">Bronze Level Sponsor</div>
                        </figure>
                    </div>

                    {/* LADWP NSBE */}
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "SponsorPageImages" src={LADWP} alt="LADWP NSBE Logo"></img>
                            <div className = "setFontSizeName">LADWP NSBE</div>
                            <div className = "setFontSizeLevel">Bronze Level Sponsor</div>
                        </figure>
                    </div>

                    {/* Medtronic */}
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "SponsorPageImages" src={Medtronic} alt="Medtronic Logo"></img>
                            <div className = "setFontSizeName">Medtronic</div>
                            <div className = "setFontSizeLevel">Bronze Level Sponsor</div>
                        </figure>
                    </div>

                    {/* Raytheon */}
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "SponsorPageImages" src={Raytheon} alt="Raytheon Logo"></img>
                            <div className = "setFontSizeName">Raytheon</div>
                            <div className = "setFontSizeLevel">Bronze Level Sponsor</div>
                        </figure>
                    </div>

                    {/* VMware */}
                    <div className = "eBoardPerson">
                        <figure className = "eBoardPerson2">
                        <img className = "SponsorPageImages" src={VMware} alt="VMware Logo"></img>
                            <div className = "setFontSizeName">VMware</div>
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