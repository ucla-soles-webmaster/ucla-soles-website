import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import SignOutButton from '../../pages/SignOut';
import * as ROUTES from '../../constants/routes'


import './accountNavStyle.css';


class AccountNav extends Component {

    render () {
      return (
        <nav className="accountNav">
            <ul className="ulist">
                <li className="mininavli">
                    <Link to={ROUTES.SPONSORS} style={linkStyle} >Profile</Link>
                </li>
                <li className="mininavli">
                    <Link to={ROUTES.SPONSORS} style={linkStyle} >Test Bank</Link>
                </li>
                <li className="mininavli">
                    <Link to={ROUTES.SPONSORS} style={linkStyle} >Merch</Link>
                </li>
            </ul>
        </nav>
      );
  }

}

// Return (to App)
export default AccountNav;


// Component Styling
const linkStyle = {
    textDecoration: "none",
    color: "white",
  };