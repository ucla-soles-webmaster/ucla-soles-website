import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import About from '../About';
import Initiatives from '../Initiatives' 
import EBoard from '../EBoard'
import Contact from '../Contact'
import Sponsors from '../Sponsors'

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
 
const App = () => (
  <Router>
    <div>



      {/*
        These Route components not shown visually.
        Only used behind the scenes with routing the DOM.
        Add a Route component when you want to add a new page in nav bar. 
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

      
    </div>
  </Router>
);
 
export default withAuthentication(App);