import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

import Navigation from '../../components/Navigation';
import AccountNav from '../../components/AccountNav';
import FlatList from 'flatlist-react';
import Form from 'react-bootstrap/Form'
import Footer from '../../components/Footer';

import { withAuthorization } from '../Session';

import '../TestBank/hubStyle.css';
import '../TestSubmit/submit.css';
import sun from '../../photos/Icons/sunblue.png';


class TestBankView extends Component {

    // Add constructor here when necessary
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            userID: "",
            firestore: this.props.firebase.getFirestore(),
            userEmail: this.props.firebase.auth.currentUser.email,
            department: "",
            departmentClasses: [],
            class: "",  // DIFFERENT from TestSubmit's class. This is the pure class ID, department name isn't included
            classTests: [],
            test: "",
            linkToTest: "",
            cantView: false,
            currentCard: 0,
            clickedView: false
          }

    }

    /*  This function is called once the component is made and ready to be 
        rendered on the screen. It's similar to the constructor. We do API
        calls and database calls in here initially for set up */
    componentWillMount() {
        var that = this;  // must have this for the setState inside lamda

        // Getting our user's data, so we can verify they are a student in render()
        this.props.firebase.getFirestore().collection("users")
          .where("email", "==", this.state.userEmail)  // can have multiple .where calls
          .get()
          .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              that.setState({ user: doc.data() })
              that.setState({ userID: doc.id })
            });
          })        
    }

    componentDidMount() {
            window.scrollTo(0, 0)
          }

    selectDepartment(event) {
        this.setState({ department: event.target.value })
    }

    selectClass(event) {
        console.log(event.target.value.substring(this.state.department.length+1));
        this.setState({ class: event.target.value.substring(this.state.department.length+1) })
    }

    selectTest(event) {
        this.setState({ test: event.target.value })
    }

    /*  Getting the classes from a department from Firebase  */
    getClassesFromDepartment() {
        var that = this;
        this.props.firebase.getFirestore().collection("tests").doc(this.state.department).collection("classes")
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    var classID = doc.id;
                    that.setState({ departmentClasses: [...that.state.departmentClasses, classID] });
                });    
            });
    }

    getTestsFromClass() {
        var that = this;
        this.props.firebase.getFirestore().collection("tests").doc(this.state.department).collection("classes").doc(this.state.class).collection("tests")
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    var testID = doc.id;
                    that.setState({ classTests: [...that.state.classTests, testID] });
                })
            })
    }

    /* Frontend: Used to render individual classes in the FlatList in render() */
    renderClass = (classN, idx) => {
        return (
            <option className="FormRowLabelDropDownTS">
                {this.state.department.replace(/_/g, " ")} {classN}
            </option>
        );
    }

    /* Frontend: Shouldn't happen */
    renderEmptyClass =  () => {
        return (
            <div>
                There is a problem here: empty rendered class. <br/>
                Contact uclasoles.webmaster@gmail.com about your issue.
            </div>
        );
    }

    /* Frontend: Used to render individual test in the 2nd FlatList in render() */
    renderTest = (testN, idx) => {
        /*
        let position = 0;
        if (testN.length > 2) {
             position = testN.indexOf('at');
        }
        else {
            position = testN.length;
        }
        */
        return (
            <option className="FormRowLabelDropDownTS">
                {/*testN.substring(0,position)*/}
                {testN}
            </option>
        )
    }

    /* Frontend: Shouldn't happen */
    renderEmptyTest = () => {
        return (
            <div>
                There is a problem here: empty rendered test. <br/>
                Contact uclasoles.webmaster@gmail.com about your issue.
            </div>
        );
    }

    /* Get link from Firestore to view test */
    viewTest = event => {
        var that = this;

        if (this.state.user["testbank_passes"] <= 0) {
            that.setState({ cantView: true });
            return
        }

        // Get link to view test
        this.props.firebase.getFirestore().collection("tests").doc(this.state.department).collection("classes").doc(this.state.class).collection("tests").doc(this.state.test)
            .get()
            .then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    that.setState({ linkToTest:  doc.data()["downloadURL"] });
                    that.setState({ clickedView: true });
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        

        // Update user's testbank_passes by subtracting 1
        this.props.firebase.getFirestore().collection("users").doc(this.state.userID)
          .update({
                testbank_passes: that.state.user["testbank_passes"] - 1
            })
            .then(function() {
                console.log("Updated testbank_passes successfuly");
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });   


        // Get user's updated data
        this.props.firebase.getFirestore().collection("users")
          .where("email", "==", this.state.userEmail)  // can have multiple .where calls
          .get()
          .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              that.setState({ user: doc.data() })
              that.setState({ userID: doc.id })
            });
          })    

    }

    /* Returns true if a string has whitespace */
    hasWhiteSpace(s) {
        return s.indexOf(' ') >= 0;
    }


    render() {
        let reactSwipeEl;

        return (
            <div className="graa"> 
                <Navigation transparentNav={false} />
                <div className="navgapA" style={{minHeight: "100vh"}}>
                    <AccountNav />

                    <h1 className="haccount">
                        View a Test
                    </h1>

                    {/* Only students have access to this page */}
                    { this.state.user["career"] === "student"
                        ?   <div>
                                {/* Fixed Submit a Test title/description */}
                                <div className="hubbox">
                                    <img src={sun} id="leftsuntb" alt="Left SOLES Sun" />
                                    <p className="hubintroTS">
                                        You currently have <div style={{color: "gray", fontWeight: "bolder"}}>{this.state.user["testbank_passes"]}</div> View Passes left.
                                        You are free to browse.
                                    </p>
                                    <img src={sun} id="rightsuntb" alt="Right SOLES Sun" />
                                </div>

                                {/* View a Test process */}
                                <div>
                                    {/* React Swipe allows us to have cool swiping animation between
                                        steps of choosing department -> class -> submit test */}
                                    <ReactSwipe
                                        className="carousel"
                                        swipeOptions={{ continuous: false }}
                                        ref={el => (reactSwipeEl = el)}
                                    >
                                        
                                        {/* STEP 1: Department Choice */}
                                        <div>
                                            <fieldset className="FormGroupTS">                
                                                <Form.Group className="FormRowTS" controlId="exampleForm.ControlSelect1">
                                                    <Form.Label className="FormRowLabelDropDownTS">Which department?</Form.Label>                                   
                                                        <Form.Control 
                                                            className={false ? "graydd" : "FormRowInput"}
                                                            as="select"
                                                            onChange={this.selectDepartment.bind(this)}
                                                        >
                                                            <option value="">-</option>
                                                            <option value="BIOENGR" >Bioengineering</option>
                                                            <option value="C&EE" >Civil and Environmental Engineering</option>
                                                            <option value="CHEM" >Chemistry</option>
                                                            <option value="CH_ENGR" >Chemical Engineering</option>
                                                            <option value="COM_SCI" >Computer Science</option>
                                                            <option value="EC_ENGR" >Electrical and Computer Engineering</option>
                                                            <option value="ENGR" >Engineering</option>
                                                            <option value="GE" >GE</option>
                                                            <option value="MATH" >Mathematics</option>
                                                            <option value="MAT_SCI" >Materials Science and Engineering</option>
                                                            <option value="MECH&AE" >Mechanical and Aerospace Engineering</option>
                                                            <option value="PHYSICS" >Physics</option>                                
                                                        </Form.Control>
                                                </Form.Group>
                                            </fieldset>
                                        </div>

                        

                                        {/* STEP 2: Class Option */}
                                        <div>
                                            <fieldset className="FormGroupTS"> 
                                                <Form.Group className="FormRowTS" controlId="exampleForm.ControlSelect1">
                                                    <Form.Label className="FormRowLabelDropDownTS">Which class?</Form.Label>                          
                                                    <Form.Control 
                                                        className={false ? "graydd" : "FormRowInput"}
                                                        as="select"
                                                        onChange={this.selectClass.bind(this)}
                                                    >
                                                        { this.state.departmentClasses.length > 0
                                                            ?   
                                                                <FlatList
                                                                    list={this.state.departmentClasses}
                                                                    renderItem={this.renderClass}
                                                                    ListEmptyComponent={this.renderEmptyClass()}
                                                                />
                                                            :
                                                                <option>
                                                                    No classes found. Add one below.
                                                                </option>
                                                        }
                                                    </Form.Control>           
                                                </Form.Group>
                                                <p className="disclaimer3">
                                                    Can't find the class you are looking for? We apologize and 
                                                    are continously working on adding classes and expanding the
                                                    Test Bank.
                                                </p>
                                            </fieldset>
                                        </div>






                                        {/* STEP 3: View List of tests from class */}
                                        <div>
                                            <fieldset className="FormGroupTS"> 
                                                <Form.Group className="FormRowTV" controlId="exampleForm.ControlSelect1">
                                                    <Form.Label className="FormRowLabelDropDownTestView">Choose a test from {this.state.department.replace(/_/g, " ")} {this.state.class}</Form.Label>                          
                                                    <Form.Control 
                                                        className={false ? "graydd" : "FormRowInputViewTests"}
                                                        as="select"
                                                        onChange={this.selectTest.bind(this)}
                                                        disabled={this.state.clickedView}
                                                    >
                                                        { this.state.classTests.length > 0
                                                            ?   
                                                                <FlatList
                                                                    list={this.state.classTests}
                                                                    renderItem={this.renderTest}
                                                                    ListEmptyComponent={this.renderEmptyTest()}
                                                                />
                                                            :
                                                                <option>
                                                                    No tests found :(
                                                                </option>
                                                        }
                                                    </Form.Control>           
                                                </Form.Group>

                                                {/* SUBMIT button, shoulr register action for backend task and redirect
                                                    routing to another page */}
                                                <button 
                                                    className="buttonADD"
                                                    disabled={this.state.classTests.length === 0 ||
                                                              this.state.linkToTest !== "" ||
                                                              this.state.test === "" ||
                                                              this.state.test === "-" }
                                                    onClick={this.viewTest}
                                                >
                                                    VIEW
                                                </button>

                                                {/* If they don't have enough passes */}
                                                { this.state.cantView === true
                                                    ?
                                                        <p className="disclaimer3">
                                                            You don't have enough test passes :(
                                                        </p>
                                                    :
                                                        <div className="" />

                                                }
                                            </fieldset>


                                            <div style={{textAlign: "center"}}>
                                                {/* Show link to view test */}
                                                { this.state.linkToTest === ""
                                                        ?
                                                            <div className="" />
                                                        :  
                                                            <a  href={this.state.linkToTest}
                                                                target="_blank" 
                                                                rel="noopener noreferrer" 
                                                                className="disclaimer4"
                                                            >
                                                                <br/> Click here to view your test
                                                            </a>
                                                    }
                                            </div>
                                            <br/>
                                            <br/>
                                        </div>
                                
                                    </ReactSwipe>

                                    {/* Slider Buttons */}
                                    {/* Previous */}
                                    <div className="nextprevdiv" style={this.state.currentCard === 0 ? {marginTop: '-5vw'} 
                                                                        : this.state.currentCard === 1 ? {marginTop: '-0.9vw'}
                                                                        : {marginTop: '-1.5vw'} }>
                                        <button 
                                            className="buttonSlider"
                                            disabled={
                                                this.state.currentCard === 0
                                            }
                                            onClick={() => {
                                                reactSwipeEl.prev();
                                                if (this.state.currentCard === 1) {
                                                    this.setState({ departmentClasses: [] });
                                                    this.setState({ class: "" });
                                                }
                                                if (this.state.currentCard === 2) {
                                                    this.setState({ departmentClasses: [] });
                                                    this.setState({ classTests: [] });
                                                    this.getClassesFromDepartment();
                                                    this.setState({ class: "" });
                                                    this.setState({ linkToTest: "" });
                                                    this.setState({ test: "" });
                                                    this.setState({ clickedView: false });
                                                }

                                                this.setState({ currentCard: this.state.currentCard - 1 });
                                                }
                                            }
                                        >
                                                Previous
                                        </button>

                                        {/* Next */}
                                        <button
                                            className="buttonSlider"
                                            disabled={
                                                (this.state.currentCard === 0 && this.state.department === "") ||
                                                (this.state.currentCard === 1 && this.state.class === this.state.department.replace(/_/g, " ") + " -" ) ||
                                                (this.state.currentCard === 1 && this.state.class === "" ) ||
                                                this.state.currentCard === 2
                                            }
                                            onClick={() => {
                                                reactSwipeEl.next();
                                                if(this.state.currentCard === 1) {
                                                    console.log(this.state.class)
                                                    this.getTestsFromClass();
                                                }

                                                this.setState({ currentCard: this.state.currentCard + 1 });
                                                if (this.state.department.length > 2) {
                                                    this.getClassesFromDepartment();
                                                }
                                                }
                                            }
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        
                        :   <div> {/* Unauthorized career user access */}
                                <div className="hubbox">
                                    <img src={sun} id="leftsuntb" alt="Right SOLES Sun" />
                                    <p className="hubintro">
                                        The SOLES Test Bank is authorized for student use only.
                                    </p>
                                    <img src={sun} id="rightsuntb" alt="Left SOLES Sun" />
                                </div>
                            </div>
                    }




  


                    <br/>
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
 
export default withAuthorization(condition)(TestBankView);

