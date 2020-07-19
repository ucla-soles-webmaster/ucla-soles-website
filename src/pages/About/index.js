import React, { Component } from 'react';

import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import coverPhoto from '../../coverImages/rick.jpg';
import './index.css'


class About extends Component {
    
    // Add constructor here when necessary

    render() {
        return (
            <div>
                <Navigation transparentNav={true} />
                <PagePhoto imageSource={coverPhoto} title={"About Us"}></PagePhoto>
                <div class="headings">
                    <h2>
                        Mission Statement
                    </h2>
                    <p>
                        SHPE changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development.
                    </p>
                </div>
                <div class="headings">
                    <h2>
                        Vision
                    </h2>
                    <p>
                        SHPE’s vision is a world where Hispanics are highly valued and influential as the leading innovators, scientists, mathematicians and engineers.
                    </p>
                </div>
                <div class="headings">
                    <h2>
                        About SHPE
                    </h2>
                    <p>
                        The Society of Hispanic Professional Engineers (SHPE) is a non-profit organization dedicated to increasing the participation<br></br>
                        of Hispanic professionals and college students in the fields of engineering, science, and math. Founded in Los Angeles, California,<br></br>
                        in 1974 by a group of engineers employed by the city of Los Angeles, their objective was to form an organization of professional<br></br> 
                        engineers to serve as role models in the Hispanic community. National in scope, the organization is composed of 50 professional <br></br>
                        chapters with about 2000 members and 200 student chapters with a membership of more than 10,000 college students.<br></br>
                        SHPE engages in outreach programs, provides leadership and networking opportunities to its members, and helps in furthering<br></br>
                        their education, advancing their careers, and promoting their recognition.<br></br>
                        Visit <a href="https://shpe.org/">shpe.org</a> for more information.
                    </p>
                </div>
                <div class="headings">
                    <h2>
                        About SOLES
                    </h2>
                    <p>
                        The Society of Latino Engineers and Scientists at UCLA (SOLES) is a student organization in the Henry Samueli School of Engineering and Applied Science,<br></br>
                        and is a student chapter of SHPE. Established in 1978 at the University of California, Los Angeles, SOLES partners with UCLA NSBE <br></br>
                        and AISES chapters to form the Triad-Organizations, or Tri-Org.<br></br>  
                        SOLES is also supported by the UCLA Center for Excellence in Engineering and Diversity (CEED).<br></br>
                        Visit <a href="http://uclatri.org/">uclatri.org</a> for more information.<br></br>
                        Visit <a href="http://ceed.ucla.edu/">ceed.ucla.edu</a> for more information.
                    </p>
                </div>
                <div class="headings">
                    <h2>
                        Our Awards
                    </h2>
                    <p>
                        Include Awards here.
                    </p>
                </div>
                <div class="headings">
                    <h2>
                        Club Developments
                    </h2>
                    <p>
                        Add Developments here.
                    </p>
                </div>
                <div class="headings">
                    <h2>
                        Timeline
                    </h2>
                    <p>
                        Place Timeline here.
                    </p>
                </div>
            </div>
        );
    }

    
}


export default About;

