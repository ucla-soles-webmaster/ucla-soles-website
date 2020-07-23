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
                <Link to={ROUTES.ACCOUNT} style={linkStyle} >
                    <li className="mininavli">
                        Profile
                    </li>
                </Link>
                <Link to={ROUTES.TESTBANK} style={linkStyle} >
                    <li className="mininavli">
                        Test Bank Hub
                    </li>
                </Link>
                <Link to={ROUTES.MERCH} style={linkStyle} >
                    <li className="mininavli">
                        Alumni Network
                    </li>
                </Link>
                <Link to={ROUTES.MERCH} style={linkStyle}>
                    <li className="mininavli">
                        Merch
                    </li>
                </Link>
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