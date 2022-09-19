import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes'
import Navigation from '../../components/Navigation';

import Footer from '../../components/Footer';
import step1 from './step1.png'
import step2 from './step2.png'

import sun from '../../Photos/Icons/sun.png';


class TutoringStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studentName: '',
            guardianName: '',
            successfully_submitted_waiver: false,
            failed_submission_waiver: false
        }
    }

    onSubmit = (e) => {
        var that = this
        
        var firestore = that.props.firebase.getFirestore();
        
        firestore.collection('tutoring').add({
            student_name: that.state.studentName,
            guardian_name: that.state.guardianName
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            that.setState({ failed_submission_waiver: false})
            that.setState({ successfully_submitted_waiver: true })
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            that.setState({ failed_submission_waiver: true})
        })
    }

    render() {

        const isInvalid = 
            this.state.studentName === '' ||
            this.state.guardianName === '';

        return (
            <div className="addPoppins">
                <Navigation transparentNav={false} />
                <div className="navgapTutoring">
                    <div className = "titleFont1Tutoring">
                        <div className='tutoringSunContainer'>                                
                            <img className = "TutorPageSun" src= {sun} alt="Yellow Sun" ></img>
                        </div>
                            <div className = "TutorPageTitle">
                                Tutoring Platform Sign-Up
                            </div>
                    </div>
                    <br/>

                    <div className = "TutorPageDescription1">
                        We want to make sure that the tutoring experience goes as smoothly as possible. 
                        If you are a student, please electronically sign the waiver below (have your 
                        guardian sign it too if you are under 18).<br/><br/>
                        Note: <strong>you only have to submit this once</strong>, when you sign up for the Tutoring Platform for the first time.
                    </div>

                    <br/>
                    <br/>

                    <div className="waiverContainer">
                        <div className='waiverTitle'>
                            2020 SOLES OUTREACH WAIVER AGREEMENT
                        </div>
                        <div className='waiverSubtitle'>
                            Waiver of Liability, Assumption of Risk, and Indemnity Agreement
                        </div>

                        <div className='waiverDescription1'>
                            <b>Waiver:</b> In consideration of being permitted to participate in any way with the SOLES Outreach Program I, for
                            myself, my heirs, personal representatives, or assigns, do here by release, waive, discharge and covenant not to sue
                            The Regents of the University of California, its officers, employees, and agents from liability from any and all claims
                            including the negligence of The Regents of the University of California, SOLES Outreach Program, its officers,
                            employees and agents, resulting in personal injury, accidents or illnesses (including death), and property loss arising
                            from, but not limited to, participation in the SOLES Outreach Program.<br/><br/>
                            <b>Assumption of Risks:</b> Participation in SOLES Outreach Program for students carries with it certain inherent
                            risks that cannot be eliminated regardless of the care taken to avoid injuries. The specific risks vary from one activity
                            to another, but the risks range from (1) minor injuries such as scratches, bruises and sprains to (2) major injuries such
                            as eye injury or loss of sight, joint or back injuries, heart attack and concussions to (3) catastrophic injuries such as
                            paralysis or death.<br/><br/>
                            <b>Indemnification and Hold Harmless:</b> I also agree to INDEMNIFY AND HOLD The Regents of the
                            University of California HARMLESS from any and all claims, actions, suits, procedures, costs, expenses, damages
                            and liabilities, including attorney's fees brought as a result of my involvement in SOLES Outreach Program for
                            students and to reimburse them for any expenses incurred.<br/><br/>
                            <b>Severability:</b> The undersigned further expressly agrees that the foregoing waiver and assumption of risks
                            agreement is intended as broad and as inclusive as permitted by the law of the State of California and that if any portion
                            thereof is held invalid, it is agreed that the balance shall, notwithstanding, continue in full legal force and effect.<br/><br/>
                            <b>Acknowledgment of Understanding:</b> I have read this waiver of liability, assumption of risk, and
                            indemnity agreement, fully understand its terms, and understand that I am giving up substantial rights, including my
                            right to sue. I acknowledge that I am signing the agreement freely and voluntarily, and intend by my signature to be a
                            complete and unconditional release of all liability to the greatest extent allowed by law.<br/><br/><br/>

                            <b><i>
                                "I have read the previous paragraphs and I know, understand, and appreciate these and other risks that are inherent
                                in the SOLES Outreach Program. I hereby assert that my participation is voluntary and that I knowingly assume all
                                such risks," (signatures below)
                            </i></b>
                        </div>
                        <br/>

                    </div>

                    <br/>
                    <br/>
                    <div style={{paddingBottom: '1vw', marginBottom: '1vw'}}>
                        <div className="waiverSignatures">
                            <fieldset className="FormGroupWaiver">
                            <Field 
                                label="Student Name"
                                placeholder="   . . . . . . . . . ."
                                required
                                value={this.state.studentName}
                                formrowclass=""
                                onChange={(e) => {
                                    this.setState({ studentName: e.target.value });  
                                }}
                            />
                            <Field 
                                label="Guardian Name"
                                placeholder="   . . . . . . . . . ."
                                required
                                value={this.state.guardianName}
                                formrowclass=""
                                onChange={(e) => {
                                    this.setState({ guardianName: e.target.value });  
                                }}
                            />
                            </fieldset>
                        </div>

                        {/* Button */}
                        <button disabled={isInvalid || this.state.successfully_submitted_waiver} onClick={this.onSubmit} className="TutorStudentPageButton">
                            { isInvalid === true
                                ? 
                                    <div>Incomplete</div>
                                : 
                                    (this.state.successfully_submitted_waiver)
                                    ?
                                        <div>Scroll Down</div>
                                    :
                                        <div>Submit</div>
                                    
                            }
                        </button>
                        <br/>
                        <br/>

                    </div>

                    <br/>
                    {/* Error submitting (our firebase issue) */}
                    {   this.setState.failed_submission_waiver === true
                            ?
                                <div>
                                    Was unable to submit electronic signature request. Please try submitting again
                                </div>    
                            :
                                <div/>
                        
                    }
                    
                    {   this.state.successfully_submitted_waiver === true
                            ?
                                <div>
                                    <div class="TutorPageSubtitle1">
                                        Next Steps:<br/>
                                    </div>

                                    <ol className="studentNextSteps">
                                        <li>
                                            Click on this <a href='https://teams.microsoft.com/join/n6dz5soy00ws' target="_blank" rel="noopener noreferrer">link</a> in a new tab.
                                            <br/>
                                            <img src={step1} alt="step 1" className="step1Photo" />
                                            <br/>
                                            <br/>
                                        </li>
                                        <li>
                                            Fill out name and email to send a request for access to the Tutoring Platform.
                                            <br/>
                                            <img src={step2} alt="step 2" className="step1Photo" />
                                            <br/>
                                            <br/>
                                        </li>
                                        <li>
                                            After being accepted, we’ll send you an email that contains the link to go to Microsoft Teams.
                                            <br/>
                                            <br/>
                                        </li>
                                        <li>
                                            Have fun!
                                        </li>
                                    </ol>

                                    




                                </div>
                            :
                                <div/>

                    }

                    <br/><br/>

                    <Link to={ROUTES.TUTORING} className="TutorPageButton">
                    Back to Tutoring
                    </Link>

                    <br/><br/>
                    
                    


                </div>
                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>
        );
    }
    

}

const TutoringStudent1 = compose(
    withRouter,
    withFirebase,
  )(TutoringStudent);


export default TutoringStudent1;


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
    <div className="FormRowWaiver">
      <label htmlFor={id} className={formrowclass === "" ? "FormRowLabelWaiver" : formrowclass}>
        {label}
      </label>
      <input
        className="FormRowInput2Waiver"
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