import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AdminPage from '../Admin';
import About from '../About';
import Initiatives from '../Initiatives' 
import EBoard from '../EBoard'
import Contact from '../Contact'
import Sponsors from '../Sponsors'
import Tutoring from '../Tutoring'
import Tutor from '../Tutor'
import TutoringStudent from '../TutStu'
import Shop from '../Shop';

import AccountPage from '../Account';
import TestBank from '../TestBank';
import TestBankView from '../TestView';
import TestBankSubmit from '../TestSubmit';
import Merch from '../Merch';
import AlumNet from '../AlumNet';
import Shirt from '../Shirt';
import Sticker from '../Sticker';
import Orders from '../Orders';
import Thank_You from '../Thank_You';
import ToteBag from '../ToteBag';
import Beanie from '../Beanie';
import LogoShirt from '../LogoShirt';
import TestBankContestSubmit from '../TestBankContestSubmit';


import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';


 
const App = () => (
  <Router>
    <div>



      {/*
        These Route components not shown visually.
        Only used behind the scenes with routing the DOM.
        Add a Route component when you want to add a new page (in nav bar). 
      */}

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      {/* Added Pages */}
      <Route path={ROUTES.ABOUT} component={About} />
      <Route path={ROUTES.INITIATIVES} component={Initiatives} />
      <Route path={ROUTES.EBOARD} component={EBoard} />
      <Route path={ROUTES.CONTACT} component={Contact} />
      <Route path={ROUTES.SPONSORS} component={Sponsors} />
      <Route path={ROUTES.TUTORING} component={Tutoring} />
      <Route path={ROUTES.TUTOR} component={Tutor} />
      <Route path={ROUTES.TUTORING_STUDENT} component={TutoringStudent} />
      <Route path={ROUTES.SHOP} component={Shop} />
      <Route path={ROUTES.SHIRT} component={Shirt} />
      <Route path={ROUTES.STICKER} component={Sticker} />
      <Route path={ROUTES.ORDERS} component={Orders} />
      <Route path={ROUTES.TOTEBAG} component={ToteBag} />
      <Route path={ROUTES.BEANIE} component={Beanie} />
      <Route path={ROUTES.LOGO_SHIRT} component={LogoShirt} />
      <Route path={ROUTES.THANK_YOU} component={Thank_You} />
      <Route path={ROUTES.TESTBANK_CONTEST_SUBMIT} component={TestBankContestSubmit} />
      

      {/* Account Pages */}
      <Route path={ROUTES.TESTBANK} component={TestBank} />
      <Route path={ROUTES.TESTBANK_SUBMIT} component={TestBankSubmit} />
      <Route path={ROUTES.TESTBANK_VIEW} component={TestBankView} />
      <Route path={ROUTES.MERCH} component={Merch} />
      <Route path={ROUTES.ALUMNET} component={AlumNet} />

      
    </div>
  </Router>
);
 
export default withAuthentication(App);