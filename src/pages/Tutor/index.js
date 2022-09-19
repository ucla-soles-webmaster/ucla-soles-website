import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes'
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import sun from '../../Photos/Icons/sun.png';


class Tutor extends Component {

    render() {
        return (
            <div className="addPoppins">
                <Navigation transparentNav={false} />
                <div className="navgapTutoring">
                    <div className = "titleFont1Tutoring">
                        <div className='tutoringSunContainer'>                                
                            <img className = "TutorPageSun" src= {sun} alt="Yellow Sun" ></img>
                        </div>
                            <div className = "TutorPageTitle">
                                Tutors:
                            </div>
                    </div>

                    <p className = "TutorPageDescription1">
                        Thanks for helping us. We really appreciate it. <br/><br/>
                        The Tutoring Platform is held in Microsoft Teams. Once you are added, you will see three
                        main pages: SOLES, AISES, and NSBE. Since you entered through the SOLES website, you will 
                        be mainly tutoring for SOLES. If the other organizations need additional tutors, we may need 
                        you to tutor for them (but it’s as easy as clicking to their page). <br/><br/>

                        Tutoring is held from <strong style={{color: 'black'}}>3-4 PM PST on Tuesday’s and Thursday’s</strong>. Don’t worry about not being able
                        to make these times - we appreciate it if you help us just one time, or many times. You are 
                        making no commitment by signing up and gaining access to the Tutoring Platform. <br/><br/>

                        <div style={{textDecoration:'underline'}}>A few things to keep in mind…</div> <br/>

                        <ol style={{textAlign: "left"}}>
                            <li>
                                Make sure the student has signed the Safety/Liability Waiver (though there is a very low chance that they somehow got into the Tutoring 
                                Platform without signing it).
                            </li>
                            <li>
                                By being a tutor, you are representing SOLES. As such, please act appropriately. 
                                Act as you would want your own teacher to act.
                            </li>
                            <li>
                                Potential danger? Report the incident to the <a href='https://www.thehotline.org/'>Child Protective Services</a> and then email <b>uclasoles.tutoring@gmail.com</b>.
                            </li>
                            <li>
                                Unfortunately, you cannot record tutoring sessions.
                            </li>
                        </ol>
                    </p>
                    
                    <br/>
                    <br/>
                    <br/>
                    <p className = "TutorPageDescription1">
                        <strong>
                            All good? Here's the link to sign up!
                        </strong>
                    </p>
                    <br/>
                    <div className="TutorSignUpFormContainer">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe_WHuFVKud7r9oVAobngVeEOboQcw_RLL1oEHj6Y8narVXFg/viewform?embedded=true" title="Tutor Sign Up form" className='TutorSignUpForm'>Loading…</iframe>
                    </div>
                    <Link to={ROUTES.TUTORING} className="TutorPageButton">
                        Back to Tutoring
                    </Link>
                
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Footer/>
                </div>
            </div>
        );
    }
    

}


export default Tutor;