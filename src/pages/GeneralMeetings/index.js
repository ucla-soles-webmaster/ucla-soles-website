///////////////////////////////////////////////////////////////
/* Component / ReactJS Library Imports */

import React, { Component } from 'react';
import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import coverPhoto from '../../Photos/Covers/Initiatives.png';
import Footer from '../../components/Footer';
import { withAuthorization } from '../Session';
import FlatList from 'flatlist-react';



///////////////////////////////////////////////////////////////
/* CSS Imports */

import './GeneralMeetings.css';



///////////////////////////////////////////////////////////////
/* Accent Photo Imports */

import rightsun from '../../Photos/Icons/rightsun.png';
import leftsun from '../../Photos/Icons/leftsun.png';
import sun from '../../Photos/Icons/sun.png';




class GeneralMeetings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gmSignInLink: '',
            gmSlides: [],
        }
        
    }

    // Add constructor here when necessary
    
    componentDidMount() {
        window.scrollTo(0, 0)

        var that = this;
        this.props.firebase.getFirestore().collection("misc").doc("gmSignInLink")
          .get()
          .then(function(doc) {
              if (doc.exists) {
              var gm_link_data = doc.data();
              that.setState({ gmSignInLink: gm_link_data['link'] })
              } else {
                  // doc.data() will be undefined in this case
                  console.log("Can't get GM sign in link from firebase inventory!");
              }
              
          }).catch(function(error) {
              console.log("Error getting document:", error);
        });

        that.props.firebase.getFirestore().collection("gmSlides")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            var userData = doc.data();
            that.setState({ gmSlides: [...that.state.gmSlides, userData] });
          });
        });  
    }

    renderGMSlides = (item, idx) => {
        return(
            <a href={item["link"]} target="_blank" rel="noopener noreferrer">
                <button class="gmSlideButton">
                    {item["name"]}
                </button>
            </a>
        )
    }

    /*this.setState({gmSlides: [] }) */

    render(){
        return (
            <div>
                <Navigation transparentNav={true} />
                <PagePhoto imageSource={coverPhoto} title={"General Meetings"}></PagePhoto>
                <br/><br/><br/>

                <hr className="introBar" /> 
                    <div className="introbox" style={{textAlign: 'center'}}>
                        <div className="introMessage">
                            Sign In and Slides
                            <div className="introSubMessage">
                                Here you can find the SOLES GM sign in form and slides shown during meetings!
                            </div>
                        </div>

                        <img id="rightsunLanding" src={rightsun} alt="Right SOLES Sun" />
                        <img id="leftsunLanding" src={leftsun} alt="Left SOLES Sun" />
                    </div>
                <hr className="introBar" />   

           
                <div className = "titleFont1">
                    <div style = {{width: '80%', margin: 'auto', marginTop: '-50px'}}>                                
                        <img className = "BoardPageSun" src= {sun} alt="Yellow Sun"></img>
                    </div>
                    <div className = "staffMembersBoard">
                        GM Sign In Form
                    </div>
                </div>

                <div className="signInForm">
                    <iframe className="responsive-iframe" title="Sign-in Form" src={this.state.gmSignInLink}>Loading…</iframe>
                </div>
                
                <div className = "titleFont1">
                    <div style = {{width: '80%', margin: 'auto'}}>                                
                        <img className = "BoardPageSun" src= {sun} alt="Yellow Sun"></img>
                    </div>
                    <div className = "staffMembersBoard">
                        GM Slides
                    </div>
                </div>
                <div className="gmSlides">
                    <FlatList
                        list={this.state.gmSlides}
                        renderItem={this.renderGMSlides}
                    />
                </div>



                <Footer/>
            </div>
        )
    }
}

const condition = authUser => true;

export default withAuthorization(condition)(GeneralMeetings);