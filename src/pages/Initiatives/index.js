///////////////////////////////////////////////////////////////
/* Component / ReactJS Library Imports */

import React, { Component } from 'react';
import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import Footer from '../../components/Footer';

import coverPhoto from '../../Photos/Covers/Initiatives.JPG';
import rightsun from '../../Photos/Icons/rightsun.png'
import leftsun from '../../Photos/Icons/leftsun.png';
import sun from '../../Photos/InitiativesPage/suny.png';

import jrOp from '../../Photos/InitiativesPage/jrOp.png';
import jrCol from '../../Photos/InitiativesPage/jrCol.png';
import cienciasOp from '../../Photos/InitiativesPage/CienciasOp.png';
import cienciasCol from '../../Photos/InitiativesPage/CienciasCol.png';

import eitOp from '../../Photos/InitiativesPage/eitOp.png';
import eitCol from '../../Photos/InitiativesPage/eitCol.png';

import studynightOp from '../../Photos/InitiativesPage/studynightOp.png';
import studynightCol from '../../Photos/InitiativesPage/studynightCol.png';

import ExpEduOp from '../../Photos/InitiativesPage/ExpEduOp.png';
import ExpEduCol from '../../Photos/InitiativesPage/ExpEduCol.png';

import natConOp from '../../Photos/InitiativesPage/NatConOp.png';
import natConCol from '../../Photos/InitiativesPage/NatConCol.png';

import IndWorkOp from '../../Photos/InitiativesPage/IndWorkOp.png';
import IndWorkCol from '../../Photos/InitiativesPage/IndWorkCol.png';

import mentorSHPEOp from '../../Photos/InitiativesPage/mentorSHPEOp.png';
import mentorSHPECol from '../../Photos/InitiativesPage/mentorSHPECol.png';
import socialOp from '../../Photos/InitiativesPage/social1Op.png';
import socialCol from '../../Photos/InitiativesPage/social1Col.png';

import './initiativeStyle.css'


class Initiatives extends Component {
    constructor() {
        super();
        this.state = { hovered: false };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    renderInitiativeItem = (imgCol, imgOp, title, description, alt) => (
        <div className="initiative-item" key={title}>
            <img 
                className="initiative-img" 
                src={imgCol} 
                onMouseOver={e => (e.currentTarget.src = imgOp)}
                onMouseLeave={e => (e.currentTarget.src = imgCol)}
                alt={alt} 
            />
            <p className="initiative-title"><b>{title}</b></p>
            <p className="initiative-description">{description}</p>
        </div>
    );

    renderSection = (title, items) => (
        <div className="initiative-section" key={title}>
            <img src={sun} className="minisun" alt="mini sun" />
            <h1 className="section-title">{title}</h1>
            <div className="initiative-grid">
                {items.map(item => this.renderInitiativeItem(...item))}
            </div>
        </div>
    );

    render() {
        const sections = [
            ['Outreach', [
                [eitCol, eitOp, 'Engineers in Training (EIT)', 'Each year EIT attracts 250 high schoolers for a day of engagement in STEM. Our goal is to inspire teens from underrepresented groups via engineering workshops, student panels, and UCLA campus tours.', 'Engineers in Training'],
                [jrCol, jrOp, 'SHPE Jr Leadership Retreat', 'With 20+ SOLES volunteers, this free day-long retreat aims at providing networking, career building, and educational opportunities to more than 60 SHPE Jrs in Region II.', 'SHPE Jr Leadership Retreat'],
                [cienciasCol, cienciasOp, 'Noche de Ciencias', 'Noche de Ciencias brings together 75+ K-12 students to help identify potential career paths in STEM. This year\'s theme is Space Exploration, and will be experienced in a Dia and Noche de Ciencias.', 'Dia de Ciencias']
            ]],
            ['Academic Development', [
                [studynightCol, studynightOp, 'Study Nights on the Hill', 'Through the offering of a weekly study space, the SOLES community has united to form a close-knit academic fortress. Our weekly themed study nights come with snacks that no college student can reject.', 'Study Nights on the Hill'],
                [ExpEduCol, ExpEduOp, 'Expand Your Education', 'At SOLES we recognize and adhere to our members\' goals. This new initiative is all about providing post-graduate resources to those of our members interested in higher education rather than industry.', 'Expand Your Education']
            ]],
            ['Professional Development', [
                [natConCol, natConOp, 'SHPE National Convention', 'Through fundraising and corporate sponsorship, SOLES was able to send 28 members to the SHPE National Convention this year for a weekend full of leadership and professional development.', 'SHPE National Convention'],
                [IndWorkCol, IndWorkOp, 'Industry Workshops', 'Through cooperation with our partnered sponsors, SOLES is able to host on-campus events such as Interview Prep, Resume Workshops, and Corporate Etiquette alongside tenured industry professionals.', 'Industry Workshops']
            ]],
            ['Chapter Development', [
                [mentorSHPECol, mentorSHPEOp, 'MentorSHPE', 'At SOLES we strive to uplift each other academically, professionally, and socially. Come join one of our MentorSHPE familias and compete in this year\'s MentorSHPE ChampionSHPE with friends.', 'MentorSHPE'],
                [socialCol, socialOp, 'Socials', 'Socials are an integral component of SOLES given our amount of growth and success in recent years. Tailgates, bonfires, intramural sports, Super Smash Bro tournies, "SWOLES", SOLES Chopped... you name it!', 'Socials']
            ]]
        ];

        return (
            <div>
                <Navigation transparentNav={false} />
                <PagePhoto imageSource={coverPhoto} title={"Our Initiatives"} />
                <br/><br/><br/>
                <hr className="introBar" /> 
                <div className="introbox" style={{textAlign: 'center'}}>
                    <p className="initIntro" style={{textAlign: 'center', marginRight: '18.5%', marginLeft: '18.5%', fontSize:'1.1vw',fontWeight:'10'}}>
                        <p style={{fontSize: '2.3vw', color: 'gray', marginTop: '-2.2%', marginBottom: '1%', fontWeight:'300'}}>
                            What We Pride In
                        </p>
                        Our initiatives and events form the heart of SOLES. They help 
                        bring together our members, create opportunities for both K-12
                        and college students, and make memories and experiences our
                        members will never forget.
                    </p>
                    <img id="rightsunLanding" src={rightsun} alt="Right SOLES Sun" />
                    <img id="leftsunLanding" src={leftsun} alt="Left SOLES Sun" />
                </div>
                <hr className="introBar" />   
                <br/><br/>
                {sections.map(([title, items]) => this.renderSection(title, items))}
                <Footer />
            </div>
        );
    }
}

export default Initiatives;
