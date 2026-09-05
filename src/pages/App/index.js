import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
 
import LandingPage from '../Landing';

import About from '../About';
import Initiatives from '../Initiatives' 
import EBoard from '../EBoard'
import Contact from '../Contact'
import Sponsors from '../Sponsors'
import Tutoring from '../Tutoring'
import Tutor from '../Tutor'
import TutoringStudent from '../TutStu'

import GeneralMeetings from '../GeneralMeetings';




import CopaLanding from '../CopaLanding';
import CopaAbout from '../CopaAbout';
import CopaTournaments from '../CopaTournaments';
import CopaGuidelines from '../CopaGuidelines';
import CopaSponsors from '../CopaSponsors';
import CopaContact from '../CopaContact';
import Projects from '../Projects';

import * as ROUTES from '../../constants/routes';


const App = () => (
  <Router>
    <div>
      
      {/*
        These Route components not shown visually.
        Only used behind the scenes with routing the DOM.
        Add a Route component when you want to add a new page (in nav bar). 
      */}

      <Route exact path={ROUTES.LANDING} component={LandingPage} />

      {/* Added Pages */}
      <Route path={ROUTES.ABOUT} component={About} />
      <Route path={ROUTES.INITIATIVES} component={Initiatives} />
      <Route path={ROUTES.EBOARD} component={EBoard} />
      <Route path={ROUTES.CONTACT} component={Contact} />
      <Route path={ROUTES.SPONSORS} component={Sponsors} />
      <Route path={ROUTES.TUTORING} component={Tutoring} />
      <Route path={ROUTES.TUTOR} component={Tutor} />
      <Route path={ROUTES.TUTORING_STUDENT} component={TutoringStudent} />


      <Route path={ROUTES.GENERAL_MEETINGS} component={GeneralMeetings} />

      <Route exact path={ROUTES.COPA_DEL_SOL} component={CopaLanding} />
      <Route path={ROUTES.COPA_ABOUT} component={CopaAbout} />
      <Route path={ROUTES.COPA_TOURNAMENTS} component={CopaTournaments} />
      <Route path={ROUTES.COPA_GUIDELINES} component={CopaGuidelines} />
      <Route path={ROUTES.COPA_SPONSORS} component={CopaSponsors} />
      <Route path={ROUTES.COPA_CONTACT} component={CopaContact} />
      {/* <Route path={ROUTES.PROJECTS} component={Projects} /> */}
      {/*
      <Route path={ROUTES.ITEM} component={Item} />
      */}



      
    </div>
  </Router>
);
 
export default App;