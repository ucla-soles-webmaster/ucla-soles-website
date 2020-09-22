import React, { Component } from 'react';

import FlatList from 'flatlist-react';

import Navigation from '../../components/Navigation';
import AccountNav from '../../components/AccountNav';
import Footer from '../../components/Footer';

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

    }
    
    renderUser = (user, idx) => {
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
                        Major: {user["major"]}
                    </span>

                    <span className = "alumEmployer">
                        Current Employer: {user["employer"]} 
                    </span>
                     
                    <br/>
                    
                    
                    <p className="alumnetbio"> 
                        {user["bio"]}
                    </p>

                    <p className = "alumContact">
                        Contact Info: {user["email"]}
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
                    
                    <div className="alumnilist">
                        <p style={{textAlign: "center"}}>
                            Aerospace Engineering Alumni
                        </p>
                        {console.log(this.state.aeroList)}
                        <FlatList
                            list={this.state.aeroList}
                            renderItem={this.renderUser}
                        />
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center"}}>
                            Bioengineering and Biology Alumni
                        </p>
                        {console.log(this.state.bioList)}
                        <FlatList
                            list={this.state.bioList}
                            renderItem={this.renderUser}
                        />
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center"}}>
                            Chemical Engineering and Chemistry Alumni
                        </p>
                        {console.log(this.state.chemList)}
                        <FlatList
                            list={this.state.chemList}
                            renderItem={this.renderUser}
                        />
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center"}}>
                            Civil Engineering Alumni
                        </p>
                        {console.log(this.state.civilList)}
                        <FlatList
                            list={this.state.civilList}
                            renderItem={this.renderUser}
                        />
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center"}}>
                            Computer Science Alumni
                        </p>
                        {console.log(this.state.userList)}
                        <FlatList
                            list={this.state.csList}
                            renderItem={this.renderUser}
                        />
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center"}}>
                            Electrical Engineering Alumni
                        </p>
                        {console.log(this.state.eeList)}
                        <FlatList
                            list={this.state.eeList}
                            renderItem={this.renderUser}
                        />
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center"}}>
                            Materials Engineering Alumni
                        </p>
                        {console.log(this.state.materialsList)}
                        <FlatList
                            list={this.state.materialsList}
                            renderItem={this.renderUser}
                        />
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center"}}>
                            Mathematics Alumni
                        </p>
                        {console.log(this.state.mathList)}
                        <FlatList
                            list={this.state.mathList}
                            renderItem={this.renderUser}
                        />
                    </div>

                    <br/>
                    <br/>
                    
                    <div className="alumnilist">
                        <p style={{textAlign: "center"}}>
                            Mechanical Engineering Alumni
                        </p>
                        {console.log(this.state.mecheList)}
                        <FlatList
                            list={this.state.mecheList}
                            renderItem={this.renderUser}
                        />
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center"}}>
                            Physics Alumni
                        </p>
                        {console.log(this.state.physicsList)}
                        <FlatList
                            list={this.state.phyiscsList}
                            renderItem={this.renderUser}
                        />
                    </div>

                    <br/>
                    <br/>

                    <div className="alumnilist">
                        <p style={{textAlign: "center"}}>
                            Other Alumni
                        </p>
                        {console.log(this.state.otherList)}
                        <FlatList
                            list={this.state.otherList}
                            renderItem={this.renderUser}
                        />
                    </div>
                    <br/>
                </div>
                <Footer />
            </div>
        )
    }

}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AlumNet);