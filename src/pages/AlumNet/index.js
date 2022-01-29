import React, { Component } from 'react';

import FlatList from 'flatlist-react';

import Navigation from '../../components/Navigation';
import AccountNav from '../../components/AccountNav';
import Footer from '../../components/Footer';

import rightsun from '../../photos/Icons/rightsun.png'
import leftsun from '../../photos/Icons/leftsun.png';

import { withAuthorization } from '../Session';

import './alumnet.css';



class AlumNet extends Component {

    // Add constructor here when necessary
    constructor(props) {
        super(props);
        this.state = {
            aeroList: [],
            csList: [],
            mecheList: [],
            civilList: [],
            bioList: [],
            eeList: [],
            materialsList: [],
            mathList: [],
            chemList: [],
            physicsList: [],
            otherList: [],
            userEmail: this.props.firebase.auth.currentUser.email,
        }

    }

    componentWillMount() {
        // Get all users from a user collection
        var that = this;
        this.props.firebase.getFirestore().collection("users")
        .where("alumnet", "==", "yes")  // can have multiple .where calls
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                var userData = doc.data();
                if(userData.major === "cs" || userData.major === "cse" || userData.major === "ce") // eslint-disable-next-line
                    that.setState({ csList: [...that.state.csList, userData]});
                else if(userData.major === "aerospace") // eslint-disable-next-line
                    that.setState({aeroList: [... that.state.aeroList, userData]});
                else if(userData.major === "bioengineering" || userData.major === "biology") // eslint-disable-next-line
                    that.setState({bioList: [... that.state.bioList, userData]});
                else if(userData.major === "civil") // eslint-disable-next-line
                    that.setState({civilList: [... that.state.civilList, userData]});
                else if(userData.major === "chemical" || userData.major === "chemistry") // eslint-disable-next-line
                    that.setState({chemList: [... that.state.chemList, userData]});
                else if(userData.major === "ee") // eslint-disable-next-line
                    that.setState({eeList: [... that.state.eeList, userData]});
                else if(userData.major === "materials") // eslint-disable-next-line
                    that.setState({materialsList: [... that.state.materialsList, userData]});
                else if(userData.major === "math") // eslint-disable-next-line
                    that.setState({mathList: [... that.state.mathList, userData]});
                else if(userData.major === "mechanical") // eslint-disable-next-line
                    that.setState({mecheList: [... that.state.mecheList, userData]});
                else if(userData.major === "physics") // eslint-disable-next-line
                    that.setState({physicsList: [... that.state.physicsList, userData]});
                else
                    that.setState({ otherList: [...that.state.otherList, userData] }); 
            });    
        });

        window.scrollTo(0, 0)
          
    }
    
    renderUser = (user, idx) => {
        var major = user["major"];
        if (major === "aerospace") { major = "Aerospace"}
        else if (major === "bioengineering") { major = "BioE"}
        else if (major === "biology") { major = "Bio"}
        else if (major === "chemical") { major = "ChemE"}
        else if (major === "civil") { major = "Civil"}
        else if (major === "ce") { major = "Computer Engineering"}
        else if (major === "cs") { major = "CS"}
        else if (major === "cse") { major = "CS and Engineering"}
        else if (major === "ee") { major = "EE"}
        else if (major === "materials") { major = "Materials"}
        else if (major === "math") { major = "Math"}
        else if (major === "mechanical") { major = "MechE"}
        else if (major === "physics") { major = "Physics"}
        else if (major === "other") { major = "Other"}
        else if (major === "undeclared") { major = "Undecided"}

        return (
            <div className={ this.state.userEmail === user["email"] ? "STARleaderboardRowEvenUSER" : idx % 2 === 0 ? "STARleaderboardRowEven" : "STARleaderboardRowOdd"   }>
                
                {/* User's name */}
                <div className="alumniList">
                    
                    <a className = "alumName" href={user["linkedin"]} rel="noopener noreferrer" target = "_blank">{user["first_name"]} {user["last_name"]}</a>
                    
                    <span className = "alumGradYear">
                            Class of {user["graduation"]}
                    </span>

                    <p className = "alumBreak"></p> 

                    <span className = "alumMajor">
                        Graduating Major: {major}
                    </span>

                    <span className = "alumEmployer">
                        Current Employer: {user["employer"]} 
                    </span>
                     
                    <br/>
                    
                    
                    <p className="alumnetbio"> 
                        "{user["bio"]}"
                    </p>

                    <p className = "alumContact">
                        Email: {user["email"]}  
                        {   user["linkedin"] !== '' ? <br/>  : <div/>  }
                        {   user["linkedin"] !== ''
                                ?
                                    <a href={user["linkedin"]} rel="noopener noreferrer" target = "_blank">
                                        {user["first_name"]}'s LinkedIn
                                    </a>
                                : 
                                    <div/>
                                
                        }
                    </p>
                </div>

            </div>
        );
    }


    render() {
        return (
            <div className="graa"> 
                <Navigation transparentNav={false} />
                <div className="navgapA" style={{minHeight: "100vh"}}>
                    <AccountNav />

                    <h1 className="haccount">
                        Alumni Network
                    </h1>

                    <hr className="introBar" /> 
                    <div className="introbox" style={{textAlign: 'center'}}>
                        <p className="initIntro" style={{textAlign: 'center', marginRight: '22.5%', marginLeft: '22.5%', fontSize:'1.1vw',fontWeight:'10'}}>
                            The SOLES Alumni Network is a great tool for students and alumni alike. 
                            If you are a student, feel free to reach out to any of the below listed
                            alumni for career advice, job opportunities, or essentially anything! All
                            the alumni would love to hear from current students.
                        </p>
                        <img id="rightsunLanding" src={rightsun} alt="Right SOLES Sun" />
                        <img id="leftsunLanding" src={leftsun} alt="Left SOLES Sun" />
                    </div>
                <hr className="introBar" />   
                    
                    <div className="alumnilist">
                        <p style={{textAlign: "center", fontSize: "2vw"}}>
                            Aerospace Engineering Alumni
                        </p>
                        {   this.state.aeroList.length === 0
                                ?
                                    <p className="noAlum"> 
                                        Still waiting on alumni here!
                                    </p>
                                :
                                    <FlatList
                                        list={this.state.aeroList}
                                        renderItem={this.renderUser}
                                    />
                        }
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center", fontSize: "2vw"}}>
                            Bioengineering and Biology Alumni
                        </p>
                        {   this.state.bioList.length === 0
                                ?
                                    <p className="noAlum"> 
                                        Still waiting on alumni here!
                                    </p>
                                :
                                    <FlatList
                                        list={this.state.bioList}
                                        renderItem={this.renderUser}
                                    />
                        }
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center", fontSize: "2vw"}}>
                            Chemical Engineering and Chemistry Alumni
                        </p>
                        {   this.state.chemList.length === 0
                                ?
                                    <p className="noAlum"> 
                                        Still waiting on alumni here!
                                    </p>
                                :
                                    <FlatList
                                        list={this.state.chemList}
                                        renderItem={this.renderUser}
                                    />
                        }
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center", fontSize: "2vw"}}>
                            Civil Engineering Alumni
                        </p>
                        {   this.state.civilList.length === 0
                                ?
                                    <p className="noAlum"> 
                                        Still waiting on alumni here!
                                    </p>
                                :
                                    <FlatList
                                        list={this.state.civilList}
                                        renderItem={this.renderUser}
                                    />
                        }
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center", fontSize: "2vw"}}>
                            Computer Science Alumni
                        </p>
                        {   this.state.csList.length === 0
                                ?
                                    <p className="noAlum"> 
                                        Still waiting on alumni here!
                                    </p>
                                :
                                    <FlatList
                                        list={this.state.csList}
                                        renderItem={this.renderUser}
                                    />
                        }
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center", fontSize: "2vw"}}>
                            Electrical Engineering Alumni
                        </p>
                        {   this.state.eeList.length === 0
                                ?
                                    <p className="noAlum"> 
                                        Still waiting on alumni here!
                                    </p>
                                :
                                    <FlatList
                                        list={this.state.eeList}
                                        renderItem={this.renderUser}
                                    />
                        }
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center", fontSize: "2vw"}}>
                            Materials Engineering Alumni
                        </p>
                        {   this.state.materialsList.length === 0
                                ?
                                    <p className="noAlum"> 
                                        Still waiting on alumni here!
                                    </p>
                                :
                                    <FlatList
                                        list={this.state.materialsList}
                                        renderItem={this.renderUser}
                                    />
                        }
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center", fontSize: "2vw"}}>
                            Mathematics Alumni
                        </p>
                        {   this.state.mathList.length === 0
                                ?
                                    <p className="noAlum"> 
                                        Still waiting on alumni here!
                                    </p>
                                :
                                    <FlatList
                                        list={this.state.mathList}
                                        renderItem={this.renderUser}
                                    />
                        }
                    </div>

                    <br/>
                    <br/>
                    
                    <div className="alumnilist">
                        <p style={{textAlign: "center", fontSize: "2vw"}}>
                            Mechanical Engineering Alumni
                        </p>
                        {   this.state.mecheList.length === 0
                                ?
                                    <p className="noAlum"> 
                                        Still waiting on alumni here!
                                    </p>
                                :
                                    <FlatList
                                        list={this.state.mecheList}
                                        renderItem={this.renderUser}
                                    />
                        }
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center", fontSize: "2vw"}}>
                            Physics Alumni
                        </p>
                        {   this.state.physicsList.length === 0
                                ?
                                    <p className="noAlum"> 
                                        Still waiting on alumni here!
                                    </p>
                                :
                                    <FlatList
                                        list={this.state.physicsList}
                                        renderItem={this.renderUser}
                                    />
                        }
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center", fontSize: "2vw"}}>
                            Other Alumni
                        </p>
                        {   this.state.otherList.length === 0
                                ?
                                    <p className="noAlum"> 
                                        Still waiting on alumni here!
                                    </p>
                                :
                                    <FlatList
                                        list={this.state.otherList}
                                        renderItem={this.renderUser}
                                    />
                        }
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <Footer />
            </div>
        )
    }

}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AlumNet);