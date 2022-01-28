import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes'
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import './style.css';
import Sun from '../../boardImages/sun.png';


class Tutoring extends Component {

    render() {
        return (
            <div className="addPoppins">
                <Navigation transparentNav={false} />
                <div className="navgapTutoring">
                    <div className = "titleFont1Tutoring">
                        <div className='tutoringSunContainer'>                                
                            <img className = "TutorPageSun" src= {Sun} alt="Yellow Sun" ></img>
                        </div>
                            <div className = "TutorPageTitle">
                                Tutoring 
                            </div>
                    </div>

                    <div className = "TutorPageDescription1">
                        Hello! One of our missions at SOLES is to give back to the community in any way we can. 
                        Throughout the year, we do this through tutoring local high schools in math and science, 
                        as well as general mentorship regarding college, academics, and growing skill sets. 
                    </div>

                    <br/>
                    <div class="TutorPageSubtitle1">
                        Tutoring Platform Sign-In<br/>
                    </div>
                    <div className = "TutorPageDescription2">
                        If you’ve already gone through all the steps below and have access to the Tutoring Platform, 
                        please click the link below to sign in.
                    </div>
                    <a href="https://tinyurl.com/yb3e57d8" className="TutorPageButton">
                        Tutoring Platform
                    </a>



                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div class="TutorPageSubtitle1">
                        Tutoring Platform Sign-Up (Student)<br/>
                    </div>
                    <div className = "TutorPageDescription2">
                        We work together with our sister organizations, American Indian Science and Engineering Society (AISES) and National Society of Black Engineers (NSBE), to bring you a convenient way 
                        to access virtual tutoring in Microsoft Teams. Every week, we will host drop-in sessions on Tuesday and Thursday,
                        3-4 PM PST. No matter what, if you log onto our Tutoring Platform, you will have access to tutoring from a UCLA student, 
                        for free. Come by with questions regarding math, science, or even ask us questions about college or what to do in high school! 
                        We know a thing or two.
                    </div>
                    <Link to={ROUTES.TUTORING_STUDENT} className="TutorPageButton">
                        Student Sign-Up
                    </Link>


                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div class="TutorPageSubtitle1">
                        Tutor Sign-Up (UCLA Students)<br/>
                    </div>
                    <div className = "TutorPageDescription2">
                        Wow! You want to help us tutor? You’re amazing. Please click on the link below. 
                        You’ll be added to the Tutoring Platform as a tutor ASAP.
                    </div>
                    <Link to={ROUTES.TUTOR} className="TutorPageButton">
                        Tutor Sign-Up
                    </Link>

                    
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div class="TutorPageSubtitle1">
                        Questions/Comments For Us<br/>
                    </div>
                    <div className = "TutorPageDescription2">
                        If you have any questions about any of this, feel free to send an email to 
                        uclasoles.tutoring@gmail.com. We’ll try to answer your questions as soon as we can.
                    </div>
                    
                </div>
                
                
                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>
        );
    }
    

}


export default Tutoring;