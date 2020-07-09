import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../../pages/SignOut';
import * as ROUTES from '../../constants/routes'

import { AuthUserContext } from '../../pages/Session';

// Choose Navigation type depending on if user is signed in or not
const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => authUser 
        ? <NavigationAuth /> 
        : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

// When user Signed In
const NavigationAuth = () => (
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>LANDING</Link>
      </li>
      <li>
        <Link to={ROUTES.ABOUT}>ABOUT</Link>
      </li>
      <li>
        <Link to={ROUTES.INITIATIVES}>OUR INITIATIVES</Link>
      </li>
      <li>
        <Link to={ROUTES.EBOARD}>EBOARD</Link>
      </li>
      <li>
        <Link to={ROUTES.SPONSORS}>SPONSORS</Link>
      </li>
      <li>
        <Link to={ROUTES.CONTACT}>CONTACT</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
);

// When user not Signed In
const NavigationNonAuth = () => (
    <ul>
        <li>
          <Link to={ROUTES.LANDING}>LANDING</Link>
        </li>
        <li>
          <Link to={ROUTES.ABOUT}>ABOUT</Link>
        </li>
        <li>
          <Link to={ROUTES.INITIATIVES}>OUR INITIATIVES</Link>
        </li>
        <li>
          <Link to={ROUTES.EBOARD}>EBOARD</Link>
        </li>
        <li>
          <Link to={ROUTES.SPONSORS}>SPONSORS</Link>
        </li>
        <li>
          <Link to={ROUTES.CONTACT}>CONTACT</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_IN}>SIGN IN</Link>
        </li>
    </ul>
);

// Return (to App)
export default Navigation;