import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Form from 'react-bootstrap/Form'
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import coverPhoto from '../../coverImages/sign.png';
import './signUpStyle.css';


const SignUpPage = () => (
    <div>
        <Navigation transparentNav={false} />
        <div className="navgap">
            <PhotoBack />
            <h1 className="suh1">Sign Up</h1>
            <SignUpForm />
        </div>

        <br />
        <br />
        <br />
        <Footer />
    </div>
);


class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        // Initial State of form
        this.state = { 
            firstName: '',
            lastName: '',
            email: '',
            passwordOne: '',
            passwordTwo: '',
            career: '',
            major: '',
            graduation: '',
            employer: '',
            alumnet: '',
            bio: '',
            linkedin: '',
            join_reason: '',
            first_year: false,
            newsletter: false,
            signup_local: false,
            signup_national: false,
            no_membership: false,
            /* Predetermined attributes: */
            local_member: false,
            national_member: false,
            testbank_passes: 1,
            admin: false,
            error: null,
        };                                                                                                                                                                                  
    }

    onSubmit = event => {
        const { 
            firstName,
            lastName,
            email,
            passwordOne,
            career,
            major,
            graduation,
            employer,
            alumnet,
            bio,
            linkedin,
            join_reason,
            first_year,
            newsletter,
            signup_local,
            signup_national,
            no_membership,
        } = this.state;
        
        var firestore = this.props.firebase.getFirestore();
        var changeView = false;

        // Determine amount of testbank passes, if first year or not
        var tb_passes = this.state.first_year === true ? 2 : 1;
        
        // Add user to Cloud Firestore
        firestore.collection('users').add({
            first_name: firstName,
            last_name: lastName,
            email: email,
            career: career,
            major: major,
            graduation: graduation,
            employer: employer,
            alumnet: alumnet,
            bio: bio,
            linkedin: linkedin,
            join_reason: join_reason,
            first_year: first_year,
            testbank_passes: tb_passes,
            newsletter: newsletter,
            signup_local: signup_local,
            signup_national: signup_national,
            no_membership: no_membership,
            /* Predetermined */
            local_member: false,
            starpoints: 0,
            national_member: false,
            admin: false,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            changeView = true;
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        })
            
        // Add user to User Authentication list
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.props.history.push(ROUTES.SIGN_IN);
            })
            .catch(error => {
                this.setState({ error });
            });

        this.props.history.push(ROUTES.SIGN_IN);
        if (changeView === true) {
            this.props.history.push(ROUTES.SIGN_IN);
        }

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    changeCareer(event) {
        this.setState({ career: event.target.value });
    }

    changeMajor(event) {
        this.setState({ major: event.target.value });
    }

    addAlumNet(event) {
        this.setState({alumnet: event.target.value});
    }

    render() {
        const {
            firstName,
            lastName,
            email,
            passwordOne,
            passwordTwo,
            career,
            major,
            graduation,
            employer,
            alumnet,
            bio,
            linkedin,
            join_reason,
            first_year,
            newsletter,
            signup_local,
            signup_national,
            no_membership,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            firstName === '' ||
            career === '' ||
            passwordOne.length < 6 ||
            passwordTwo.length < 6 ||
            //( career === 'student' && ( !( email.includes("ucla.edu") || email.includes("@g.ucla.edu") ) ) ) ||
            ( (career === 'student' || career === 'alumni') && (major === '' || graduation === null) ) ||
            ( career === 'alumni' && alumnet === '') ||
            ( (career === 'alumni' || career === 'industry') && employer === '' ) ||
            ( (career === 'student') && (!signup_local && !signup_national && !no_membership));

        return (
            <form onSubmit={this.onSubmit} className="suform">
                {/* Items needed for sign up */}
                
                <fieldset className="FormGroup">
                    <Field 
                        label="First Name"
                        id="text"
                        type="text"
                        placeholder="Rick"
                        required
                        value={firstName}
                        formrowclass=""
                        onChange={(e) => {
                            this.setState({ firstName: e.target.value });  
                        }}
                    />
                    <Field 
                        label="Last Name"
                        id="text"
                        type="text"
                        placeholder="Ainsworth"
                        required
                        value={lastName}
                        formrowclass=""
                        onChange={(e) => {
                            this.setState({ lastName: e.target.value });  
                        }}
                    />
                    <Field 
                        label="Email"
                        id="email"
                        type="email"
                        placeholder="students use @ucla.edu"
                        required
                        autoComplete="email"
                        value={email}
                        formrowclass=""
                        onChange={(e) => {
                            this.setState({ email: e.target.value });  
                        }}
                    />
                    { career === "student" && !( email.includes("ucla.edu") || email.includes("@g.ucla.edu") )
                        ?   <p className="disclaimer1" style={{color: "red", marginLeft: "7%"}}>
                                Students must use their @ucla.edu email.
                            </p>
                        :   <div className="" />
                    }
                </fieldset>

                <br/>

                <fieldset className="FormGroup">
                    <Field 
                        label="Password"
                        id="password"
                        type="password"
                        placeholder=". . . . . . . . . ."
                        required
                        value={passwordOne}
                        formrowclass=""
                        onChange={(e) => {
                            this.setState({ passwordOne: e.target.value });  
                        }}
                    />
                    <Field 
                        label="Confirm"
                        id="password"
                        type="password"
                        placeholder=". . . . . . . . . ."
                        required
                        value={passwordTwo}
                        formrowclass=""
                        onChange={(e) => {
                            this.setState({ passwordTwo: e.target.value });  
                        }}
                    />
                    { passwordOne === passwordTwo
                        ? <div className="" />
                        :   <p className="disclaimer1" style={{color: "red", marginLeft: "6.5%"}}>
                                Passwords do not match.
                            </p>
                    }
                    { passwordOne !== '' && (passwordOne.length < 6)
                        ? <p className="disclaimer1" style={{color: "red", marginLeft: "6.5%"}}>
                            Password must be at least 6 characters.
                          </p>
                        :   
                          <div className="" />
                    }
                </fieldset>

                <br />

                <fieldset className="FormGroup">
                    <Form.Group className="FormRow" controlId="exampleForm.ControlSelect1">
                        <Form.Label className="FormRowLabelDropDown">Which best describes you?</Form.Label>
                            <Form.Control 
                                className={career === "" ? "graydd" : "FormRowInput"}
                                as="select"
                                onChange={this.changeCareer.bind(this)}
                            >
                                <option value="">-</option>
                                <option value="student" >Student</option>
                                <option value="alumni" >Alumni</option>
                                <option value="industry" >Industry Member</option>
                            </Form.Control>
                    </Form.Group>
                </fieldset>


                {/* IF they selected UCLA Student */}
                {career === "student"
                    ?   <div className="randomtop">
                            <fieldset className="FormGroup">
                                <Form.Group className="FormRow" controlId="exampleForm.ControlSelect1">
                                    <Form.Label className="FormRowLabelDropDown">What is your major?</Form.Label>                                   
                                        <Form.Control 
                                            className={major === "" ? "graydd" : "FormRowInput"}
                                            as="select"
                                            onChange={this.changeMajor.bind(this)}
                                        >
                                            <option value="">-</option>
                                            <option value="aerospace" >Aerospace Engineering</option>
                                            <option value="bioengineering" >Bioengineering</option>
                                            <option value="biology" >Biology</option>
                                            <option value="chemical" >Chemical Engineering</option>
                                            <option value="chemistry" >Chemistry</option>
                                            <option value="civil" >Civil Engineering</option>
                                            <option value="ce" >Computer Engineering</option>
                                            <option value="cs" >Computer Science</option>
                                            <option value="cse" >Computer Science and Engineering</option>
                                            <option value="ee" >Electrical Engineering</option>
                                            <option value="materials" >Materials Engineering</option>
                                            <option value="math" >Mathematics</option>
                                            <option value="mechanical" >Mechanical Engineering</option>
                                            <option value="physics" >Physics</option>
                                            <option value="other" >Other</option>
                                            <option value="undeclared" >Undeclared</option>                                       
                                        </Form.Control>
                                </Form.Group>
                                <Field 
                                    label="Expected Graduation Year"
                                    placeholder="2021"
                                    required
                                    value={graduation}
                                    formrowclass="FormRowLabelDropDown"
                                    onChange={(e) => {
                                        this.setState({ graduation: e.target.value });  
                                    }}
                                />
                                {console.log(this.state.first_year)}
                                <div className="checksu" style={{paddingTop: "1vw", paddingBottom: "1vw"}}>
                                    <input 
                                        type="checkbox" 
                                        disabled={signup_local || no_membership}
                                        onChange={(e) => {
                                            this.setState({ first_year: !first_year });  
                                        }}
                                        className="checkboxsu"
                                    />
                                    <label className="checklabelsu"  for="vehicle1"> 
                                        Is this your first year as a UCLA student? (Freshman or Transfer)
                                    </label>
                                </div>
                            </fieldset>
                            <br/>
                            <fieldset className="FormGroup">
                                <Form.Group className="FormRow" controlId="exampleForm.ControlSelect1">
                                    <Form.Label className="FormRowLabelDropDown">Membership Options</Form.Label>
                                    
                                </Form.Group>
                                <p className="disclaimer1">
                                    Not choosing a membership <b> will not prohibit</b> you from participating in our biweekly meetings, socials, 
                                    outreach events, or any of our general body gatherings for that matter. Opportunity to join Membership will be available
                                    anytime on the Profile page.
                                </p>

                                {/* Insert Membership descriptions here */}

                                <Grid className="membergrid" container spacing={3}>
                                    <Grid container item xs={12} spacing={3}>
                                        <Grid container spacing={0}>
                                            <Grid item xs={7} spacing={0}>
                                                <Paper square elevation={2} style={{height: "3vw", fontSize: "0.95vw", padding: "0.5vw", backgroundColor: "lightgrey" }} ></Paper>
                                            </Grid>
                                            <Grid item xs={2} spacing={0}>
                                                <Paper square style={{height: "3vw", fontSize: "0.95vw", padding: "0.5vw", textAlign: "center", backgroundColor: "#e05f2f", color: "white" }} >National ($10)</Paper>
                                            </Grid>
                                            <Grid item xs={2} spacing={0}>
                                                <Paper square style={{height: "3vw", fontSize: "0.95vw", padding: "0.5vw", textAlign: "center", backgroundColor: "#ffff7d" }} >&nbsp; Local &nbsp; ($1)</Paper>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <FormRow 
                                            item="Participation in SOLES MentorSHPE" 
                                            row_height="1.7vw"
                                            padding_top="0.7vw"
                                            national_check="Yes"
                                            check_height="1.5vw"
                                            local_check="Yes" />
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <FormRow
                                            item="Access to the SOLES Test Bank" 
                                            row_height="1.7vw"
                                            check_height="1.5vw"
                                            padding_top="0.7vw"
                                            national_check="Yes"
                                            local_check="Yes" />
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <FormRow 
                                            item="Priority seats for our corporate tours" 
                                            padding_top="0.71vw"
                                            row_height="1.7vw"
                                            check_height="1.5vw"
                                            national_check="Yes"
                                            local_check="Yes" />
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <FormRow 
                                            item="Eligibility to play on our IM sports teams" 
                                            padding_top="0.7vw"
                                            row_height="1.7vw"
                                            check_height="1.5vw"
                                            national_check="Yes"
                                            local_check="Yes" />
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <FormRow 
                                            item="Your resume included in our Resume Database and given to our industry sponsors" 
                                            row_height="2.5vw"
                                            padding_top="1.2vw"
                                            check_height="1.8vw"
                                            national_check="Yes"
                                            local_check="Yes" />
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <FormRow 
                                            item="More than $2 million in scholarship offerings" 
                                            row_height="1.74vw"
                                            padding_top="0.7vw"
                                            check_height="1.5vw"
                                            national_check="Yes"
                                            local_check="No" />
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <FormRow 
                                            item="Internship, fellowships, and co-op opportunities" 
                                            row_height="2.8vw"
                                            padding_top="1.2vw"
                                            check_height="2.1vw"
                                            national_check="Yes"
                                            local_check="No" />
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <FormRow 
                                            item="Discounted registration to SHPE National, Regional and Local events" 
                                            row_height="2.8vw"
                                            check_height="2.1vw"
                                            padding_top="1.2vw"
                                            national_check="Yes"
                                            local_check="No" />
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <FormRow 
                                            item="Exclusive access to the SHPE Career Center where you can share your resume with top employers 
                                            and search for job openings." 
                                            row_height="4.3vw"
                                            check_height="2.9vw"
                                            padding_top="1.9vw"
                                            national_check="Yes"
                                            local_check="No" />
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <FormRow 
                                            item="Résumé building and interview workshops hosted by our sponsors" 
                                            row_height="2.8vw"
                                            check_height="2.1vw"
                                            padding_top="1.2vw"
                                            national_check="Yes"
                                            local_check="No" />
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <FormRow 
                                            item="Professional and leadership training offered at various events: SHPE National Conference, RLDC, 
                                            NILA, Graduate Leadership Institute, and more!"
                                            row_height="5.6vw"
                                            check_height="3.5vw"
                                            padding_top="2.6vw"
                                            national_check="Yes"
                                            local_check="No" />
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <FormRow 
                                            item="Access to the SHPE Foundation GRE/GRAD Lab to guide you through the graduate school application process"
                                            row_height="4.3vw"
                                            check_height="2.9vw"
                                            padding_top="1.9vw"
                                            national_check="Yes"
                                            local_check="No" />
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <FormRow 
                                            item="Access to the SHPE Foundation Graduate Institute, an intensive program filled seminars addressing the
                                            needs of Graduate Students" 
                                            row_height="5.6vw"
                                            check_height="3.5vw"
                                            padding_top="2.6vw"
                                            national_check="Yes"
                                            local_check="No" />
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <FormRow 
                                            item="Lifelong networking opportunities with high profile professionals, fellow students, corporate 
                                            representatives and SHPE leaders"
                                            row_height="4.3vw"
                                            check_height="2.9vw"
                                            padding_top="1.9vw"
                                            national_check="Yes"
                                            local_check="No" />
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <FormRow 
                                            item="Complimentary subscriptions to SHPE Magazine and Hispanic Business Magazine" 
                                            row_height="2.8vw"
                                            padding_top="1.2vw"
                                            check_height="2.1vw"
                                            national_check="Yes"
                                            local_check="No" />
                                    </Grid>
                                    <Grid container item xs={12} spacing={3}>
                                        <FormRow 
                                            item="Join the SHPE Familia and find support wherever you go with over 250 chapters and 10,000 
                                            members across the nation." 
                                            row_height="4.3vw"
                                            check_height="2.9vw"
                                            padding_top="1.92vw"
                                            national_check="Yes"
                                            local_check="No" />
                                    </Grid>
                                </Grid>

                                <br/><br/>
                                
                                <div className="checksu">
                                    <input 
                                        type="checkbox" 
                                        disabled={signup_national || no_membership}
                                        onChange={(e) => {
                                            this.setState({ signup_local: !signup_local });  
                                        }}
                                        className="checkboxsu"
                                    />
                                    <label className="checklabelsu"  for="vehicle1"> 
                                        Local SOLES Member
                                    </label>
                                    { signup_local ? 
                                        <p className="disclaimer2">
                                            * Your online SOLES account will become fully functional with Local Member benefits
                                            once we verify your Venmo payment of $1 directed to @UCLA-SOLES *
                                        </p>
                                        : <div className=""/>
                                    }
                                </div>


                                <div className="checksu">
                                    <input 
                                        type="checkbox" 
                                        disabled={signup_local || no_membership}
                                        onChange={(e) => {
                                            this.setState({ signup_national: !signup_national });  
                                        }}
                                        className="checkboxsu"
                                    />
                                    <label className="checklabelsu"  for="vehicle1"> 
                                        National SHPE Member - includes Local SOLES Membership benefits
                                    </label>
                                    { signup_national ? 
                                        <p className="disclaimer2">
                                            * Your online SOLES account will become fully functional with National Member benefits
                                            once we verify that you signed up on <a href="https://shpeconnect.org/" target="_blank" rel="noopener noreferrer">SHPE CONNECT</a> 
                                            &nbsp; and joined our chapter *
                                        </p>
                                        : <div className=""/>
                                    }
                                </div>


                                <div className="checksu">
                                    <input 
                                        type="checkbox" 
                                        disabled={signup_local || signup_national}
                                        onChange={(e) => {  
                                            this.setState({ no_membership: !no_membership });
                                        }}
                                        className="checkboxsu"
                                    />
                                    <label className="checklabelsu"  for="vehicle1"> 
                                        No thank you / later
                                    </label>
                                </div>
                                <br/>
                            </fieldset>
                        </div>
                    : <div className=""/>
                } 


                {/* IF they selected Alumni*/}
                {career === "alumni"
                    ?   <div className="randomtop">
                            <fieldset className="FormGroup">
                                <Form.Group className="FormRow" controlId="exampleForm.ControlSelect1">
                                    <Form.Label className="FormRowLabelDropDown">Graduating Major</Form.Label>
                                        <Form.Control 
                                            className={major === "" ? "graydd" : "FormRowInput"}
                                            as="select"
                                            onChange={this.changeMajor.bind(this)}
                                        >
                                            <option value="">-</option>
                                            <option value="aerospace" >Aerospace Engineering</option>
                                            <option value="bioengineering" >Bioengineering</option>
                                            <option value="biology" >Biology</option>
                                            <option value="chemical" >Chemical Engineering</option>
                                            <option value="chemistry" >Chemistry</option>
                                            <option value="civil" >Civil Engineering</option>
                                            <option value="ce" >Computer Engineering</option>
                                            <option value="cs" >Computer Science</option>
                                            <option value="cse" >Computer Science and Engineering</option>
                                            <option value="ee" >Electrical Engineering</option>
                                            <option value="materials" >Materials Engineering</option>
                                            <option value="math" >Mathematics</option>
                                            <option value="mechanical" >Mechanical Engineering</option>
                                            <option value="physics" >Physics</option>
                                            <option value="other" >Other</option>
                                        </Form.Control>
                                </Form.Group>
                                <Field 
                                    label="Year of Graduation"
                                    placeholder="2015"
                                    required
                                    value={graduation}
                                    formrowclass="FormRowLabelDropDown"
                                    onChange={(e) => {
                                        this.setState({ graduation: e.target.value });  
                                    }}
                                />
                                <Field 
                                    label="Current Employer"
                                    placeholder="Google"
                                    required
                                    value={employer}
                                    formrowclass="FormRowLabelDropDown"
                                    onChange={(e) => {
                                        this.setState({ employer: e.target.value });  
                                    }}
                                />
                                <Form.Group className="FormRow" controlId="exampleForm.ControlSelect1">
                                    <Form.Label className="FormRowLabelDropDown">Join the SOLES Alumni Network?</Form.Label>   
                                        <Form.Control 
                                            className={alumnet === "" ? "graydd" : "FormRowInput"}
                                            as="select"
                                            onChange={this.addAlumNet.bind(this)}
                                        >
                                            <option value="">-</option>
                                            <option value="yes" >Yes</option>
                                            <option value="no" >No</option>                            
                                        </Form.Control>
                                </Form.Group>
                                <p className="disclaimer1">
                                        If selected "Yes" your name, email, major, and employer will only be
                                        shared with verified UCLA students.
                                </p>
                                {alumnet === "yes" ?
                                    <div>
                                        <Field 
                                            label="Bio (optional)"
                                            placeholder="My interests are..."
                                            value={bio}
                                            formrowclass="FormRowLabelDropDown"
                                            onChange={(e) => {
                                                this.setState({ bio: e.target.value });  
                                            }}
                                        />
                                        <Field 
                                            label="LinkedIn (Optional)"
                                            placeholder="Place your LinkedIn link here"
                                            value={linkedin}
                                            formrowclass="FormRowLabelDropDown"
                                            onChange={(e) => {
                                                this.setState({ linkedin: e.target.value });  
                                            }}
                                        />
                                    </div>
                                    : <div className=""/>
                                }
                            </fieldset>    
                        </div>
                    : <div className=""/>
                }


                {/* IF they selected Industry Member*/}
                {career === "industry"
                    ?   <div className="randomtop">
                            <fieldset className="FormGroup">
                                <Field 
                                    label="Employer"
                                    placeholder="Google"
                                    required
                                    value={employer}
                                    formrowclass="FormRowLabelDropDown"
                                    onChange={(e) => {
                                        this.setState({ employer: e.target.value });  
                                    }}
                                />
                                <Field 
                                    label="Reason for joining"
                                    placeholder="Want to partner with SOLES and..."
                                    required
                                    value={join_reason}
                                    formrowclass="FormRowLabelDropDown"
                                    onChange={(e) => {
                                        this.setState({ join_reason: e.target.value });  
                                    }}
                                />
                            </fieldset>    
                        </div>
                    : <div className=""/>
                }

                

                <br/>
                
                <input 
                    type="checkbox" 
                    onChange={(e) => {
                        this.setState({ newsletter: !newsletter });  
                    }}
                    className="newslettersu" 
                />
                <label for="vehicle1" className="newsletterlabelsu"> 
                    Sign up for the weekly SOLES newsletter
                </label>
                
                { this.state.newsletter === true
                    ?
                        <div>
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfQEJK9U-EvaBFuDpoJMEGbBifz0oydO-4CAhilCaZvir38Zg/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0" className="newletterForm">Loading…</iframe>
                        </div>
                    :
                    <br/>
                }

                <br/>
                <br/>
                <br/>
                <button disabled={isInvalid} type="submit" className="buttonsu">
                    { isInvalid 
                        ? <div>Incomplete</div>
                        : <div>Submit</div>}
                </button>
                <br/>
                

                {error && <p>{error.message}</p>}


            </form>
        )
    }
}


const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link> and join.
    </p>
)

const SignUpForm = compose(
    withRouter,
    withFirebase,
  )(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };



// Helper Consts

const PhotoBack = (props) => (
    <div className="photoback">
        <img src={coverPhoto} className="photobackphoto" alt="Sign Up"/>
    </div>


);

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

 const FormRow = ({ item, national_check, local_check, row_height, padding_top, padding_top_label, check_height }) => (
      <Grid container spacing={0}>
        <Grid item xs={7} spacing={0} >
          <Paper square elevation={2} style={{height: row_height, fontSize: "0.95vw", padding: "0.5vw" }} >{item}</Paper>
        </Grid>
        <Grid item xs={2} spacing={0}>
          <Paper square style={{height: check_height, fontSize: "0.95vw", padding: "0.5vw", paddingTop: padding_top, textAlign: "center" }} >{national_check}</Paper>
        </Grid>
        <Grid item xs={2} spacing={0}>
          <Paper square style={{ height: check_height, fontSize: "0.95vw", padding: "0.5vw", paddingTop: padding_top, textAlign: "center" }} >{local_check}</Paper>
        </Grid>
      </Grid>
    );