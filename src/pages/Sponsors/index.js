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
                    <img className = "BoardPageSun" src= {Sun} alt="Yellow Sun" ></img>
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
                    <hr ClassName = "BoardIntroBar" ></hr>
                    <img className = "BoardPageSun" src= {Sun} alt="Yellow Sun" ></img>
                    <div className = "staffMembersBoard">
                        Become a Sponsor Today
                    </div>
                </div>

                <div className = "titleFont3">
                    We’d like to extend a special thanks to our corporate sponsors. If you would like to become a sponsor, send an email to our External Vice President at uclasoles.evp@gmail.com!
                </div>
                
                

                
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorGoldImages" src={Big} alt="Gold Level"></img>
                    <div className = "sponsorLevels">Gold Level ($2500+)</div>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorSilverImages" src={Medium} alt="Silver Level"></img>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorBronzeImages" src={Small} alt="Bronze Level"></img>
                    </figure>
                </div>
                

                

                <div className = "titleFont1">  
                    <div className = "titleFont3">
                    Note: Sponsorship is also available for individual events and programs (i.e. National and Regional Conferences, outreach workshops, and other events).  
                    We also greatly appreciate any materials that can be used for giveaways, goody bags, or prizes.  T-shirts, sweatshirts, or hats with company printed
                     logos are very much appreciated as well.  Some companies offer special services such as graphics and printing.  These services may also be donated for
                      the printing of materials throughout the year.  Note these services will also include complementary recognition in all such contributed products.
                     </div>                              
                    <hr ClassName = "BoardIntroBar" ></hr>
                    <img className = "BoardPageSun" src= {Sun} alt="Yellow Sun" ></img>
                    <div className = "staffMembersBoard">
                        Our Current Sponsors
                    </div>
                </div>


                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={Boeing} alt="Boeing Logo"></img>
                        <div className = "setFontSizeName">Boeing</div>
                        <div className = "setFontSizePosition">Gold Level Sponsor</div>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={Chevron} alt="Chevron Logo"></img>
                        <div className = "setFontSizeName">Chevron</div>
                        <div className = "setFontSizePosition">Gold Level Sponsor</div>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={Facebook} alt="Facebook Logo"></img>
                        <div className = "setFontSizeName">Facebook</div>
                        <div className = "setFontSizePosition">Gold Level Sponsor</div>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={Google} alt="Google Logo"></img>
                        <div className = "setFontSizeName">Google</div>
                        <div className = "setFontSizePosition">Gold Level Sponsor</div>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={Lockheed} alt="Lockheed Martin Logo"></img>
                        <div className = "setFontSizeName">Lockheed Martin</div>
                        <div className = "setFontSizePosition">Gold Level Sponsor</div>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={Northrup} alt="Northrop Grumman Logo"></img>
                        <div className = "setFontSizeName">Northoup Grumman</div>
                        <div className = "setFontSizePosition">Gold Level Sponsor</div>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={Accenture} alt="Accenture Logo"></img>
                        <div className = "setFontSizeName">Accenture</div>
                        <div className = "setFontSizePosition">Bronze Level Sponsor</div>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={SCEdison} alt="Southern California Edison Logo"></img>
                        <div className = "setFontSizeName">Southern California Edison</div>
                        <div className = "setFontSizePosition">Bronze Level Sponsor</div>
                    </figure>
                </div>
                <div className = "eBoardPerson">
                    <figure className = "eBoardPerson2">
                    <img className = "SponsorPageImages" src={Twitter} alt="Twitter Logo"></img>
                        <div className = "setFontSizeName">Twitter</div>
                        <div className = "setFontSizePosition">Bronze Level Sponsor</div>
                    </figure>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                </body1>
                </div>  
            </div>
        )
    }

}

export default Sponsors;