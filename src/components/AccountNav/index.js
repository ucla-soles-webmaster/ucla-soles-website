import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import SignOutButton from '../../pages/SignOut';
import * as ROUTES from '../../constants/routes'

import { withAuthorization } from '../../pages/Session';


import './accountNavStyle.css';


class AccountNav extends Component {

    render () {
      return (
        <nav className="accountNav">
            <ul className="ulist">
                <li className="mininavli">
                    <Link to={ROUTES.ACCOUNT} style={linkStyle} >Profile</Link>
                </li>
                <li className="mininavli">
                    <Link to={ROUTES.TESTBANK} style={linkStyle} >Test Bank Hub</Link>
                </li>
                <li className="mininavli">
                    <Link to={ROUTES.MERCH} style={linkStyle} >Merch</Link>
                </li>
            </ul>
        </nav>
      );
  }

}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountNav);


// Component Styling
const linkStyle = {
    textDecoration: "none",
    color: "white",
  };