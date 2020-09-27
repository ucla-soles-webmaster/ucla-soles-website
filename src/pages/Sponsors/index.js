import React, { Component } from 'react';

import Navigation from '../../components/Navigation';

import Boeing from '../../boardImages/boeing.jpg'
import Chevron from '../../boardImages/chevron.png'
import Facebook from '../../boardImages/facebook.png'
import Google from '../../boardImages/google.jpg'
import Lockheed from '../../boardImages/lockheed-martin.png'
import Northrup from '../../boardImages/northrop-grumman.jpg'
import Accenture from '../../boardImages/accenture.jpg'
import SCEdison from '../../boardImages/socaledison.gif'
import Twitter from '../../boardImages/twitter.jpg'


import Big from '../../boardImages/gold.jpg'
import Medium from '../../boardImages/silver.jpg'
import Small from '../../boardImages/bronze.jpg'

import Sun from '../../boardImages/sun.png'


class Sponsors extends Component {

    // Add constructor here when necessary

    render() {
        return (
            <div>
                <Navigation transparentNav={false} />
            
                {/* Do development all within this div */}
                <div className="navgap">
                <body1 className = "sponsorPage">
                <div className = "titleFont1">
                <div style = {{width: '80%', margin: 'auto'}}>                                
                    <img className = "BoardPageSun" src= {Sun} alt="Yellow Sun" ></img>
                </div>
                    <div className = "staffMembersBoard">
                        We Love Our Sponsors!
                    </div>
                </div>

                <div className = "titleFont3">
                    SOLES|SHPE at UCLA relies on its industry partners and corporate relations to help elevate their efforts in empowering the Latinx engineering community
                    at UCLA. Through generous contributions of monetary donations, technical supplies, and company merch, SOLES can help eliminate thr financial instability
                    for its members and give back to the community that supports it. <br/><br/>
                    
                    In addition to uplifting community outreach efforts, professional and academic development, and recruitment initiatives, SOLES looks for Sponsorship to 
                    expand on its SOLES Scholarship Fund to help those most impacted by the current world circumstances (an initiative recently developed that only utilizes 
                    fundrasing until corporate support is obtained).
                </div>

                <div className = "titleFont1">                                
                    <hr ClassName = "BoardIntroBar" style = {{width: '80%'}}></hr>
                    <div style = {{width: '80%', margin: 'auto'}}>
                        <img className = "BoardPageSun" src= {Sun} alt="Yellow Sun" ></img>
                    </div>
                    <div className = "staffMembersBoard">
                        Become a Sponsor Today
                    </div>
                </div>

                <div className = "titleFont1">
                    <div className = "titleFont3">
                        We’d like to extend a special thanks to our corporate sponsors. If you would like to become a sponsor, send an email to our External Vice President at uclasoles.evp@gmail.com!
                    </div>
                </div>
                
                <div style = {{width: '80%', alignItems: 'center', margin: 'auto'}}>
                <div className = "eBoardPerson3">
                    <div class="flip-card2">
                    <div class="flip-card2-inner">
                        <div class="flip-card2-front">
                            <div className = "sponsorLevels">Gold Level ($2500+)</div>
                            <img className = "SponsorGoldImages" src={Big} alt="Gold Level"></img>
                        </div>
                        <div class="flip-card2-back">
                        <div className = "titleFont5">Benefits: </div>
                        <ul className = "myList">
                            <li className = "titleFont4">Access to student resumes</li>
                            <li className = "titleFont4">Up to $500 contributed toward student scholarships, upon request</li>
                            <li className = "titleFont4">One compnay information session or event for up to 3 representatives quarterly and seating at the end-of-year Senior Banquet</li>
                            <li className = "titleFont4">Industry recognition on the SOLES website, newsletters, and highly-visible SOLES board in Boelter Hall at UCLA</li>
                            <li className = "titleFont4">Publication of available job and internship openings in our weekly emails</li>
                            <li className = "titleFont4">Publication and advertising throughout the school of engineering</li>
                            <li className = "titleFont4">Recognition on our event shirts and logos branded on merchandise</li>
                        </ul> 
                        </div>
                    </div>
                    </div>
                </div>

                <div className = "eBoardPerson3">
                    <div class="flip-card3">
                    <div class="flip-card3-inner">
                        <div class="flip-card3-front">
                        <div className = "sponsorLevels">Silver Level <br/> ($1001 - $2499)</div>
                        <img className = "SponsorSilverImages" src={Medium} alt="Silver Level"></img>
                        
                        </div>
                        <div class="flip-card3-back">
                        <div className = "titleFont5">Benefits: </div>
                        <ul className = "myList">
                            <li className = "titleFont4">Access to student resumes</li>
                            <li className = "titleFont4">Up to $500 contributed toward student scholarships, upon request</li>
                            <li className = "titleFont4">One compnay information session or event for up to 3 representatives</li>
                            <li className = "titleFont4">Industry recognition on the SOLES website, newsletters, and highly-visible SOLES board in Boelter Hall at UCLA</li>
                            <li className = "titleFont4">Publication of available job and internship openings in our weekly emails</li>
                        </ul>  
                        </div>
                    </div>
                    </div>
                </div>

                <div className = "eBoardPerson3">
                    <div class="flip-card4">
                    <div class="flip-card4-inner">
                        <div class="flip-card4-front">
                            <div className = "sponsorLevels">Bronze Level <br/>($1 - $1000)</div>
                            <img className = "SponsorBronzeImages" src={Small} alt="Bronze Level"></img>
                        </div>
                        <div class="flip-card4-back">
                        <div className = "titleFont5">Benefits: </div>
                        <ul className = "myList">
                            <li className = "titleFont4">One compnay information session or event for up to 3 representatives</li>
                            <li className = "titleFont4">Industry recognition on the SOLES website, newsletters, and highly-visible SOLES board in Boelter Hall at UCLA</li>
                            <li className = "titleFont4">Publication of available job and internship openings in our weekly emails</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                

                <div className = "titleFont1">  
                    <div className = "titleFont3">
                    Note: Sponsorship is also available for individual events and programs (i.e. National and Regional Conferences, outreach workshops, and other events).  
                    We also greatly appreciate any materials that can be used for giveaways, goody bags, or prizes.  T-shirts, sweatshirts, or hats with company printed
                     logos are very much appreciated as well.  Some companies offer special services such as graphics and printing.  These services may also be donated for
                      the printing of materials throughout the year.  Note these services will also include complementary recognition in all such contributed products.
                     </div>                              
                    <hr ClassName = "BoardIntroBar" style = {{width: '80%'}}></hr>
                    <div style = {{width: '80%', margin: 'auto'}}>
                        <img className = "BoardPageSun" src= {Sun} alt="Yellow Sun" ></img>
                    </div>
                    <div className = "staffMembersBoard">
                        Our Current Sponsors
                    </div>
                </div>
                </body1>
                <body1 className = "eBoardPage">
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={Boeing} alt="Boeing Logo"></img>
                        <div className = "setFontSizeName">Boeing</div>
                        <div className = "setFontSizeLevel">Gold Level Sponsor</div>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={Chevron} alt="Chevron Logo"></img>
                        <div className = "setFontSizeName">Chevron</div>
                        <div className = "setFontSizeLevel">Gold Level Sponsor</div>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={Facebook} alt="Facebook Logo"></img>
                        <div className = "setFontSizeName">Facebook</div>
                        <div className = "setFontSizeLevel">Gold Level Sponsor</div>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={Google} alt="Google Logo"></img>
                        <div className = "setFontSizeName">Google</div>
                        <div className = "setFontSizeLevel">Gold Level Sponsor</div>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={Lockheed} alt="Lockheed Martin Logo"></img>
                        <div className = "setFontSizeName">Lockheed Martin</div>
                        <div className = "setFontSizeLevel">Gold Level Sponsor</div>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={Northrup} alt="Northrop Grumman Logo"></img>
                        <div className = "setFontSizeName">Northoup Grumman</div>
                        <div className = "setFontSizeLevel">Gold Level Sponsor</div>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={Accenture} alt="Accenture Logo"></img>
                        <div className = "setFontSizeName">Accenture</div>
                        <div className = "setFontSizeLevel">Bronze Level Sponsor</div>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={SCEdison} alt="Southern California Edison Logo"></img>
                        <div className = "setFontSizeName">Southern California Edison</div>
                        <div className = "setFontSizeLevel">Bronze Level Sponsor</div>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={Twitter} alt="Twitter Logo"></img>
                        <div className = "setFontSizeName">Twitter</div>
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
                
            </div>
        )
    }

}

export default Sponsors;