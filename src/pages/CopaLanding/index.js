import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CopaNavigation from '../../components/CopaNavigation';
import CopaPagePhoto from '../../components/CopaShared/CopaPagePhoto';
import Footer from '../../components/Footer';
import coverPhoto from '../../Photos/CopaDelSol/copa_del_sol_cover.jpeg';
import aboutIcon from '../../Photos/CopaDelSol/landing_icons/about_icon.jpg';
import tournamentsIcon from '../../Photos/CopaDelSol/landing_icons/tournaments_icon.jpeg';
import guidelinesIcon from '../../Photos/CopaDelSol/landing_icons/guidelines_icon.JPG';
import sponsorsIcon from '../../Photos/CopaDelSol/landing_icons/sponsors_icon.png';
import contactIcon from '../../Photos/CopaDelSol/landing_icons/contact-us_icon.jpg';
import photosIcon from '../../Photos/CopaDelSol/landing_icons/photo_gallery_icon.JPG';
import '../../components/CopaShared/copaDelSolStyle.css';
import './copaLanding.css';
import * as ROUTES from '../../constants/routes';

class CopaLanding extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <CopaNavigation />
                <CopaPagePhoto imageSource={coverPhoto} title="Copa del Sol 2025" />
                
                <div className="copa-landing-container">
                    <div className="copa-landing-intro">
                        <h2>SHPE Region 2 Annual Soccer Tournament</h2>
                        <p>Fostering camaraderie and strengthening collaboration between SHPE chapters through soccer</p>
                    </div>

                    <div className="copa-cards-grid">
                        <Link to={ROUTES.COPA_ABOUT} className="copa-card">
                            <div className="copa-card-icon">
                                <img src={aboutIcon} alt="About" />
                            </div>
                            <h3>About</h3>
                            <h4>Learn Our Story</h4>
                            <p>Discover the history, mission, and vision behind Copa del Sol since the first tournament in 2024.</p>
                        </Link>

                        <Link to={ROUTES.COPA_TOURNAMENTS} className="copa-card">
                            <div className="copa-card-icon">
                                <img src={tournamentsIcon} alt="Tournaments" />
                            </div>
                            <h3>Tournaments</h3>
                            <h4>View Results & History</h4>
                            <p>View the results from April 2025's tournament, past champions, and tournament history. Registration for future events will open closer to the next tournament date.</p>
                        </Link>

                        <Link to={ROUTES.COPA_GUIDELINES} className="copa-card">
                            <div className="copa-card-icon">
                                <img src={guidelinesIcon} alt="Guidelines" />
                            </div>
                            <h3>Guidelines</h3>
                            <h4>Rules & Information</h4>
                            <p>Review game rules, tournament guidelines, FAQs, and learn how your chapter can host a tournament.</p>
                        </Link>

                        <Link to={ROUTES.COPA_SPONSORS} className="copa-card">
                            <div className="copa-card-icon">
                                <img src={sponsorsIcon} alt="Sponsors" />
                            </div>
                            <h3>Sponsors</h3>
                            <h4>Support Our Mission</h4>
                            <p>Meet our past sponsors and learn how you can support Copa del Sol.</p>
                        </Link>

                        <Link to={ROUTES.COPA_CONTACT} className="copa-card">
                            <div className="copa-card-icon">
                                <img src={contactIcon} alt="Contact" />
                            </div>
                            <h3>Contact Us</h3>
                            <h4>Get in Touch</h4>
                            <p>Have questions? Reach out through our contact form or find direct email contacts for tournament organizers.</p>
                        </Link>

                        <Link to={ROUTES.COPA_TOURNAMENTS} className="copa-card copa-card-highlight">
                            <div className="copa-card-icon">
                                <img src={photosIcon} alt="Photos" />
                            </div>
                            <h3>Photo Gallery</h3>
                            <h4>A Look at Past Tournaments</h4>
                            <p>Browse our photo gallery, view past tournament winners, and see highlights from previous years at Copa del Sol.</p>
                        </Link>
                    </div>

                    <div className="copa-stats-section">
                        <div className="copa-stat">
                            <h3>2025</h3>
                            <p>Latest Tournament</p>
                        </div>
                        <div className="copa-stat">
                            <h3>2nd</h3>
                            <p>Completed Event</p>
                        </div>
                        <div className="copa-stat">
                            <h3>TBD</h3>
                            <p>Next Tournament</p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default CopaLanding;