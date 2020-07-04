import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes'

import { AuthUserContext } from '../Session';

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
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
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
        <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);

// Return (to App)
export default Navigation;