import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

import Navigation from '../../components/Navigation';
import AccountNav from '../../components/AccountNav';
import Progress from 'react-progressbar';
import FlatList from 'flatlist-react';
import Form from 'react-bootstrap/Form'
import Footer from '../../components/Footer';

import { withAuthorization } from '../Session';
import * as ROUTES from '../../constants/routes';

import '../Account/accountStyle.css';
import '../TestBank/hubStyle.css';
import './submit.css';
import sun from '../../coverImages/sunblue.png';


class TestBankSubmit extends Component {

    // Add constructor here when necessary
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            firestore: this.props.firebase.getFirestore(),
            userEmail: this.props.firebase.auth.currentUser.email,
            department: "",
            departmentClasses: [],
            class: "",
            classID: "",
            addClass: "",
            currentCard: 0,
            censorName: false,
            censorWork: false,
            file_data: "",
            testType: "",
            uploadProgress: 0,
            downloadURL: "",
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
            });
          })        
    }

    selectDepartment(event) {
        this.setState({ department: event.target.value })
    }

    selectClass(event) {
        this.setState({ class: event.target.value })
    }

    selectTestType(event) {
        this.setState({ testType: event.target.value })
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
                that.setState({ classID: doc.id })
                that.setState({ departmentClasses: [...that.state.departmentClasses, classID] });
            });    
        });
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

    /* Add a class document to the tests/DEPARTMENT/ collection */
    addClass = event => {
        //const classToBeAdded = this.state.addClass;
        var firestore = this.props.firebase.getFirestore();

        firestore.collection('tests').doc(this.state.department).collection('classes').doc(this.state.addClass).set({})
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });

        // Add a 'tests' subcollection with new document with '-' blank test
        firestore.collection('tests').doc(this.state.department).collection('classes').doc(this.state.addClass).collection('tests').doc('-').set({})
        .then(function() {
            console.log("First document of new subcollection successfully written");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

        this.setState({ departmentClasses: [] });
        this.getClassesFromDepartment();
    }

    /* Returns true if a string has whitespace */
    hasWhiteSpace(s) {
        return s.indexOf(' ') >= 0;
    }

    uploadFile(e) {
        var that = this;
            var file = e.target.files;
            var reader = new FileReader();

            try {
                reader.readAsDataURL(file[0]);
                reader.onload=(e)=>{
                    that.setState({file_data:e.target.result});
                }
            }
            catch(error) {
                that.setState({ file_data: "" });
            }

    }

    fileSubmitToDataBase = event => {

        var d = new Date();
        var that = this;

        var storageName = this.state.testType + ' -- from ' + d.getFullYear() + ' ' + monthNames[d.getMonth()] + ' ' + d.getDate() +
                            ' at ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 

        var storageRef = this.props.firebase.storage.ref();
        var mountainImagesRef = storageRef.child('tests/' + this.state.department + '/' + this.state.class + '/' + storageName);

        // Store file on Firebase Storage
        var message = this.state.file_data;
        var uploadTask = mountainImagesRef.putString(message, 'data_url');

        // Upload the file and track upload status
        uploadTask.on('state_changed',
        function(snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            that.setState({ uploadProgress: progress });
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case 'paused': 
                console.log('Upload is paused');
                break;
            case 'running': 
                console.log('Upload is running');
                break;
            default:
                break;
            }
        }, function(error) {
        
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
            case 'storage/unauthorized':
            // User doesn't have permission to access the object
                break;
        
            case 'storage/canceled':
            // User canceled the upload
                break;
        
            case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
                break;

            default:
                // Idk if this should even happe 
                break;
        }
        }, function() {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log('File available at', downloadURL);
            that.setState({ downloadURL: downloadURL });
            });
        });

        var delayInMilliseconds = 10000; // 10 second

        setTimeout(function() {
        // your code to be executed after 10 second
        // Store filename/reference on Firestore
            that.props.firebase.getFirestore().collection('tests').doc(that.state.department).collection('classes').doc(that.state.classID).collection('tests').doc(storageName).set({
                storage_name: storageName,
                downloadURL: that.state.downloadURL,
                test_type: that.state.testType,
                user_submitted: that.state.user["email"],
                censor_name: that.state.censorName,
                censor_work: that.state.censorWork,
                date_submitted: {
                    day: d.getDate(),
                    year: d.getFullYear(),
                    hour: d.getHours(),
                    minute: d.getMinutes(),
                    second: d.getSeconds()
                }
            })
            .then(function(docRef) {
                console.log('Added test to Firestore /tests/' + that.state.department + '/classes/' + 
                    that.state.classID + '/tests/ with ID: ',  
                    docRef.id);
                that.props.history.push(ROUTES.TESTBANK);
            })
            .catch(function(error) {
                console.error('Error adding document: ', error);
            })

            console.log('End of Delay')

        }, delayInMilliseconds);

    }

    render() {
        let reactSwipeEl;

        return (
            <div className="graa"> 
                <Navigation transparentNav={false} />
                <div className="navgapA">
                    <AccountNav />

                    <h1 className="haccount">
                        Submit a Test
                    </h1>

                    {/* Only students have access to this page */}
                    { this.state.user["career"] === "student"
                        ?   <div>
                                {/* Fixed Submit a Test title/description */}
                                <div className="hubbox">
                                    <img src={sun} id="leftsuntb" alt="Left SOLES Sun" />
                                    <p className="hubintroTS">
                                        Your name and/or work can be censored at your request. <br/>
                                        Test submissions cannot have someone else's name on it. <br/>
                                        Tests can be an actual worked out test, blank copy, or practice test. <br/>
                                        You will receive a Test View Pass upon verification of the validity of your test. <br/>
                                    </p>
                                    <img src={sun} id="rightsuntb" alt="Right SOLES Sun" />
                                </div>

                                {/* Submit a Test process */}
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

                        

                                        {/* STEP 2: Class Option and Add Class */}
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
                                                Can't find the class you are looking for? Please add it below.
                                            </p>
                                            <hr className="hrTS"/>
                                            { this.state.currentCard === 1
                                                ?   <div>
                                                        <Field
                                                            label="Add a course number"
                                                            type="text"
                                                            placeholder={"35L"} 
                                                            required
                                                            formrowclass="FormRowLabelDropDownTS"
                                                            onChange={(e) => {
                                                                this.setState({ addClass: e.target.value });  
                                                            }}
                                                        />   
                                                        <p className="disclaimer3">
                                                                Only include course identifier. Examples: 32, M51A, 31A, 4BL
                                                        </p>
                                                        <button 
                                                            className="buttonADD"
                                                            disabled={this.hasWhiteSpace(this.state.addClass) ||
                                                                        this.state.addClass === "" ||
                                                                        this.state.departmentClasses.includes(this.state.addClass)
                                                                    }
                                                            onClick={this.addClass}
                                                        >
                                                            ADD
                                                        </button>
                                                        
                                                        { this.state.departmentClasses.includes(this.state.addClass)
                                                            ?
                                                                <p className="disclaimer3">
                                                                    This class is already added.
                                                                </p>
                                                            :
                                                                <div className="" />
                                                        }

                                                    </div>

                                                :   <div className="" />
                                            }
                                            </fieldset>
                                        </div>





                                        {/* STEP 3: Test Submission (with Field to add PDF) */}
                                        <div>
                                            <fieldset className="FormGroupTS"> 

                                            { this.state.uploadProgress !== 100 ? <div>
                                                <Field
                                                    label={"Upload PDF of your " + this.state.class + " test: "}
                                                    type="file"
                                                    required
                                                    formrowclass="FormRowLabelDropDownTestUpload"
                                                    onChange = {(e)=>this.uploadFile(e)}
                                                /> 
                                                <Form.Group className="FormRowTS" controlId="exampleForm.ControlSelect1">
                                                    <Form.Label className="FormRowLabelDropDownTS">What type of test?</Form.Label>                                   
                                                        <Form.Control 
                                                            className={false ? "graydd" : "FormRowInput"}
                                                            as="select"
                                                            onChange={this.selectTestType.bind(this)}
                                                        >
                                                            <option value="">-</option>
                                                            <option value="Midterm 1" >Midterm 1</option>
                                                            <option value="Midterm 2" >Midterm 2</option>
                                                            <option value="Final" >Final</option>                                                                      
                                                        </Form.Control>
                                                </Form.Group>
                                           

                                            
                                                {/* Censor Options */}
                                                <div className="checksu">
                                                    <input 
                                                        type="checkbox" 
                                                        disabled={false}
                                                        onChange={(e) => {
                                                            this.setState({ censorName: !this.state.censorName })
                                                        }}
                                                        className="checkboxTS"
                                                    />
                                                    <label className="checklabelsu"  for="vehicle1"> 
                                                        Black out (censor) my name
                                                    </label>
                                                </div>
                                                <div className="checksu">
                                                    <input 
                                                        type="checkbox" 
                                                        disabled={false}
                                                        onChange={(e) => {
                                                            this.setState({ censorWork: !this.state.censorWork })
                                                        }}
                                                        className="checkboxTS"
                                                    />
                                                    <label className="checklabelsu"  for="vehicle1"> 
                                                        Black out (censor) my work
                                                    </label>
                                                </div>


                                                {/* SUBMIT button, shoulr register action for backend task and redirect
                                                    routing to another page */}
                                                <button 
                                                    className="buttonADD"
                                                    onClick={this.fileSubmitToDataBase}
                                                    disabled={this.state.file_data === "" || 
                                                            this.state.testType === ""  || 
                                                            this.state.uploadProgress > 0 }
                                                >
                                                    SUBMIT
                                                </button>
                                                </div>
                                            
                                                : <div className="" />
                                            }


                                            
                                                {/* Upload progress bar once user hits submit */}
                                                { this.state.uploadProgress > 0
                                                    ?   
                                                        <div>

                                                            { this.state.uploadProgress === 100
                                                                ? <br/> : <div className="" />
                                                            }
                                                            
                                                            <Progress 
                                                                completed={this.state.uploadProgress} 
                                                                className="progressbarTS"
                                                            />
                                                            
                                                            { this.state.uploadProgress === 100
                                                                ?
                                                                    <p className="uploadSuccess">
                                                                        Upload Success!
                                                                        <br/>
                                                                        <br/>
                                                                        Thank you for your contribution! <br/>
                                                                        Your 1 new Test Pass and STAR Points will be updated upon <br/>
                                                                        verification of your test by the Academic Chair. Approximately <br/>
                                                                        less than 1 hour, 24 hours at most. Feel free to leave this page now :)
                                                                    </p>
                                                                :
                                                                    <p className="uploadSuccess">
                                                                        {Math.trunc(this.state.uploadProgress)}% complete
                                                                    </p>
                                                            }

                                                        </div>
                                                    :
                                                        <div className="" />
                                                }  





                                            </fieldset>
                                        </div>
                                
                                    </ReactSwipe>



                                    {/* Slider Buttons */}
                                    {/* Previous */}
                                    { this.state.uploadProgress === 0 ?
                                        <div className={this.state.currentCard === 0 ? "nextprevdivlifted" : "nextprevdiv"} >
                                            <button 
                                                className="buttonSlider"
                                                disabled={
                                                    this.state.currentCard === 0 ||
                                                    this.state.uploadProgress > 0
                                                }
                                                onClick={() => {
                                                    reactSwipeEl.prev();
                                                    if (this.state.currentCard === 1) {
                                                        this.setState({ departmentClasses: [] });
                                                        this.setState({ class: "" });
                                                    }
                                                    if (this.state.currentCard === 2) {
                                                        this.setState({ departmentClasses: [] });
                                                        this.getClassesFromDepartment();
                                                        this.setState({ class: "" });
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
                                    
                                        : <div className="" />
                                    }


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
                </div>
                <Footer />
            </div>
        )
    }

}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(TestBankSubmit);


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Field = ({
    label,
    id,
    type,
    placeholder,
    required,
    autoComplete,
    value,
    onChange,
    formrowclass
  }) => (
    <div className="FormRow">
      <label htmlFor={id} className={formrowclass === "" ? "FormRowLabel" : formrowclass}>
        {label}
      </label>
      <input
        className="FormRowInput"
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </div>
  );