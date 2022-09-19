import React, { Component } from 'react';

import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import coverPhoto from '../../Photos/Covers/Contact.jpg';
import Footer from '../../components/Footer';
import rightsun from '../../Photos/Icons/rightsun.png'
import leftsun from '../../Photos/Icons/leftsun.png';
import './lunabotics.css';
import roverPhoto from '../../lunaboticsPhotos/lunabotics.jpeg'


class Lunabotics extends Component {
    
    // add constructor if necessary
    componentDidMount() {
        window.scrollTo(0, 0)
      }


    render() {
        return (
            <div className="addPoppins">
                <Navigation transparentNav={true} />
                <PagePhoto imageSource={coverPhoto} title={"Lunabotics"}></PagePhoto>
                
                <hr className="introBar" /> 
                    <div className="introbox" style={{color:'#001d3a', textAlign:'center', marginBottom:'4%', marginTop:'-1%'}}>
                        <div className="initIntro" style={{display: 'flex', marginLeft: '12%', marginRight: '12%', marginBottom:'-7%'}}>
                            <p className="about">
                                <p class="header">
                                    About
                                </p>
                                
                                SOLES Lunabotics is a technical project for Latinx students aiming to compete 
                                in the NASA Lunabotics Robotic Mining Competition in 2022. Our aim is to design
                                and build a partially autonomous lunar mining rover and finish in the top 25 out
                                of 50 at the competition this May!
                                
                            </p>
                            <p className="mission">
                                <p class="header">
                                    Mission
                                </p>
                                
                                Along with preparing for the NASA Lunabotics competition in May, we have two main
                                goals: allow to students to enhance their technical knowledge and skills, and help
                                during outreach projects to actively inform underrepresented students about STEM.
                                As a part of Lunabotics, students will design mechanical systems with SolidWorks,
                                program an autonomous mobile robot, and learn how to machine!
                                
                            </p>
                        </div>
                        <img id="rightsunLanding" src={rightsun} alt="Right SOLES Sun"/>
                        <img id="leftsunLanding" src={leftsun} alt="Left SOLES Sun" />
                        <p class="sponsor"> Currently looking for monetary and manufacturing sponsors!</p>
                    </div>
                <hr className="introBar" />

                <figure style={{textAlign:'center'}}>
		            <img src={roverPhoto} class="img" alt="Rover"></img>
                    <figcaption class="caption"> Four Angles of the 3D Model of the Lunabotics Rover</figcaption>
	            </figure>

                <div class="slack">
                    Interested? Join our&nbsp;
                    <a href="https://join.slack.com/t/slack-cs75556/shared_invite/zt-whbw3kv4-bANzzCGegburAnj8tLwCRw" rel="noopener noreferrer" style={{textDecoration: 'none'}} target="_blank">Slack!</a>
                </div>


                
                
                
                
                <Footer/>
            </div>
        );
    }
    

}


export default Lunabotics;