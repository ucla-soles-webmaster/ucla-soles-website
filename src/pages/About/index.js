import React, { Component } from 'react';

import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import coverPhoto from '../../photos/Covers/About.jpg';
import Footer from '../../components/Footer';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './index.css'


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
                <br/><br/><br/><br/>

                {/* Mission Statement and Vision */}
                <div class="MissionVision" style={{marginLeft: '11%', marginRight: '12%'}}>

                    {/* Mission Statement */}
                    <div className="mission" style={{fontSize:'2.4vw', fontFamily:'Poppins', color:'#001d3a', marginBottom:'0.4vw'}}>
                            MISSION STATEMENT
                            <p style={{fontSize:'1.2vw', fontFamily:'Poppins', color:'gray', marginLeft:'10%'}}>
                            SOLES changes lives by empowering the Hispanic community to realize its fullest potential 
                            and to impact the world through STEM awareness, access, support, and development.
                            </p>
                    </div>
                    {/* Vision */}
                    <div className="vision" style={{fontSize:'2.4vw', fontFamily:'Poppins', color:'#001d3a', marginBottom:'0.4vw'}}>
                        VISION
                        <p style={{fontSize:'1.2vw', fontFamily:'Poppins', color:'gray', marginLeft:'10%'}}>
                        SOLE's vision is a world where Hispanics are highly valued and influential as the leading
                        innovators, scientists, mathematicians and engineers. 
                        </p>
                    </div>
                    
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                <div style={{backgroundColor: '#f3f3f3'}}>
                    <br/><br/><br/>

                    <div className="h1init" style={{fontSize:'3vw', color:'#001d3a', marginBottom:'0.4vw'}}>
                       HISTORY
                    </div>
                    <br/>
        
                    <VerticalTimeline >
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
                    <br/><br/><br/><br/>
                </div>


                {/* Awards Section */}
                <br/><br/><br/><br/>
                <div id="Awards" >
                    <div className="h1init" style={{fontSize:'3.2vw', color:'#001d3a', marginBottom:'0.4vw'}}>
                        AWARDS
                    </div>
                    <br/>
                    <div id='award'>
                        <div style={{fontSize:'2vw', fontFamily:'Poppins', color:'gray', marginBottom:'0.4vw', textAlign:'center'}}>
                            2020 Runner Up for Bruin Development Award<br/>
                        </div>
                        <div style={{fontSize: '1.1vw', fontFamily: 'Poppins', textAlign:'center', lineHeight:'1.4vw', color: '#001d3a', marginLeft:'30%',marginRight:'30%'}}>
                            Recognized by UCLA's Engineering Society for our commitment to developing our
                            members.
                        </div>
                    </div>
                    <br/>
                    <div id='award'>
                        <div style={{fontSize:'2vw', fontFamily:'Poppins', color:'gray', marginBottom:'0.4vw', textAlign:'center'}}>
                            Blue Chip Chapter Award 2015-2017 & 2020<br/>
                        </div>
                        <div style={{fontSize: '1.1vw', fontFamily: 'Poppins', textAlign:'center', lineHeight:'1.4vw', color: '#001d3a', marginLeft:'30%',marginRight:'30%'}}>
                            Awarded during the annual SHPE Regional Leadership Development Conference to chapters 
                            shown to provide outstanding metrics throughout the year, exhibiting growth and success.
                        </div>
                    </div>
                    <br/>
                    <div id='award'>
                        <div style={{fontSize:'2vw', fontFamily:'Poppins', color:'gray', marginBottom:'0.4vw', textAlign:'center'}}>
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

