import './GeneralMeetings.css';
import * as ROUTES from '../../constants/routes'

import rightsun from '../../Photos/Icons/rightsun.png';
import leftsun from '../../Photos/Icons/leftsun.png';
import sun from '../../Photos/Icons/sun.png';

import React, { Component } from 'react';
import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import coverPhoto from '../../Photos/Covers/Initiatives.png';
import Footer from '../../components/Footer';
import { AuthUserContext, withAuthorization } from '../Session';
import FlatList from 'flatlist-react';

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
              console.log(that.state.gmSignInLink)
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
            console.log("dataaaaaa", userData);
            var userID = doc.id;
            that.setState({ gmSlides: [...that.state.gmSlides, userData] });
          });
        });  
    }

    renderGMSlides = (item, idx) => {
        return(
            <a href={item["link"]} target="_blank">
                <button class="gmSlideButton">
                    {item["name"]}
                </button>
            </a>
        )
        /*
        return (
            <div class="adminUserCell">
                <div class="adminUserName">
                    <b>Name: </b> &nbsp;
                    { item["name"] } &nbsp;&nbsp;&nbsp; Link: {item["link"]}
                </div>
                
                &nbsp;&nbsp;
            </div>
        )
        */
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
                        <p className="initIntro" style={{textAlign: 'center', marginRight: '18.5%', marginLeft: '18.5%', fontSize:'1.1vw',fontWeight:'10'}}>
                            
                            <p style={{fontSize: '2.3vw', color: 'gray', marginTop: '-2.2%', marginBottom: '1%', fontWeight:'300'}}>
                                Sign In and Slides
                            </p>
                            
                            Here you can find the SOLES GM sign in form and slides shown during meetings!
                            
                        </p>
                        <img id="rightsunLanding" src={rightsun} alt="Right SOLES Sun" />
                        <img id="leftsunLanding" src={leftsun} alt="Left SOLES Sun" />
                    </div>
                <hr className="introBar" />   

           
                <div className = "titleFont1">
                    <div style = {{width: '80%', margin: 'auto'}}>                                
                        <img className = "BoardPageSun" src= {sun} alt="Yellow Sun"></img>
                    </div>
                    <div className = "staffMembersBoard">
                        GM Sign In Form
                    </div>
                </div>

                <div className="signInForm">
                    <iframe className="responsive-iframe" src={this.state.gmSignInLink}>Loading…</iframe>
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

/*
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(GeneralMeetings);
*/

/*
                <div className="signInButton">
                    <a href={this.state.gmSignInLink} target="_blank">
                        GM SIGN IN
                    </a>
                </div>
*/