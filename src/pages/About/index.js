///////////////////////////////////////////////////////////////
/* Component / ReactJS Library Imports */

import React, { Component } from 'react';
import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import coverPhoto from '../../Photos/Covers/About.jpg';
import Footer from '../../components/Footer';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';


///////////////////////////////////////////////////////////////
/* CSS Imports */

import 'react-vertical-timeline-component/style.min.css';
import './About.css'




class About extends Component {
    
    // Add constructor here when necessary
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div style={{fontFamily: 'Poppins'}}>
                <Navigation transparentNav={true} />
                <PagePhoto imageSource={coverPhoto} title={"About Us"}></PagePhoto>

                {/* Mission Statement and Vision */}
                <div class="MissionVision">

                    {/* Mission Statement */}
                    <div className="mvBlock">
                            MISSION STATEMENT
                            <p className="missionVisionDescription">
                            SOLES changes lives by empowering the Hispanic community to realize its fullest potential 
                            and to impact the world through STEM awareness, access, support, and development.
                            Learn more about <a href="https://shpe.org/about-shpe/" rel="noopener noreferrer" target="_blank">SHPE's mission</a>.
                            </p>
                            <a href="https://drive.google.com/file/d/0B9NZBo_zxsY2VFJHbnlrNmJ5Nm8/view?resourcekey=0-gUsAiQ5bKBeFpwRcxbnSqA" className="btn btn-primary btn-lg active" style={{textDecoration: 'none', padding: '8px', borderRadius: '8px', backgroundColor: '#717171', color: 'white', fontFamily: 'Poppins', fontSize: '1.5vw', border: '0px', cursor: 'pointer', display: 'inline-block', marginLeft: '4vw'}} rel="noopener noreferrer" target="_blank">
                                View Bylaws of SOLES
                            </a>
                    </div>
                    {/* Vision */}
                    <div className="mvBlock">
                        VISION
                        <p className="missionVisionDescription">
                        SOLE's vision is a world where Hispanics are highly valued and influential as the leading
                        innovators, scientists, mathematicians and engineers. 
                        </p>
                    </div>
                    
                </div>

                <div style={{backgroundColor: '#f3f3f3'}}>

                    <div className="historyTitle" >
                       HISTORY
                    </div>
                    <br/>
        
                    <VerticalTimeline layout='1-column-left'>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="1992"
                            iconStyle={{ background: 'black', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title" style={{color: '#001d3a'}}>UCLA Tri-Org Founded</h3>
                            <p style={{color: '#898c8c'}}>
                                Comprising of the Society of Latino Engineers, the National Society of Black 
                                Engineers and the American Indian Science and Engineering Society, the UCLA 
                                Tri-Org was formed in 1992 to increase the representation of minority peoples in STEM fields.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="1983"
                            iconStyle={{ background: 'lightblue', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">CEED Founded</h3>
                            <p style={{color: '#898c8c'}}>
                                In 1983 The Center for Excellence in Engineering and Diversity was established at UCLA to bolster
                                the representation of underrepresented minorities in engineering at UCLA.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="1978"
                            iconStyle={{ background: 'rgba(254, 254, 84, 1)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">SOLES Founded</h3>
                            <p style={{color: '#898c8c'}}>
                                The Society of Latino Engineers was established in 1978 as a chapter of SHPE at UCLA with the 
                                intent of increasing Hispanic representation amongst STEM majors at the university.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="1974"
                            iconStyle={{ background: '#fd662f', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">SHPE Founded</h3>
                            <p style={{color: '#898c8c'}}>
                                The Society of Hispanic Professional Engineers was founded in the Los Angeles area in 1974. Their 
                                objective is to form a national organization of professional Engineers to serve as role models in 
                                the Hispanic community.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                            //icon={<StarIcon />}
                        />
                    </VerticalTimeline>
                    <br/><br/>
                </div>


                {/* Awards Section */}
                <div id="Awards" >
                    <div className="aboutUsAward">
                        AWARDS
                    </div>
                    <br/>
                    <div id='award'>
                        <div className="awardName">
                            Blue Chip Chapter Award <br/> 2022 • 2021 • 2020 • 2017 • 2016 • 2015<br/>
                        </div>
                        <div className="awardDescription">
                            Awarded during the annual SHPE Regional Leadership Development Conference to chapters 
                            shown to provide outstanding metrics throughout the year, exhibiting growth and success.
                        </div>
                    </div>
                    <br/>
                    <div id='award'>
                        <div className="awardName">
                            2020 Runner Up for Bruin Development Award<br/>
                        </div>
                        <div className="awardDescription">
                            Recognized by UCLA's Engineering Society for our commitment to developing our
                            members.
                        </div>
                    </div>
                    <br/>
                    <div id='award'>
                        <div className="awardName">
                            Best Medium Engineering Student Organization at UCLA 2017<br/>
                        </div>
                    </div>
                </div>

                <br/><br/><br/><br/>
                <Footer/>
            </div>
        );
    }

    
}


export default About;